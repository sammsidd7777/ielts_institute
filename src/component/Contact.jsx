import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";
import "./css/ContactPage.css"



export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Ready to start your IELTS journey? We're here to help you achieve your target band score.
            Contact us today for personalized guidance and support.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="card-header">
              <MessageSquare className="icon" />
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {formSubmitted ? (
              <div className="form-success">
                <CheckCircle className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thank you for contacting us. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" rows="4" placeholder="Tell us about your goals..." required></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  <Send className="icon-btn" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="info-item">
                <div className="icon-circle"><Phone /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                  <p className="small-text">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle"><Mail /></div>
                <div>
                  <h4>Email</h4>
                  <p>info@ieltsacademy.com</p>
                  <p className="small-text">We reply within 24 hours</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle"><MapPin /></div>
                <div>
                  <h4>Address</h4>
                  <p>123 Education Street, Learning City, LC 12345, United States</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle"><Clock /></div>
                <div>
                  <h4>Office Hours</h4>
                  <p className="small-text">
                    Mon-Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
