# 🚀 Ransomware Detection System

## 🔐 Overview
This project is a full-stack machine learning application that detects ransomware- React for frontend UIThis project is a full-stack machine learning application that detects ransomware activities in financial transaction datasets.

---

## 🧠 Features

✅ User Authentication (Login system)  
✅ CSV File Upload  
✅ Machine Learning Prediction  
✅ Result Visualization using Table  
✅ Multi-page UI (Login → Upload → Result)  

---

## 🛠️ Tech Stack

### Backend
- Python
- FastAPI
- Scikit-learn
- Pandas

### Frontend
- ReactJS
- Axios

---

## 📸 Screenshots

### 🔐 Login Page
![Login](Screenshots/Login.png)

### 📂 Upload Page
![Upload](Screenshots/Upload.png)

### Result
![Result](Screenshots/Result.png)

---

## ▶️ How to Run

### 🔧 Backend

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload

The system uses:
- Machine Learning for detection
- FastAPI for backend
```
---
### 🎨 Frontend
```bash
cd frontend
npm install
npm start
```

---
## 🧩 Machine Learning Model

The model was trained using Google Colab on the BitcoinHeist dataset.

### Steps:
- ✅ Data preprocessing  
- ✅ Feature selection  
- ✅ Model training (Random Forest)  
- ✅ Hyperparameter tuning  
- ✅ Exported using joblib  

### Saved Files:
- model.pkl  
- scaler.pkl  

---

## 👩‍💻 Author

**Keerthana L R**

---

## 📌 Future Improvements

- ✅ Add graphs & charts 📊  
- ✅ Add real user authentication 🔐  
- ✅ Deploy using cloud (AWS / Render) 🌍  
