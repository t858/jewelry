import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./components/about_us"
import Account from "./components/account"
import Address from "./components/address"
import ArticleLeft from './components/article_left';
import ArticleRight from './components/article_right';
import ArticleFullWidth from './components/article';
import Blog from "./components/blog"
import BlogPage from './components/blog_3_col';
import BlogLeftPage from './components/blog_left';
import BlogRightPage from './components/blog_right';
import BlogTwoColumn from './components/blog_2_col';
import CartPage from "./components/cart"
import CollectionLeftPage from './components/collection_left';
import CollectionRightPage from './components/collection_right';
import CollectionPage from './components/collection';
import ContactPage from './components/contact';
import FAQs from './components/faqs';
import HomePage from './components/home';
import Login from './components/login';
import PriceTablePage from './components/price_table';
import ProductLeftPage from './components/product_left';
import ProductRight from './components/product_right';
import ProductPage from "./components/product"
import RegisterPage from './components/register';
import SearchPage from './components/search';
import TestimonialsPage from "./components/testimonials"
import WishlistPage from "./components/wishlist"

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/account" element={<Account />} />
            <Route path="/address" element={<Address />} />
            <Route path="/article_left" element={<ArticleLeft />} />
            <Route path="/article_right" element={<ArticleRight />} />
            <Route path="/article" element={<ArticleFullWidth />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog_3_col" element={<BlogPage />} />
            <Route path="/blog_left" element={<BlogLeftPage />} />
            <Route path="/blog_right" element={<BlogRightPage />} />
            <Route path="/components/blog_2_col" element={<BlogTwoColumn />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/collection_left" element={<CollectionLeftPage />} />
            <Route path="/collection_right" element={<CollectionRightPage />} />
            <Route path="/collections" element={<CollectionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/price_table" element={<PriceTablePage />} />
            <Route path="/product_left" element={<ProductLeftPage />} />
            <Route path="/product_right" element={<ProductRight />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
    </Router>
);

export default App;
