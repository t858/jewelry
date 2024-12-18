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
const Header = () => {
  const handleScroll = () => {
    const top = document.getElementById('top');
    if (window.innerWidth >= 1024) {
      if (window.scrollY > top.offsetHeight) {
        top.classList.add('affix', 'animated');
      } else {
        top.classList.remove('affix', 'animated');
      }
    } else {
      top.classList.remove('affix');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// ProductDetails Component
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div id="product-information" className="product-information">
      <h2>Donec condime fermentum</h2>
      <div className="description">
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis amet voluptas assumenda est.
        </p>
      </div>
      <div className="quantity-wrapper">
        <label>Quantity</label>
        <div className="wrapper">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleDecrease}>-</button>
        </div>
      </div>
      <button className="btn add-to-cart">Add to Cart</button>
    </div>
  );
};

// RelatedProducts Component
const RelatedProducts = () => {
  const relatedProducts = [
    { id: 1, title: 'Curabitur cursus dignis', price: 259, image: '/assets/images/demo_270x270.png' },
    { id: 2, title: 'Donec aliquam ante non', price: 250, image: '/assets/images/demo_270x270.png' },
  ];

  return (
    <section className="rel-container">
      <h6>You may also like</h6>
      <div className="prod-related">
        {relatedProducts.map((product) => (
          <div key={product.id} className="element">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

// App Component
const ProductRight = () => {
  return (
    <div id="content-wrapper-parent">
      <Header />
      <main id="content-wrapper">
        <ProductDetails />
        <RelatedProducts />
      </main>
    </div>
  );
};

export default ProductRight;
