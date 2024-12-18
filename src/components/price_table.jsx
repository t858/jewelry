import React from "react";
import { Link } from "react-router-dom";
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

const Header = () => (
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
                  <Link to="/register">Create an Account</Link>
                </li>
              </ul>
            </li>
            <li id="widget-social">
              <ul className="list-inline">
                <li>
                  <a
                    target="_blank"
                    href="#"
                    className="btooltip swing"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Facebook"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="#"
                    className="btooltip swing"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Twitter"
                    rel="noreferrer"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="#"
                    className="btooltip swing"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Pinterest"
                    rel="noreferrer"
                  >
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

const PriceTableItem = ({ plan }) => (
  <li className={`pt-item ${plan.className}`}>
    <div className="pt-item-top">
      {plan.bestChoice && <div className="pt-item-label">Best Choice</div>}
      <h2 className="pt-item-title">{plan.title}</h2>
      <span className="pt-item-price">
        {plan.price}
        <span className="pt-item-small">/month</span>
      </span>
      <div className="pt-item-buy">
        <Link to="#">Buy This Package</Link>
      </div>
    </div>
    <div className="pt-item-bottom">
      <ul className="pt-item-description">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
        {plan.disabledFeatures.map((feature, index) => (
          <li key={index} className="disabled">
            <del>{feature}</del>
          </li>
        ))}
      </ul>
    </div>
  </li>
);

const PriceTable = () => {
  const plans = [
    {
      title: "Starter",
      price: "$9",
      className: "starter",
      bestChoice: false,
      features: [
        "Gravida Est Quis Euismod",
        "Maximus Quam Posuere",
        "Curabitur Cursus Dignis",
      ],
      disabledFeatures: [
        "Donec Aliquam Ante Non",
        "Donec Condimentum Fer",
      ],
    },
    {
      title: "Regular",
      price: "$59",
      className: "regular best-choice",
      bestChoice: true,
      features: [
        "Gravida Est Quis Euismod",
        "Maximus Quam Posuere",
        "Donec Aliquam Ante Non",
        "Curabitur Cursus Dignis",
      ],
      disabledFeatures: ["Donec Condimentum Fer"],
    },
    {
      title: "Premium",
      price: "$99",
      className: "premium",
      bestChoice: false,
      features: [
        "Gravida Est Quis Euismod",
        "Maximus Quam Posuere",
        "Curabitur Cursus Dignis",
        "Donec Aliquam Ante Non",
      ],
      disabledFeatures: [],
    },
    {
      title: "Ultimate",
      price: "$199",
      className: "ultimate",
      bestChoice: false,
      features: [
        "Gravida Est Quis Euismod",
        "Maximus Quam Posuere",
        "Curabitur Cursus Dignis",
        "Donec Aliquam Ante Non",
        "Donec Condimentum Fer",
      ],
      disabledFeatures: [],
    },
  ];

  return (
    <ul id="price-table">
      {plans.map((plan, index) => (
        <PriceTableItem key={index} plan={plan} />
      ))}
    </ul>
  );
};

const Footer = () => (
  <footer id="footer">
    <div id="footer-content">
      <h6 className="general-title contact-footer-title">Newsletter</h6>
      <div id="widget-newsletter">
        <div className="container">
          <div className="newsletter col-md-24">
            <form action="#" method="post" target="_blank">
              <span className="news-desc">We promise only to send the good things</span>
              <div className="group_input">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Your Email Address"
                  name="Email"
                  id="email-input"
                />
                <button className="btn btn-1" type="submit">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const PriceTablePage = () => (
  <>
    <Header />
    <main>
      <div className="container">
        <h1 id="page-title">Price Table</h1>
        <PriceTable />
      </div>
    </main>
    <Footer />
  </>
);

export default PriceTablePage;
