import React, { useEffect } from 'react';
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


const Header = () => {
  useEffect(() => {
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
          <div className="col-md-18 text-right">
            <ul className="list-inline">
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
              <li id="widget-social">
                <ul className="list-inline">
                  <li><Link to="#" className="fa fa-facebook"></Link></li>
                  <li><Link to="#" className="fa fa-twitter"></Link></li>
                  <li><Link to="#" className="fa fa-pinterest"></Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="top-navigation">
          <ul className="list-inline">
            <li className="top-logo">
              <Link to="/">
                <img
                  className="img-responsive"
                  src="/assets/images/logo.png"
                  alt="Logo"
                />
              </Link>
            </li>
            <li className="navigation">
              <nav className="navbar">
                <div className="clearfix">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                      <li className="nav-item active">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/collection" className="dropdown-toggle">
                          Collections
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const ArticleContent = () => (
  <div id="content-wrapper-parent">
    <div id="content-wrapper">
      <div id="content" className="clearfix">
        <div id="breadcrumb" className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-24">
                <Link to="/" className="homepage-link">Home</Link>
                <span>/</span>
                <Link to="/blog">Blogs</Link>
                <span>/</span>
                <span className="page-title">Article Full Width</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-24 col-sm-24">
              <div className="article">
                <h4>Vel illum qui dolorem eum fugiat</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia dolore consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <div className="blogs-image">
                  <img src="/assets/images/demo_1170x420.png" alt="Article" />
                </div>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
              <div className="comments-section">
                <h6>Comments</h6>
                <div className="comment">
                  <strong>Jin Alkaid</strong>: Sed ut perspiciatis unde omnis iste natus...
                </div>
                <div className="comment">
                  <strong>Jin 01</strong>: Quis autem vel eum iure reprehenderit qui...
                </div>
              </div>
              <form className="comment-form">
                <h6>Leave a Comment</h6>
                <textarea
                  placeholder="Write your comment here..."
                  className="form-control"
                  rows="5"
                ></textarea>
                <button type="submit" className="btn btn-primary">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <p>© 2024 All Rights Reserved.</p>
    </div>
  </footer>
);

const ArticleFullWidth = () => (
  <div>
    <Header />
    <ArticleContent />
    <Footer />
  </div>
);

export default ArticleFullWidth;
