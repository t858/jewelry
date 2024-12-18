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

const Blog = () => {
  return (
    <>
      <header id="top" className="clearfix">
        <div className="container">
          <div className="top row">
            <div className="col-md-6 phone-shopping">
              <span>PHONE SHOPPING (01) 123 456 UJ</span>
            </div>
            <div className="col-md-18 text-right">
              <ul className="customer-links list-inline">
                <li className="my-account">
                  <Link to="/account">My Account</Link>
                </li>
                <li className="login">
                  <Link to="/login">Login</Link>
                </li>
                <li className="register">
                  <Link to="/register">Create an account</Link>
                </li>
              </ul>
              <ul className="social-links list-inline">
                <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" target="_blank"><i className="fa fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/collections">Collections</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main id="content-wrapper-parent">
        <div id="content-wrapper">
          <div id="breadcrumb" className="breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-md-24">
                  <Link to="/">Home</Link> / Blog Full Width
                </div>
              </div>
            </div>
          </div>

          <section className="content">
            <div className="container">
              <div className="row">
                <div id="page-header" className="col-md-24">
                  <h1 id="page-title">Blog Full Width</h1>
                </div>

                <div id="col-main" className="blog-page col-xs-24 col-sm-24 col-content">
                  <div className="blogs">
                    <article className="blogs-item">
                      <div className="row">
                        <div className="article-content col-md-24">
                          <h4><Link to="/blog/sample">Sample Blog Post</Link></h4>
                          <p>Blog content goes here...</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer id="footer">
        <div id="footer-content" className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>About Us</h5>
              <ul className="list-unstyled">
                <li><Link to="/about">Store Locations</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Customer</h5>
              <ul className="list-unstyled">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/return-policy">Return Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Blog;
