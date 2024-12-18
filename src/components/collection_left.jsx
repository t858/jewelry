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

// Header Component
const Header = () => (
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
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Create an Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="line" />
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbarContent"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/logo.png" alt="Brand Logo" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

// Sidebar Component
const Sidebar = () => (
  <div id="sidebar" className="col-sm-6 col-md-6">
    <div className="filter-group">
      <h4>Filter</h4>
      <ul>
        <li><Link to="/collections?size=S">Size: S</Link></li>
        <li><Link to="/collections?size=M">Size: M</Link></li>
        <li><Link to="/collections?size=L">Size: L</Link></li>
        <li><Link to="/collections?size=XL">Size: XL</Link></li>
      </ul>
    </div>
    <div className="categories">
      <h4>Categories</h4>
      <ul>
        <li><Link to="/collections/bracelets">Bracelets</Link></li>
        <li><Link to="/collections/earrings">Earrings</Link></li>
        <li><Link to="/collections/necklaces">Necklaces</Link></li>
        <li><Link to="/collections/rings">Rings</Link></li>
      </ul>
    </div>
  </div>
);

// Product Component
const Product = ({ product }) => (
  <div className="product">
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      <p>Price: ${product.price}</p>
    </Link>
  </div>
);

// Product Grid Component
const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

// Main Component
const CollectionLeftPage = () => {
  const [products] = useState([
    { id: 1, name: 'Bracelet', price: 50, image: '/assets/images/demo_270x270.png' },
    { id: 2, name: 'Earrings', price: 30, image: '/assets/images/demo_270x270.png' },
    { id: 3, name: 'Necklace', price: 70, image: '/assets/images/demo_270x270.png' },
    { id: 4, name: 'Ring', price: 20, image: '/assets/images/demo_270x270.png' },
  ]);

  return (
    <div className="collection-left">
      <Header />
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-sm-18 col-md-18">
            <h1>Collection Left Sidebar</h1>
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionLeftPage;
