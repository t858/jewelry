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

// Header Component
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
                  <Link to="/register">Create an account</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="line"></div>
    <div className="container">
      <nav className="navbar">
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/collections">Collections</Link></li>
          <li><Link to="/pages">Pages</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

// Search Results Component
const SearchResults = ({ results }) => (
  <div className="search-results">
    {results.map((result) => (
      <div key={result.id} className="element">
        <div className="row-container list-unstyled clearfix">
          <div className="row-left">
            <Link to={`/product/${result.id}`} className="container_item">
              <img src={result.image} alt={result.name} className="img-responsive" />
              {result.sale && (
                <span className="sale_banner">
                  <span className="sale_text">Sale</span>
                </span>
              )}
            </Link>
          </div>
          <div className="row-right">
            <div className="product-content-left">
              <Link to={`/product/${result.id}`} className="title-5">
                {result.name}
              </Link>
              <div className="spr-badge" data-rating={result.rating}>
                <span className="spr-starrating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`spr-icon ${i < result.rating ? 'spr-icon-star' : 'spr-icon-star-empty'}`}
                    ></i>
                  ))}
                </span>
                <span className="spr-badge-caption">
                  {result.reviews > 0 ? `${result.reviews} reviews` : 'No reviews'}
                </span>
              </div>
            </div>
            <div className="product-content-right">
              <div className="product-price">
                {result.salePrice && (
                  <>
                    <span className="price_sale">${result.salePrice}</span>
                    <del className="price_compare">${result.price}</del>
                  </>
                )}
                {!result.salePrice && <span className="price">${result.price}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Search Page Component
const SearchPage = () => {
  const mockResults = [
    {
      id: 1,
      name: 'Curabitur cursus dignis',
      image: './assets/images/demo_270x270.png',
      price: 300,
      salePrice: 259,
      sale: true,
      rating: 4,
      reviews: 10,
    },
    {
      id: 2,
      name: 'Donec aliquam ante non',
      image: './assets/images/demo_270x270.png',
      price: 250,
      salePrice: 200,
      sale: true,
      rating: 5,
      reviews: 5,
    },
  ];

  return (
    <div id="content-wrapper-parent">
      <Header />
      <div id="breadcrumb" className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-24">
              <Link to="/" className="homepage-link" title="Back to the frontpage">
                Home
              </Link>
              <span>/</span>
              <span className="page-title">Search Result Page</span>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container">
          <div className="row">
            <h1 id="page-title">Search Results</h1>
            <SearchResults results={mockResults} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
