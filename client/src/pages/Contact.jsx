import React, { useState } from "react";
import "./Contact.css"; // Optional CSS file for styling

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
    // Handle form submission logic (e.g., send data to server or display success message)
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us!</p>
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here"
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        {/* Contact Details */}
        <div className="contact-details">
          <h3>Our Contact Information</h3>
          <p><strong>Address:</strong> 123 E-commerce Street, Tech City, India</p>
          <p><strong>Phone:</strong> +91-12345-67890</p>
          <p><strong>Email:</strong> support@ecommerce.com</p>
          {/* Optional: Add a map */}
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.76954060016!2d77.4126153!3d23.2599336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6939e45fbd09%3A0xe35de04b54728eb0!2sRajiv%20Gandhi%20Proudyogiki%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1673279589923!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
