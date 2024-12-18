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
);

const WishlistItem = ({ image, title, price }) => (
  <tr className="item wishlist-item">
    <td className="title text-left">
      <ul className="list-inline">
        <li className="image">
          <Link className="image text-left" to="/product">
            <img src={image} alt={title} />
          </Link>
        </li>
        <li className="link">
          <Link className="title text-left" to="/product">
            {title}
          </Link>
        </li>
      </ul>
    </td>
    <td className="title-1">${price.toFixed(2)}</td>
    <td className="action">
      <form method="post" action="/contact" className="contact-form">
        <input type="hidden" name="contact[email]" value="abc@gmail.com" />
        <input type="hidden" name="contact[tags]" value="x1293232771" />
        <button type="submit">
          <i className="fa fa-times"></i>
        </button>
      </form>
    </td>
    <td>
      <form action="/cart" method="post">
        <input type="hidden" name="id" value="3947639491" />
        <Link className="btn" to="/products">
          ADD TO CART
        </Link>
      </form>
    </td>
  </tr>
);

const Footer = () => (
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
);

const WishlistPage = () => {
  const wishlistItems = [
    { image: "./assets/images/demo_100x100.png", title: "Donec justo condimentum", price: 200 },
    { image: "./assets/images/demo_100x100.png", title: "Donec justo condimentum", price: 200 },
    { image: "./assets/images/demo_100x100.png", title: "Donec justo condimentum", price: 200 },
  ];

  return (
    <>
      <Header />
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
                    <span className="page-title">Wishlist Page</span>
                  </div>
                </div>
              </div>
            </div>
            <section className="content">
              <div className="container">
                <div className="row">
                  <div id="page-header" className="col-md-24">
                    <h1 id="page-title">Wishlist Page</h1>
                  </div>
                  <div id="col-main" className="col-md-24 clearfix">
                    <div className="page page-wishlist">
                      <div className="table-cart">
                        <div className="wrap-table">
                          <table className="cart-items haft-border">
                            <thead>
                              <tr className="top-labels">
                                <th className="text-left">Items</th>
                                <th>Price</th>
                                <th>Remove</th>
                                <th>Add to Cart</th>
                              </tr>
                            </thead>
                            <tbody>
                              {wishlistItems.map((item, index) => (
                                <WishlistItem key={index} {...item} />
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <a className="control-label" href="mailto:?subject=http://designshopify.com">
                          Share my wish list via email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishlistPage;

