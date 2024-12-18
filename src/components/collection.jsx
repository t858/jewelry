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
import "./collection_right";
import "./collection_left";

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
                  <span id="loginButton" className="dropdown-toggle" data-toggle="dropdown">
                    <Link to="/login">Login</Link>
                  </span>
                  <div id="loginBox" className="dropdown-menu text-left">
                    <form method="post" id="customer_login">
                      <div id="bodyBox">
                        <ul className="control-container customer-accounts list-unstyled">
                          <li className="clearfix">
                            <label htmlFor="customer_email_box">Email Address <span>*</span></label>
                            <input type="email" id="customer_email_box" className="form-control" />
                          </li>
                          <li className="clearfix">
                            <label htmlFor="customer_password_box">Password <span>*</span></label>
                            <input type="password" id="customer_password_box" className="form-control password" />
                          </li>
                          <li className="clearfix">
                            <button className="btn btn-1" type="submit">Login</button>
                          </li>
                          <li className="clearfix">
                            <Link className="btn btn-1" to="/register">Create an account</Link>
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="register">
                  <Link to="/register">Create an account</Link>
                </li>
              </ul>
            </li>
            <li id="widget-social">
              <ul className="list-inline">
                <li><a target="_blank" rel="noreferrer" href="#" className="btooltip" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a target="_blank" rel="noreferrer" href="#" className="btooltip" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a target="_blank" rel="noreferrer" href="#" className="btooltip" title="Pinterest"><i className="fa fa-pinterest"></i></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

const Breadcrumb = ({ title }) => (
  <div id="breadcrumb" className="breadcrumb">
    <div itemProp="breadcrumb" className="container">
      <div className="row">
        <div className="col-md-24">
          <Link to="/" className="homepage-link" title="Back to the frontpage">Home</Link>
          <span>/</span>
          <span className="page-title">{title}</span>
        </div>
      </div>
    </div>
  </div>
);

const ProductItem = ({ product }) => (
  <li className="element no_full_width">
    <ul className="row-container list-unstyled clearfix">
      <li className="row-left">
        <Link to="/product" className="container_item">
          <img src={product.image} alt={product.title} className="img-responsive" />
          {product.sale && <span className="sale_banner"><span className="sale_text">Sale</span></span>}
        </Link>
      </li>
      <li className="row-right parent-fly animMix">
        <div className="product-content-left">
          <Link to="/product" className="title-5">{product.title}</Link>
          <span className="spr-badge" data-rating={product.rating}>
            <span className="spr-starrating spr-badge-starrating">
              {Array.from({ length: 5 }, (_, i) => (
                <i key={i} className={`spr-icon ${i < product.rating ? 'spr-icon-star' : 'spr-icon-star-empty'}`} />
              ))}
            </span>
            <span className="spr-badge-caption">{product.reviews} review(s)</span>
          </span>
        </div>
        <div className="product-content-right">
          <div className="product-price">
            <span className="price">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </li>
    </ul>
  </li>
);

const CollectionPage = () => {
  const products = [
    { title: 'Product 1', image: '/assets/images/demo_270x270.png', price: 200, rating: 4, reviews: 1, sale: true },
    { title: 'Product 2', image: '/assets/images/demo_270x270.png', price: 300, rating: 5, reviews: 2, sale: false },
    // Add more product objects here
  ];

  return (
    <div id="content-wrapper-parent">
      <Header />
      <Breadcrumb title="Collection Full Width" />
      <div id="content" className="clearfix">
        <section className="content">
          <div className="container">
            <div className="row">
              <div id="page-header">
                <h1 id="page-title">Collection Full Width</h1>
              </div>
              <div className="collection-main-content">
                <ul id="sandBox" className="list-unstyled">
                  {products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollectionPage;
