import React, { useEffect, useState } from 'react';
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

const AboutUs = () => {
  const [isAffixed, setIsAffixed] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsAffixed(scrollTop > 100); // Adjust the threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`templatePage notouch ${isAffixed ? 'affix animated' : ''}`}>
      <header id="top" className="clearfix">
        <div className="container">
          <div className="top row">
            <div className="col-md-6 phone-shopping">
              <span>PHONE SHOPPING (01) 123 456 UJ</span>
            </div>
            <div className="col-md-18 text-right">
              <ul className="list-inline customer-links">
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
            </div>
          </div>
        </div>
      </header>

      <div id="content-wrapper">
        <div id="breadcrumb" className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-24">
                <Link to="/" className="homepage-link" title="Back to the frontpage">
                  Home
                </Link>
                <span>/</span>
                <span className="page-title">About Us</span>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container">
            <div className="row">
              <h1 id="page-title">About Us</h1>
              <p>
                <img src="./assets/images/demo_1170x420.png" alt="About Us" />
              </p>
              <p>
                The About Us page of your shop is vital because it’s where users go when first
                trying to determine a level of trust. Here are a few things you should touch on:
              </p>
              <ul>
                <li>Who you are</li>
                <li>Why you sell the items you sell</li>
                <li>Where you are located</li>
                <li>How long you have been in business</li>
                <li>How long you have been running your online shop</li>
                <li>Who are the people on your team</li>
                <li>Contact information</li>
                <li>Social links (Twitter, Facebook)</li>
              </ul>
              <p>
                To edit the content on this page, go to the <Link to="/">Pages</Link> section of
                your admin.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>© 2024 Your Company. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;