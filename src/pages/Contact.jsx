import React, { useRef } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 
import './Contact.css';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_UNIQUE_ID", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        formRef.current.reset();
      } else {
        alert("Oops! There was a problem sending your message.");
      }
    } catch (error) {
      alert("Error submitting the form.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
       
        <div className="contact-info">
          <h2 className="title">CONTACT ME</h2>
          <p className="subtitle">Let's work together! Feel free to reach out via phone or email.</p>
          
          <div className="contact-links">
            <div className="link-item">
              <FaPhoneAlt className="icon" /> <span>+94 74 047 5733</span>
            </div>
            <div className="link-item">
              <FaEnvelope className="icon" /> <span>dewnichamathka849@gmail.com</span>
            </div>
          </div>
        </div>

        
        <div className="form-wrapper">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;