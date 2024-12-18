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
                  <a target="_blank" href="#" rel="noreferrer">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#" rel="noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#" rel="noreferrer">
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

const Sidebar = () => (
  <div className="left-sidebar">
    <div className="group_sidebar">
      <h6 className="sb-title">Product Categories</h6>
      <ul className="list-unstyled sb-content list-styled">
        <li>
          <Link to="/collections">Bracelets</Link>
        </li>
        <li>
          <Link to="/collections">Earrings</Link>
        </li>
        <li>
          <Link to="/collections">Necklaces</Link>
        </li>
        <li>
          <Link to="/collections">Rings</Link>
        </li>
      </ul>
      <h6 className="sb-title">Specials</h6>
      <div className="sb-content">
        <div className="deal">
          <Link to="/product">
            <img src="./assets/images/demo_100x100.png" alt="Special Product" />
          </Link>
          <p>
            <Link to="/product">Curabitur cursus dignis</Link>
          </p>
          <p className="price">
            <span className="price-sale">$259.00</span> <del>$300.00</del>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ProductInformation = ({ product }) => (
  <div className="product-information">
    <h1>{product.name}</h1>
    <div className="price">${product.price}</div>
    <p>{product.description}</p>
    <div className="actions">
      <button className="btn btn-primary">Add to Cart</button>
      <Link to="/wishlist" className="btn btn-secondary">
        <i className="fa fa-heart"></i> Add to Wishlist
      </Link>
    </div>
  </div>
);

const RelatedProducts = ({ products }) => (
  <section className="related-products">
    <h6>You may also like</h6>
    <div className="products">
      {products.map((product, index) => (
        <div key={index} className="product">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <h4>{product.name}</h4>
          <div className="price">${product.price}</div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <p>&copy; 2024 Your Store. All rights reserved.</p>
    </div>
  </footer>
);

const ProductLeftPage = () => {
  const product = {
    name: "Donec condime fermentum",
    price: 200,
    description: "A short description of the product goes here.",
    image: "./assets/images/demo_570x570.png",
  };

  const relatedProducts = [
    { id: 1, name: "Related Product 1", price: 50, image: "./assets/images/demo_270x270.png" },
    { id: 2, name: "Related Product 2", price: 60, image: "./assets/images/demo_270x270.png" },
  ];

  return (
    <div className="product-page">
      <Header />
      <div className="main-content container">
        <div className="row">
          <Sidebar />
          <div className="product-main">
            <ProductInformation product={product} />
            <RelatedProducts products={relatedProducts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductLeftPage;
