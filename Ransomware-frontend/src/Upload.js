import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handlePredict = async () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      localStorage.setItem("results", JSON.stringify(res.data.results));
      navigate("/result");
    } catch {
      alert("Prediction failed");
    }
  };

  return (
    <div style={style.container}>
  <div style={style.card}>

    <div>
      <h1 style={style.title}>Upload CSV File</h1>

      <p style={style.description}>
        Upload transaction dataset to detect whether activities are
        ransomware related or not using the trained ML model.
      </p>

      <br />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button style={style.button} onClick={handlePredict}>
        Predict
      </button>
    </div>

    <h4 style={style.footer}>
      -- Keerthana L R --
    </h4>

  </div>
</div>
  );
}


const style = {
  container: {
    background: "linear-gradient(to right, #1d5e1d, #461c65)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },

  card: {
    background: "rgba(255,255,255,0.12)",
    padding: "40px",
    borderRadius: "20px",
    width: "500px",
    minHeight: "450px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  title: {
    fontSize: "45px",
    fontWeight: "bold",
    marginBottom: "20px"
  },

  description: {
    fontSize: "18px",
    lineHeight: "1.6"
  },

  button: {
    padding: "12px 25px",
    backgroundColor: "#8a00c4",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px"
  },

  footer: {
    marginTop: "40px",
    fontWeight: "bold",
    fontSize: "20px"
  }
};


export default Upload;