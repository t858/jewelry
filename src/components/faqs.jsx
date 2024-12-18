import React, { useState } from 'react';
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

const FAQs = () => {
  const [activePanel, setActivePanel] = useState(0);

  const togglePanel = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  const faqData = [
    {
      question: 'What are the delivery charges for orders from the Online Shop?',
      answer:
        'Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies. International medicine social worker participatory monitoring Bill and Melinda Gates our ambitions justice relief transform the world. Resolve emergency response accelerate progress, maximize collaborative cities lifting people up tackle frontline.',
    },
    {
      question: 'Which payment methods are accepted in the Online Shop?',
      answer:
        'Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies.',
    },
    {
      question: 'How long will delivery take?',
      answer:
        'Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy.',
    },
    {
      question: 'How secure is shopping in the Online Shop? Is my data protected?',
      answer:
        'Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving.',
    },
    {
      question: 'What exactly happens after ordering?',
      answer:
        'Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving.',
    },
    {
      question: 'Do I receive an invoice for my order?',
      answer:
        'Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving.',
    },
  ];

  return (
    <div>
      <header id="top" className="clearfix">
        <div className="container">
          <div className="top row">
            <div className="col-md-6 phone-shopping">
              <span>PHONE SHOPPING (01) 123 456 UJ</span>
            </div>
            <div className="col-md-18 text-right">
              <ul className="list-inline">
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/register">Create an account</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div id="breadcrumb" className="breadcrumb">
          <div className="row">
            <div className="col-md-24">
              <Link to="/" className="homepage-link">Home</Link>
              <span>/</span>
              <span className="page-title">FAQ's</span>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="row">
            <div id="page-header" className="col-md-24">
              <h1 id="page-title">FAQ's</h1>
            </div>

            <div id="col-main" className="contact-page clearfix">
              <div className="panel-group" id="accordion">
                {faqData.map((faq, index) => (
                  <div className="panel panel-default" key={index}>
                    <div className="panel-heading" onClick={() => togglePanel(index)}>
                      <h4 className="panel-title">
                        <a
                          className={activePanel === index ? '' : 'collapsed'}
                          href={`#collapse${index}`}
                          aria-expanded={activePanel === index}
                        >
                          {faq.question}
                        </a>
                      </h4>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className={`panel-collapse collapse ${
                        activePanel === index ? 'in' : ''
                      }`}
                    >
                      <div className="panel-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">© 2024 My Online Shop. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQs;
