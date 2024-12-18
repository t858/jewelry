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

const HomePage = () => {
  const popularCollections = [
    { name: 'Bracelets', image: './assets/images/demo_270x270.png' },
    { name: 'Earrings', image: './assets/images/demo_270x270.png' },
    { name: 'Necklaces', image: './assets/images/demo_270x270.png' },
    { name: 'Rings', image: './assets/images/demo_270x270.png' },
  ];

  const featuredProducts = [
    {
      name: 'Curabitur cursus dignis',
      image: './assets/images/demo_277x277.png',
      price: '$259.00',
      originalPrice: '$300.00',
    },
    {
      name: 'Donec aliquam ante non',
      image: './assets/images/demo_277x277.png',
      price: '$250.00',
      originalPrice: '$300.00',
    },
    {
      name: 'Donec condime fermentum',
      image: './assets/images/demo_277x277.png',
      price: '$200.00',
      originalPrice: '$250.00',
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
            <div className="col-md-18">
              <ul className="text-right list-inline">
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

      <div id="content-wrapper">
        <div className="home-slider-wrapper">
          <div className="camera_wrap" id="home-slider">
            <div className="camera_slide">
              <div className="camera_caption">
                <h2>Live the moment</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/collection" className="btn">See Collection</Link>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container">
            <h2 className="general-title">Popular Collections</h2>
            <div className="row">
              {popularCollections.map((collection, index) => (
                <div key={index} className="col-md-6">
                  <div className="collection-item">
                    <img src={collection.image} alt={collection.name} />
                    <h3>{collection.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="general-title">Featured Products</h2>
            <div className="row">
              {featuredProducts.map((product, index) => (
                <div key={index} className="col-md-4">
                  <div className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>
                      <span className="price-sale">{product.price}</span>
                      <span className="price-compare">{product.originalPrice}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer id="footer">
        <div className="container">
          <p>© 2024 Jewelry HTML Template. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
