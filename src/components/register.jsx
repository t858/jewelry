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
const Header = () => {
  return (
    <header id="top" className="clearfix">
      <div className="container">
        <div className="top row">
          <div className="col-md-6 phone-shopping">
            <span>PHONE SHOPPING (01) 123 456 UJ</span>
          </div>
          <div className="col-md-18">
            <ul className="text-right">
              <li className="customer-links hidden-xs">
                <ul id="accounts" className="list-inline">
                  <li className="my-account">
                    <Link to="/account">My Account</Link>
                  </li>
                  <li className="login">
                    <Link to="/login">Login</Link>
                  </li>
                  <li>/</li>
                  <li className="register">
                    <Link to="/register">Create an account</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <nav className="navbar">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Register Form Component
const RegisterForm = () => {
  return (
    <div id="content" className="clearfix">
      <div id="breadcrumb" className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-24">
              <Link to="/" className="homepage-link" title="Back to the frontpage">Home</Link>
              <span>/</span>
              <span className="page-title">Create Account</span>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container">
          <div className="row">
            <div id="page-header" className="col-md-24">
              <h1 id="page-title">Register</h1>
            </div>
            <div id="col-main" className="col-md-24 register-page clearfix">
              <form method="post" action="/account" id="create_customer" acceptCharset="UTF-8">
                <input type="hidden" name="form_type" value="create_customer" />
                <input type="hidden" name="utf8" value="✓" />
                <ul id="register-form" className="row list-unstyled">
                  <li id="first_namef">
                    <label className="control-label" htmlFor="first_name">First Name</label>
                    <input name="customer[first_name]" id="first_name" className="form-control" type="text" />
                  </li>
                  <li id="last_namef">
                    <label className="control-label" htmlFor="last_name">Last Name</label>
                    <input name="customer[last_name]" id="last_name" className="form-control" type="text" />
                  </li>
                  <li id="emailf">
                    <label className="control-label" htmlFor="email">Your Email <span className="req">*</span></label>
                    <input name="customer[email]" id="email" className="form-control" type="email" />
                  </li>
                  <li id="passwordf">
                    <label className="control-label" htmlFor="password">Your Password <span className="req">*</span></label>
                    <input name="customer[password]" id="password" className="form-control password" type="password" />
                  </li>
                  <li className="unpadding-top action-last">
                    <button className="btn" type="submit">Create an Account</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-content">
        <h6 className="general-title contact-footer-title">Newsletter</h6>
        <div id="widget-newsletter">
          <div className="container">
            <div className="newsletter col-md-24">
              <form
                action="http://codespot.us5.list-manage.com/subscribe/post?u=ed73bc2d2f8ae97778246702e&id=c63b4d644d"
                method="post"
                target="_blank"
              >
                <span className="news-desc">We promise only send the good things</span>
                <div className="group_input">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your Email Address"
                    name="Email"
                  />
                  <div className="unpadding-top">
                    <button className="btn btn-1" type="submit">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-content footer-content-bottom clearfix">
          <div className="container">
            <div className="copyright col-md-12">
              © 2015 <Link to="/about-us">Jewelry - HTML template</Link>. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Register Page Component
const RegisterPage = () => {
  return (
    <div id="content-wrapper-parent">
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default RegisterPage;
