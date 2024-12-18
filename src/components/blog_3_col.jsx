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
                    <form method="post" action="#" id="customer_login">
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
                            <Link className="btn btn-1" to="/login">Login</Link>
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
    <div className="line"></div>
    <nav className="container">
      <ul className="list-inline">
        <li className="top-logo">
          <Link to="/">
            <img className="img-responsive" src="/assets/images/logo.png" alt="Jewelry" />
          </Link>
        </li>
        <li className="navigation">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/collections">Collections</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);

const BlogPost = ({ date, title, intro, author, comments }) => (
  <div className="blogs col-sm-8 col-md-8 clearfix">
    <article className="blogs-item">
      <div className="row">
        <div className="article-content col-md-24">
          <div className="article-content-inner">
            <div className="date">
              <p>
                <small>{date.month}</small><span>{date.day}</span>
              </p>
            </div>
            <h4><Link to="/article">{title}</Link></h4>
            <div className="blogs-image">
              <img src="/assets/images/demo_370x247.png" alt="" />
            </div>
            <div className="intro">{intro}</div>
            <ul className="post list-inline">
              <li className="author">{author}</li>
              <li>/</li>
              <li className="comment">
                <Link to="#">
                  <span>{comments}</span> Comment(s)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </div>
);

const BlogGrid = () => (
  <section className="content">
    <div className="container">
      <div className="row">
        <div id="page-header" className="col-md-24">
          <h1 id="page-title">Blog Grid 3 Columns</h1>
        </div>
        <div id="col-main" className="blog blog-page col-sm-24 col-md-24 blog-full-width blog-3-col">
          <BlogPost
            date={{ month: 'June', day: 30 }}
            title="Vel illum qui dolorem"
            intro="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium..."
            author="Jin Alkaid"
            comments={2}
          />
          <BlogPost
            date={{ month: 'June', day: 30 }}
            title="Enim ipsam voluptatem"
            intro="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium..."
            author="Jin Alkaid"
            comments={0}
          />
          <BlogPost
            date={{ month: 'June', day: 30 }}
            title="Luxe gold collar"
            intro="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium..."
            author="Jin Alkaid"
            comments={0}
          />
        </div>
      </div>
    </div>
  </section>
);

const BlogPage = () => (
  <div id="content-wrapper-parent">
    <Header />
    <BlogGrid />
  </div>
);

export default BlogPage;
