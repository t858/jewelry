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



const Account = () => {
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
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/" />
        <title>Account Page</title>
        <link href="./assets/stylesheets/font.css" rel="stylesheet" />
        <link href="./assets/stylesheets/font-awesome.min.css" rel="stylesheet" />
        <link href="./assets/stylesheets/bootstrap.min.3x.css" rel="stylesheet" />
        <link href="./assets/stylesheets/cs.style.css" rel="stylesheet" />
      </head>

      <body className={`templateCustomersRegister notouch ${isAffixed ? 'affix animated' : ''}`}>
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
                  <Link to="./home" className="homepage-link" title="Back to the frontpage">Home</Link>
                  <span>/</span>
                  <span className="page-title">My Account</span>
                </div>
              </div>
            </div>
          </div>

          <section className="content">
            <div className="container">
              <div className="row">
                <div id="page-header" className="col-md-24">
                  <h1 id="page-title">My Account</h1>
                </div>
                <div className="col-sm-6 col-md-6 sidebar">
                  <div className="group_sidebar">
                    <h6 className="sb-title">Account Details</h6>
                    <ul id="customer_detail" className="list-unstyled sb-content">
                      <li>
                        <address className="clearfix">
                          <div className="info">
                            <i className="fa fa-user"></i>
                            <span className="address-group">
                              <span className="author">Jin Alkaid</span>
                              <span className="email">jin@gmail.com</span>
                            </span>
                          </div>
                          <div className="address">
                            <span className="address-group">
                              <span className="address1">Ung Van Khiem, Ho Chi Minh city, Vietnam</span>
                            </span>
                          </div>
                        </address>
                      </li>
                      <li>
                        <button className="btn btn-1" onClick={() => window.location.href = 'address.html'}>
                          Manage Address (1)
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="col-main" className="account-page col-sm-18 col-md-18 clearfix">
                  <div id="customer_orders">
                    <h6 className="sb-title">Order history</h6>
                    <table className="table-hover">
                      <thead>
                        <tr>
                          <th>Order</th>
                          <th>Date</th>
                          <th>Payment Status</th>
                          <th>Fulfillment Status</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(3)].map((_, i) => (
                          <tr key={i} className="odd">
                            <td>
                              <Link to="#">#100{i + 1}</Link>
                            </td>
                            <td>
                              <span className="note">Oct, 30 2015</span>
                            </td>
                            <td>
                              <span className="status_authorized">authorized</span>
                            </td>
                            <td>
                              <span className="status_unfulfilled">unfulfilled</span>
                            </td>
                            <td>
                              <span className="total">$668.00</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
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
      </body>
    </>
  );
};

export default Account;
