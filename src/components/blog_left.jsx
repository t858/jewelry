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


const Sidebar = () => (
  <div className="col-xs-24 col-sm-6 sidebar left-slidebar">
    <div className="group_sidebar">
      <div className="sb-wrapper">
        <h6 className="sb-title"><i className="fa fa-pencil-square-o"></i> Recent Articles</h6>
        <div className="blogs sb-content">
          {[
            {
              title: 'Sample blog post with left...',
              link: '/article-left',
              author: 'Jin Alkaid',
              comments: 10,
              intro: 'Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano...',
            },
            {
              title: 'Vel illum qui dolorem eum...',
              link: '/article',
              author: 'Jin Alkaid',
              comments: 7,
              intro: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...',
            },
            {
              title: 'Sample blog post full width...',
              link: '/article',
              author: 'Jin Alkaid',
              comments: 5,
              intro: 'Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano...',
            },
            {
              title: 'Respond transformative practices',
              link: '/article',
              author: 'Jin Alkaid',
              comments: 3,
              intro: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...',
            },
          ].map((article, index) => (
            <div className="blogs-item" key={index}>
              <h4><Link to={article.link}>{article.title}</Link></h4>
              <ul className="post list-inline">
                <li className="author">{article.author}</li>
                <li>/</li>
                <li className="comment">
                  <Link to="#">
                    <span>{article.comments}</span> Comment(s)
                  </Link>
                </li>
              </ul>
              <div className="intro">{article.intro}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BlogPostMain = ({ date, title, intro, author, comments }) => (
  <article className="blogs-item">
    <div className="row">
      <div className="article-content col-md-24">
        <div className="article-content-inner">
          <div>
            <div className="date">
              <p>
                <small>{date.month}</small><span>{date.day}</span>
              </p>
            </div>
            <h4><Link to="/article-left">{title}</Link></h4>
          </div>
          <div className="blogs-image">
            <ul className="list-inline">
              <li><Link to="/article-left"><img src="/assets/images/demo_870x580.png" alt="" /></Link></li>
            </ul>
          </div>
          <div className="intro">
            {intro}
          </div>
        </div>
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
  </article>
);

const BlogLeftContent = () => (
  <div id="col-main" className="blog blog-page col-xs-24 col-sm-18 col-content">
    <div className="blog-content-wrapper">
      <BlogPostMain
        date={{ month: 'July', day: 8 }}
        title="Sample blog post with left sidebar"
        intro="Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop..."
        author="Jin Alkaid"
        comments={3}
      />
      <BlogPostMain
        date={{ month: 'June', day: 30 }}
        title="Vel illum qui dolorem eum fugiat"
        intro="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium..."
        author="Jin Alkaid"
        comments={10}
      />
    </div>
    <div className="pagination clearfix">
      <ul className="list-inline">
        <li className="prev"><a className="disabled" href="#"><i className="fa fa-angle-double-left"></i>Previous</a></li>
        <li className="next"><Link to="#">Next<i className="fa fa-angle-double-right"></i></Link></li>
      </ul>
      <p className="pagination-num-showing hidden-xs">
        Showing 1 - 2 of 5 total
      </p>
    </div>
  </div>
);

const BlogLeftPage = () => (
  <div id="content-wrapper-parent">

    <section className="content">
      <div className="container">
        <div className="row">
          <div id="page-header" className="col-md-24">
            <h1 id="page-title">Blog With Left Sidebar</h1>
          </div>
          <Sidebar />
          <BlogLeftContent />
        </div>
      </div>
    </section>
  </div>
);

export default BlogLeftPage;
