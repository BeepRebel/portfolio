import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (This is a demo form)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">CONNECT WITH ME</h2>
        <p className="contact-subheading">Get in touch</p>
        <p className="contact-text">
          I'd love to hear from you! If you have any questions, comments, or feedback,
          please use the form below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group">
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  <div className="form-group full-width">
    <textarea
      name="message"
      placeholder="Enter your message"
      rows="5"
      value={formData.message}
      onChange={handleChange}
      required
    ></textarea>
  </div>

  <div className="form-group full-width" style={{ textAlign: "center" }}>
    <button type="submit" className="contact-button">
      Send
    </button>
  </div>
</form>

      </div>
    </section>
  );
};

export default Contact;