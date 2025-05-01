import React, { useEffect, useState } from "react";
import "./profile.css";

export default function Profile() {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("userName");
        setUserName(storedUser);
    }, []);

    const handleLogOut = () => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");
        localStorage.removeItem("userName");
        window.location.href = "/login";
    };

    if (!userName) {
        return (
            <div className="login-warning-container">
            <h2 className="login-warning-heading">Log in first</h2>
            <a href="/login" class="btn btn-dark login-link">Go to Login Page</a>
        </div>
        
        );
    }

    return (
        <div className="profile-container">
            <h1 className="welcome-heading">Welcome, {userName}</h1>
            <p className="welcome-message">You’re officially in! Let’s create something amazing together. We're glad to have you on board.</p>
            <button className="logout-button" onClick={handleLogOut}>Log Out</button>
        </div>
    );
}
