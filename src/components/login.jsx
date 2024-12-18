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


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Mock login logic
    if (email === 'user@example.com' && password === 'password') {
      setError(null);
      alert('Login successful!');
    } else {
      setError('Invalid login credentials.');
    }
  };

  return (
    <div>
      <header id="top" className="clearfix">
        <div className="container">
          <div className="top row">
            <div className="col-md-6 phone-shopping">
              <span>PHONE SHOPPING (01) 123 456 UJ</span>
            </div>
            <div className="col-md-18 text-right">
              <ul className="list-inline">
                <li><Link to="/account">My Account</Link></li>
                <li>/</li>
                <li><Link to="/login">Login</Link></li>
                <li>/</li>
                <li><Link to="/register">Create an Account</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div id="content-wrapper">
        <div className="container">
          <div className="row">
            <div id="page-header" className="col-md-24">
              <h1>Login</h1>
            </div>

            <div id="col-main" className="col-md-12">
              <div id="customer-login">
                <h2>Customer Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="customer_email">Email Address</label>
                    <input
                      type="email"
                      id="customer_email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="customer_password">Password</label>
                    <input
                      type="password"
                      id="customer_password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>

              <div id="recover-password" style={{ marginTop: '20px' }}>
                <h2>Forgot Your Password?</h2>
                <p>We will send you an email to reset your password.</p>
                <Link to="/recover-password" className="btn btn-secondary">Reset Password</Link>
              </div>
            </div>

            <div className="col-md-12">
              <div className="register-section">
                <h2>New to Our Store?</h2>
                <p>Create an account for fast checkout and easy order tracking.</p>
                <Link to="/register" className="btn btn-primary">Create an Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="container">
          <p>© 2024 Jewelry Store. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
