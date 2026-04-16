import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would post the data to the backend
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main>
      <section className="page-header">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you.</p>
      </section>

      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
