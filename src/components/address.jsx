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


const Address = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showNewForm, setShowNewForm] = useState(false);

  const toggleForm = (id) => {
    setIsEditing((prev) => (prev === id ? null : id));
  };

  const toggleNewForm = () => {
    setShowNewForm((prev) => !prev);
  };

  const deleteAddress = (id, confirmMsg = "Are you sure you wish to delete this address?") => {
    if (window.confirm(confirmMsg)) {
      // Implement address deletion logic here.
      console.log(`Address with ID ${id} deleted.`);
    }
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Address Page</title>
        <link href="./assets/stylesheets/font.css" rel="stylesheet" />
        <link href="./assets/stylesheets/font-awesome.min.css" rel="stylesheet" />
        <link href="./assets/stylesheets/bootstrap.min.3x.css" rel="stylesheet" />
      </head>

      <body className="templateCustomersRegister notouch">
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
          <section className="content">
            <div className="container">
              <div className="row">
                <div id="page-header" className="col-md-24">
                  <h1 id="page-title">MANAGE ADDRESS</h1>
                </div>
                <div id="col-main" className="address-page manage-address clearfix">
                  {showNewForm && (
                    <div className="customer_address edit_address">
                      <form id="address_form_new">
                        <ul className="row list-unstyled customer_address_table">
                          <li className="col-md-24">
                            <label htmlFor="address_first_name_new">First Name</label>
                            <input type="text" id="address_first_name_new" className="form-control" name="address[first_name]" />
                          </li>
                          <li className="col-md-24">
                            <label htmlFor="address_last_name_new">Last Name</label>
                            <input type="text" id="address_last_name_new" className="form-control" name="address[last_name]" />
                          </li>
                          <li className="col-md-24">
                            <label htmlFor="address_company_new">Company</label>
                            <input type="text" id="address_company_new" className="form-control" name="address[company]" />
                          </li>
                          <li className="col-md-24">
                            <label htmlFor="address_address1_new">Address1</label>
                            <input type="text" id="address_address1_new" className="form-control" name="address[address1]" />
                          </li>
                          <li className="col-md-24">
                            <label htmlFor="address_address2_new">Address2</label>
                            <input type="text" id="address_address2_new" className="form-control" name="address[address2]" />
                          </li>
                        </ul>
                        <div className="clearfix">
                          <button className="btn btn-2" type="submit">Add Address</button>
                          <button className="btn btn-3" type="button" onClick={toggleNewForm}>
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  <div>
                    <button id="new-address" className="btn" onClick={toggleNewForm}>
                      Add New Address
                    </button>
                  </div>
                  <div className="clearfix">
                    <div className="customer_address view_address">
                      <div className="address_info">
                        <address className="clearfix">
                          <div className="info">
                            <i className="fa fa-user"></i>
                            <span className="author">John Doe</span>
                            <span className="email">(Default Address)</span>
                          </div>
                          <div className="address">
                            <span>123 Main St, Springfield</span>
                          </div>
                        </address>
                      </div>
                      <div className="address_actions">
                        <button onClick={() => toggleForm(1)}>
                          <i className="fa fa-edit"></i>
                          Edit
                        </button>
                        <button onClick={() => deleteAddress(1)}>
                          <i className="fa fa-times"></i>
                          Delete
                        </button>
                      </div>
                    </div>
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

export default Address;
