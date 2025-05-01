import React, { useState } from 'react';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const userName = email.split("@")[0];

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("userName", userName); 

        alert("Login data saved to localStorage!");

        setEmail("");
        setPassword("");

        window.location.href = "/profile";
    }

    return (
        <div>
            <div className="Container">
                <h1>Login</h1>
                <div className="row">
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <div style={{ marginBottom: "10px" }}>
                            <label>Email:</label><br />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                style={{
                                    padding: "12px 14px",
                                    fontSize: "17px",
                                    borderRadius: "8px",
                                    border: "1px solid #ccc",
                                    backgroundColor: "#fdfdfd",
                                    boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.05)",
                                    transition: "all 0.3s ease",
                                    outline: "none",
                                    width: "100%",
                                    marginBottom: "10px"
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <label>Password:</label><br />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                style={{
                                    padding: "12px 14px",
                                    fontSize: "17px",
                                    borderRadius: "8px",
                                    border: "1px solid #ccc",
                                    backgroundColor: "#fdfdfd",
                                    boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.05)",
                                    transition: "all 0.3s ease",
                                    outline: "none",
                                    width: "100%",
                                    marginBottom: "10px"
                                }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ padding: "8px 16px" }}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
