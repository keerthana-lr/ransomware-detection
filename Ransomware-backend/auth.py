from datetime import datetime, timedelta
from jose import jwt

SECRET_KEY = "mysecretkey"
ALGORITHM = "HS256"

def create_token(username):
    payload = {
        "sub": username,
        "exp": datetime.utcnow() + timedelta(hours=1)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)