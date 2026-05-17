import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ LOGIN FUNCTION
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/login", {
        username,
        password
      });

      localStorage.setItem("token", res.data.token);

      alert("Login successful ✅");
      navigate("/upload");

    } catch (err) {
      alert("Invalid username or password ❌");
    }
  };

  // ✅ FORGOT PASSWORD (SIMULATION)
  const handleForgotPassword = () => {
    alert(
      "Password Reset Info:\n\nUse default credentials:\nUsername: admin\nPassword: admin123\n\nOr contact admin."
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Ransomware Detection System</h1>

        <p style={{ maxWidth: "400px", margin: "auto" }}>
          This system uses Machine Learning to detect ransomware-related
          activities in financial transaction datasets.
        </p>

        <h2 style={{ marginTop: "20px" }}>Login</h2>

        <input
          style={styles.input}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={styles.link} onClick={handleForgotPassword}>
          Forgot Password?
        </p>

        <p style={{ fontSize: "14px", marginTop: "20px" }}>
          Default Login:  
          <br />
          username: <b>admin</b>  
          <br />
          password: <b>admin123</b>
        </p>

        <h4 style={{ marginTop: "20px" }}> -- Keerthana L R --</h4>
      </div>
    </div>
  );
}


//STYLES (GREEN + PURPLE THEME)

const styles = {
  container: {
    background: "linear-gradient(to right,  #1d5e1d, #461c65)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },

  

  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    backdropFilter: "blur(10px)"
  },

  input: {
    display: "block",
    padding: "10px",
    margin: "10px auto",
    borderRadius: "5px",
    border: "none",
    width: "200px"
  },

  button: {
    padding: "10px 20px",
    marginTop: "10px",
    backgroundColor: "#6a0dad",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  link: {
    marginTop: "10px",
    cursor: "pointer",
    textDecoration: "underline"
  }
};

export default Login;