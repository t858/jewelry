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

const TestimonialsPage = () => {
  const testimonials = [
    {
      image: "./assets/images/demo_100x100.png",
      rating: 100,
      previewText: "Exactly what i needed to be.",
      description:
        "Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies. International medicine social worker participatory monitoring Bill and Melinda Gates our ambitions justice relief transform the world.",
      name: "john smith",
      from: "Facebook",
    },
    {
      image: "./assets/images/demo_100x100.png",
      rating: 87,
      previewText: "Beautifully Brutal and Yet Still Visceral.",
      description:
        "Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies. International medicine social worker participatory monitoring Bill and Melinda Gates our ambitions justice relief transform the world.",
      name: "john smith",
      from: "Twitter",
    },
    {
      image: "./assets/images/demo_100x100.png",
      rating: 87,
      previewText: "What a Lovely Day!",
      description:
        "Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies. International medicine social worker participatory monitoring Bill and Melinda Gates our ambitions justice relief transform the world.",
      name: "john smith",
      from: "Pinterest",
    },
    {
      image: "./assets/images/demo_100x100.png",
      rating: 77,
      previewText: "Hold onto your seats for a visual and visceral masterpiece",
      description:
        "Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies. International medicine social worker participatory monitoring Bill and Melinda Gates our ambitions justice relief transform the world.",
      name: "john smith",
      from: "Facebook",
    },
  ];

  return (
    <>
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
                      <a href="#" className="btooltip swing" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btooltip swing" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btooltip swing" target="_blank" rel="noreferrer">
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

      <div id="content-wrapper-parent">
        <div id="content-wrapper">
          <div id="content" className="clearfix">
            <div id="breadcrumb" className="breadcrumb">
              <div className="container">
                <div className="row">
                  <div className="col-md-24">
                    <Link to="/" className="homepage-link" title="Back to the frontpage">
                      Home
                    </Link>
                    <span>/</span>
                    <span className="page-title">Testimonials</span>
                  </div>
                </div>
              </div>
            </div>
            <section className="content">
              <div className="container">
                <div className="row">
                  <div id="page-header">
                    <h1 id="page-title">Testimonials</h1>
                  </div>
                  <div id="col-main" className="col-md-24 normal-page clearfix">
                    <div className="page">
                      <div id="testimonials">
                        {testimonials.map((testimonial, index) => (
                          <div className="ttm-item" key={index}>
                            <ul className="ttm-item-top">
                              <li className="ttm-item-image" style={{ textAlign: "left" }}>
                                <img src={testimonial.image} alt="" />
                              </li>
                              <li className="ttm-item-rating">
                                <div className="rating-box">
                                  <div style={{ width: `${testimonial.rating}%` }} className="rating"></div>
                                </div>
                                <div className="ttm-item-preview-text">{testimonial.previewText}</div>
                              </li>
                            </ul>
                            <div className="ttm-item-preview-desc">
                              <p>{testimonial.description}</p>
                            </div>
                            <div className="ttm-item-preview-name">{testimonial.name}</div>
                            <div className="ttm-item-preview-from">{testimonial.from}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div id="footer-content">
          <h6 className="general-title contact-footer-title">Newsletter</h6>
          <div id="widget-newsletter">
            <div className="container">
              <div className="newsletter col-md-24">
                <form action="http://codespot.us5.list-manage.com/subscribe/post?u=ed73bc2d2f8ae97778246702e&id=c63b4d644d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                  <span className="news-desc">We promise only send the good things</span>
                  <div className="group_input">
                    <input className="form-control" type="email" placeholder="Your Email Address" name="Email" id="email-input" />
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
        </div>
      </footer>
    </>
  );
};

export default TestimonialsPage;

