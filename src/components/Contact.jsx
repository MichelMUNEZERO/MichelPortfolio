import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// Build a mailto URL with form data pre-filled so users can send directly
// when EmailJS is unavailable.
function createMailtoUrl(formData) {
  const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`,
  );
  return `mailto:michelmunezero25@gmail.com?subject=${subject}&body=${body}`;
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "", // 'success' or 'error'
    showEmailLink: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "", showEmailLink: false });

    try {
      // EmailJS configuration
      // These keys are intentionally client-side (EmailJS is designed for browser use).
      // Override them via environment variables for easier credential rotation.
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_7krprop";
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_24vu669";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "4QcufM_4cy-ugl3yG";
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          budget: formData.budget,
          message: formData.message,
          email: "michelmunezero25@gmail.com", // Recipient email expected by template
          to_email: "michelmunezero25@gmail.com", // Fallback recipient email
        },
        publicKey,
      );

      console.log("Email sent successfully:", response);

      setStatus({
        loading: false,
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        type: "success",
        showEmailLink: false,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        budget: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, message: "", type: "", showEmailLink: false });
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus({
        loading: false,
        message:
          "Oops! Something went wrong. Please try again or contact me directly at",
        type: "error",
        showEmailLink: true,
      });

      // Clear error message after 10 seconds
      setTimeout(() => {
        setStatus({ loading: false, message: "", type: "", showEmailLink: false });
      }, 10000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Let's discuss your Project</h2>
          <p className="contact-subtitle">
            Ready to start your next project? Share your ideas and requirements,
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
              {status.showEmailLink && (
                <>
                  {" "}
                  <a
                    href={createMailtoUrl(formData)}
                    className="email-link"
                  >
                    michelmunezero25@gmail.com
                  </a>
                </>
              )}
            </div>
          )}

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

          <button
            type="submit"
            className="btn-primary"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
