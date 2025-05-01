import React from 'react';
import { RiArrowGoBackFill } from "react-icons/ri";
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Us</h1>
        <p>
          Welcome to our tech store! We are passionate about bringing you the best deals on laptops, tablets, and TVs. 
          Our mission is to deliver high-quality gadgets that fit your budget and lifestyle.
        </p>
        <p>
          Whether you're a student, professional, or gamer, we have something for everyone. 
          Our products are hand-picked and tested for performance and reliability.
        </p>
        <p>
          Thank you for choosing us — your satisfaction is our priority.
        </p>
        <a href="/" className="go-back">
          <RiArrowGoBackFill className="back-icon" /> Back to Home
        </a>
      </div>
    </div>
  );
}

export default About;
