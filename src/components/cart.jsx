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

const CartItem = ({ item, onRemove, onUpdate }) => (
  <tr className="item">
    <td className="title text-left">
      <ul className="list-inline">
        <li className="image">
          <Link to="/product">
            <img src={item.image} alt={item.title} />
          </Link>
        </li>
        <li className="link">
          <Link to="/product">
            <span className="title-5">{item.title}</span>
          </Link>
          <br />
          <span className="variant_title">{item.variant}</span>
          <br />
        </li>
      </ul>
    </td>
    <td className="title-1">${item.price}</td>
    <td>
      <input
        className="form-control input-1"
        type="number"
        maxLength="5"
        size="5"
        value={item.quantity}
        onChange={(e) => onUpdate(item.id, e.target.value)}
      />
    </td>
    <td className="total title-1">${item.price * item.quantity}</td>
    <td className="action">
      <button type="button" onClick={() => onRemove(item.id)}>
        <i className="fa fa-times"></i> Remove
      </button>
    </td>
  </tr>
);

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Donec condime fermentum', variant: 'black / small', price: 200, quantity: 1, image: '/assets/images/demo_100x100.png' },
    { id: 2, title: 'Curabitur cursus dignis', variant: '', price: 200, quantity: 7, image: '/assets/images/demo_100x100.png' },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleUpdate = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) || 1 } : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div id="content-wrapper-parent">
      <Header />
      <div id="content" className="clearfix">
        <div className="container">
          <div className="row">
            <div id="page-header" className="col-md-24">
              <h1 id="page-title">Shopping Cart</h1>
            </div>
            <div id="col-main" className="col-md-24 cart-page content">
              <form className="clearfix">
                <div className="row table-cart">
                  <div className="wrap-table">
                    <table className="cart-items haft-border">
                      <thead>
                        <tr className="top-labels">
                          <th>Items</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>SubTotal</th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <CartItem
                            key={item.id}
                            item={item}
                            onRemove={handleRemove}
                            onUpdate={handleUpdate}
                          />
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bottom-summary">
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td className="update-quantities">
                            <button type="button" className="btn btn-2">
                              Update Qty
                            </button>
                          </td>
                          <td className="subtotal title-1">${subtotal}</td>
                          <td>&nbsp;</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="clearfix">
                  <div id="checkout-proceed" className="text-right">
                    <button className="btn" type="button">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
