import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

import OurStore from './components/pages/OurStore';
import Blog from './components/pages/Blog';
import CompareProduct from './components/pages/CompareProduct';
import WishList from './components/pages/WishList';

import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import ForgotPassword from './components/pages/ForgotPassword';
import ResetPass from './components/pages/ResetPass';

import SingleBlog from './components/pages/SingleBlog';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import RefundPolicy from './components/pages/RefundPolicy';
import ShipingPolicy from './components/pages/ShipingPolicy';
import TermsAndConditions from './components/pages/TermsAndConditions';
import SingleProduct from './components/pages/SingleProduct';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
            <Route exact='true' path="/" element={<Layout />} >
            <Route exact='true' index element={<Home />} />
            <Route exact='true' path='/about'  element={<About />} />
            <Route exact='true' path='/contact'  element={<Contact />} />

            <Route exact='true' path='/product'  element={<OurStore />} />
            <Route exact='true' path='/product/:id'  element={<SingleProduct />} />
            <Route exact='true' path='/blogs'  element={<Blog />} />
            <Route exact='true' path='/blog/:id'  element={<SingleBlog />} />
            <Route exact='true' path='cart'  element={<Cart />} />
            <Route exact='true' path='checkout'  element={<Checkout />} />

            <Route exact='true' path='/compare-product'  element={<CompareProduct />} />
            <Route exact='true' path='/wishlist'  element={<WishList />} />


            <Route exact='true' path='/login'  element={<Login />} />
            <Route exact='true' path='/sign-up'  element={<SignUp />} />
            <Route exact='true' path='/forgot-password'  element={<ForgotPassword />} />
            <Route exact='true' path='/reset-password'  element={<ResetPass />} />

            <Route exact='true' path='/privacy-policy'  element={<PrivacyPolicy />} />
            <Route exact='true' path='/refund-policy'  element={<RefundPolicy />} />
            <Route exact='true' path='/shipping-policy'  element={<ShipingPolicy />} />
            <Route exact='true' path='/termsandconditions'  element={<TermsAndConditions />} />

            </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
