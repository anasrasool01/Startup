import React from "react";
import "./prefooter.css";
import logo from "../../assets/logo.png"
import { FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Prefooter = () => {
  return (
    <div className="prefooter">
      <div className="prefooter-column">
        <ul>
          <li>
            <img src={logo} alt="logo" width={150} />
          </li>
        </ul>
      </div>
      <div className="prefooter-column">
        <h3>COMPANY</h3>
        <ul>
          <li>About Us</li>
          <li>Our Team</li>
          <li>Pricing</li>
          {/* <li>Trust</li>
          <li>Customers</li>
          <li>Partners</li> */}
        </ul>
      </div>
      <div className="prefooter-column">
        <h3>Links</h3>
        <ul>
          <li>How it works</li>
          <li>FAQS</li>
        </ul>
      </div>
      <div className="prefooter-column">
        <h3>Follow us</h3>
        <ul>
          <li>
            Stay in touch and keep up to date with all the activities, news and
            events.
          </li>
          <div className="social-media">
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="#" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </ul>
      </div>
      <div className="prefooter-column">
        <h3>ADDRESS</h3>
        <ul>
          <li>Bahawalpur</li>
          <li>itsdevanas@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Prefooter;
