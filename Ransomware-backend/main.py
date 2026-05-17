from fastapi import FastAPI, UploadFile, File, Depends, HTTPException
from fastapi.security import HTTPBearer
from jose import jwt, JWTError
import pandas as pd
import joblib
from pydantic import BaseModel
from auth import create_token
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()



# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")

SECRET_KEY = "mysecretkey"
security = HTTPBearer(auto_error=False)

# Fake user
FAKE_USER = {
    "username": "admin",
    "password": "admin123"
}

@app.get("/")
def home():
    return {"message": "API running"}


class LoginRequest(BaseModel):
    username: str
    password: str


@app.post("/login")
def login(data: LoginRequest):
    if data.username != FAKE_USER["username"] or data.password != FAKE_USER["password"]:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"token": create_token(data.username)}

def verify_token(token=Depends(security)):
    if token is None:
        raise HTTPException(status_code=403, detail="Token missing")

    try:
        actual_token = token.credentials

        payload = jwt.decode(
            actual_token,
            SECRET_KEY,
            algorithms=["HS256"]
        )
        return payload

    except Exception as e:
        print("Token Error:", e)
        raise HTTPException(status_code=403, detail="Invalid token")


# Prediction API
@app.post("/predict")
def predict(file: UploadFile = File(...), user=Depends(verify_token)):

    df = pd.read_csv(file.file)

    df = df[['length', 'weight', 'count', 'looped', 'neighbors', 'income']]

    df_scaled = scaler.transform(df)

    preds = model.predict(df_scaled)

    df['prediction'] = ["Ransomware" if p == 0 else "Non Ransomware" for p in preds]

    return {"results": df.to_dict(orient="records")}