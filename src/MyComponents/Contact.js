// Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file for styling

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Feel free to reach out to us with any questions or feedback.</p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Your message" required></textarea>
        </div>
        
        <button type="submit" className="btn btn-sm" style={{ backgroundColor: 'black', color: 'white' }}>Send Message</button>

      </form>
      
      <div className="contact-info">
        <h2>Our Address</h2>
        <p>In your HEART!</p>
        
        <h2>Phone</h2>
        <p>+91 8889627251</p>
        
        <h2>Email</h2>
        <p>dmishra17.dm@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact
