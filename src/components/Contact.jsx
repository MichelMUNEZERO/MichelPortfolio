import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Let's discuss your Project</h2>
          <p className="contact-subtitle">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Your Budget</option>
                <option value="< $1000">Less than $1,000</option>
                <option value="$1000 - $5000">$1,000 - $5,000</option>
                <option value="$5000 - $10000">$5,000 - $10,000</option>
                <option value="> $10000">More than $10,000</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
