import React from 'react';
import { RiArrowGoBackFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>Need help or have questions? We love to hear from you!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <Button type="submit" variant="success">Send Message</Button>
        </form>

        <a href="/" className="go-back">
          <RiArrowGoBackFill className="back-icon" /> Back to Home
        </a>
      </div>
    </div>
  );
}

export default Contact;
