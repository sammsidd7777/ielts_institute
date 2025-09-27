import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
     <footer>
      <div className="footer-top">
        <div className="footer-about">
          <img src="/img/Link → logo2.png.png" alt="IELTS Institute" className="footer-logo" />
          <p>IELTS Institute provides top-quality education, professional coaching, and expert guidance to help students achieve their dreams.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Faculty</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaLocationDot /> 86 Road Broklyn Street, New York, USA</p>
          <p><FaEnvelope /> <a href="mailto:info@IELTSinstitute.com">info@IELTSinstitute.com</a></p>
          <p><FaPhone /> <a href="tel:9958234365">9958234365</a></p>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 IELTS Institute. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
