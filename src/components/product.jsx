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
                  <a target="_blank" href="#" className="btooltip swing" rel="noreferrer">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#" className="btooltip swing" rel="noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#" className="btooltip swing" rel="noreferrer">
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

const ProductImages = ({ images }) => (
  <div className="product-images">
    <div className="main-image">
      <img src={images[0]} alt="Main Product" />
    </div>
    <div className="thumbnail-images">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Thumbnail ${index + 1}`} />
      ))}
    </div>
  </div>
);

const ProductDetails = ({ product }) => (
  <div className="product-details">
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <div className="price">${product.price}</div>
    <button className="btn btn-primary">Add to Cart</button>
  </div>
);

const RelatedProducts = ({ relatedProducts }) => (
  <section className="related-products">
    <h2>Related Products</h2>
    <div className="products">
      {relatedProducts.map((product, index) => (
        <div key={index} className="related-product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button className="btn btn-secondary">View Product</button>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="footer">
    <div id="footer-content">
      <h6 className="general-title">Newsletter</h6>
      <form className="newsletter">
        <input type="email" placeholder="Your Email Address" />
        <button className="btn btn-primary">Subscribe</button>
      </form>
    </div>
  </footer>
);

const ProductPage = () => {
  const product = {
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 199.99,
    images: [
      "./assets/images/demo_570x570.png",
      "./assets/images/demo_100x100.png",
    ],
  };

  const relatedProducts = [
    {
      name: "Related Product 1",
      price: 59.99,
      image: "./assets/images/demo_270x270.png",
    },
    {
      name: "Related Product 2",
      price: 79.99,
      image: "./assets/images/demo_270x270.png",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ProductImages images={product.images} />
          <ProductDetails product={product} />
          <RelatedProducts relatedProducts={relatedProducts} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
