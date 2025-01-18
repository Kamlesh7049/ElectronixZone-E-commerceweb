import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Get In Touch</h1>
        <p>
          We'd love to hear from you! Reach out with any questions, feedback, or
          inquiries.
        </p>
      </section>

      <div className="contact-container">
        {/* Form Section */}
        <div className="form-section">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="details-section">
          <h2>Contact Information</h2>
          <div className="info">
            <p>
              <i className="fas fa-map-marker-alt"></i> 123 E-commerce St.,
              Tech City, India
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> +91-12345-67890
            </p>
            <p>
              <i className="fas fa-envelope"></i> support@ecommerce.com
            </p>
          </div>
          {/* Optional Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.76954060016!2d77.4126153!3d23.2599336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6939e45fbd09%3A0xe35de04b54728eb0!2sRajiv%20Gandhi%20Proudyogiki%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1673279589923!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
