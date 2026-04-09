import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "", // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const destinationEmail = (
        import.meta.env.VITE_CONTACT_DESTINATION_EMAIL ||
        "michelmunezero25@gmail.com"
      ).trim();

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Missing EmailJS environment variables. Add them to your .env file.",
        );
      }

      if (!destinationEmail) {
        throw new Error(
          "Destination email is empty. Set VITE_CONTACT_DESTINATION_EMAIL in .env.",
        );
      }

      const templateParams = {
        ...formData,
        to_email: destinationEmail,
        reply_to: formData.from_email,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey,
        },
      );

      console.log("Email sent successfully:", response);

      setStatus({
        loading: false,
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        type: "success",
      });

      // Reset form
      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        budget: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, message: "", type: "" });
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);

      const rawErrorText =
        error?.text || error?.message || "Email service is not configured.";
      const isNetworkError =
        /Failed to fetch|NetworkError|ERR_INTERNET_DISCONNECTED/i.test(
          rawErrorText,
        );
      const isRecipientError = /recipient|recipients address is empty/i.test(
        rawErrorText,
      );

      const errorText = isNetworkError
        ? "Network request blocked or failed. Check internet, disable VPN/ad-blocker, and allow access to api.emailjs.com."
        : isRecipientError
          ? "Recipient is not configured in EmailJS template. Set your template 'To email' to michelmunezero25@gmail.com (no braces) and save the template."
          : rawErrorText;

      setStatus({
        loading: false,
        message: `Failed to send message: ${errorText}`,
        type: "error",
      });

      // Clear error message after 7 seconds
      setTimeout(() => {
        setStatus({ loading: false, message: "", type: "" });
      }, 7000);
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
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
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
