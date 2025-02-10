import './contact.css'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
      // Send email via EmailJS
      emailjs
        .sendForm(
          'service_auyokrn', // Replace with your service ID
          'template_xkd8pzi', // Replace with your template ID
          e.target, // The form element
          'P2LBVawcHK9nRbNp_' // Replace with your user ID
        )
        .then(
          (result) => {
            setStatus('Message Sent! I\'ll get back to you soon.');
            setFormData({
              name: '',
              email: '',
              message: '',
            });
          },
          (error) => {
            setStatus('Oops! Something went wrong. Try again.');
          }
        );
    } else {
      setStatus('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button className="contact-btn"type="submit">Send Message</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactPage;
