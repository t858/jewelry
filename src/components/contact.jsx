import React from 'react';
import { Link } from 'react-router-dom';
import "./assets/stylesheets/font.css";
import "./assets/stylesheets/font-awesome.min.css";
import "./assets/stylesheets/jquery.camera.css";
import "./assets/stylesheets/jquery.fancybox-buttons.css";
import "./assets/stylesheets/cs.animate.css";
import "./assets/stylesheets/application.css";
import "./assets/stylesheets/swatch.css";
import "./assets/stylesheets/jquery.owl.carousel.css";
import "./assets/stylesheets/jquery.bxslider.css";
import "./assets/stylesheets/bootstrap.min.3x.css";
import "./assets/stylesheets/cs.bootstrap.3x.css";
import "./assets/stylesheets/cs.global.css";
import "./assets/stylesheets/cs.style.css";
import "./assets/stylesheets/cs.media.3x.css";
import "./assets/stylesheets/spr.css";
import "./assets/stylesheets/addthis.css";

// Header Component
const Header = () => (
  <header id="top" className="clearfix">
    <div className="container">
      <div className="top row">
        <div className="col-md-6 phone-shopping">
          <span>PHONE SHOPPING (01) 123 456 UJ</span>
        </div>
        <div className="col-md-18 text-right">
          <ul className="list-inline">
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Create an Account</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbarContent"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/logo.png" alt="Brand Logo" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

// Footer Component
const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-24 text-center">
          <p>&copy; 2024 Jewelry - React Template. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

// Contact Form Component
const ContactForm = () => (
  <div className="col-md-12">
    <h3>Drop Us A Line</h3>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" className="form-control" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email <span className="req">*</span></label>
        <input type="email" id="email" className="form-control" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message <span className="req">*</span></label>
        <textarea id="message" className="form-control" name="message" rows="5" required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

// Contact Info Component
const ContactInfo = () => (
  <div className="col-md-12">
    <h6>Contact Information</h6>
    <p><strong>Office Address:</strong> 249 Ung Van Khiem Street, Binh Thanh Dist, HCM city</p>
    <p><strong>Phone:</strong> +84 0123456xxx</p>
    <p><strong>Email:</strong> support@designshopify.com</p>
    <h6>Follow Us On</h6>
    <ul className="social-links list-inline">
      <li><a href="#" className="fa fa-facebook" /></li>
      <li><a href="#" className="fa fa-twitter" /></li>
      <li><a href="#" className="fa fa-google-plus" /></li>
      <li><a href="#" className="fa fa-pinterest" /></li>
    </ul>
  </div>
);

// Contact Page Component
const ContactPage = () => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-24">
          <h1 className="text-center">Contact Page</h1>
        </div>
      </div>
      <div className="row">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactPage;
