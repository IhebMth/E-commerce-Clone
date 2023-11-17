import React, {useState} from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs' 
import Dropdown from 'react-bootstrap/Dropdown';
import logo from "./pages/logo.png"
import Home from './pages/Home';

import compare from "../images/compare.svg"
import wish from '../images/wish.svg'
import wishFeatured from '../images/wishFeatured.svg'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
import menu from '../images/menu.svg'


const Header = () => {

    
   
  return (  
    <div>
      <header className='header-top-strip'>
        <div className='container-xxl'>
          <div className="row">
            <div className="col-6 d-flex flex-row ">
            <i className="black-circle d-flex flex-row "
               ><img src={logo} alt="logo" className='logo'  /></i>
              <p className='text-white mb-3 m-3'> Free Shipping Over 100$ & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-3 mt-3'>
                Number: 
                <a className="text-white" href='tel: +216 55918650'>+216 55918650</a> 
                </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 >
                <Link className='Iheb' to="/">Iheb</Link>
              </h2>
            
          </div>
          <div className="col-5">
          <div className="input-group ">
          <input 
          type="text" 
          className="form-control p-2" 
          placeholder="Search Product here" 
          aria-label="Recipient's username" 
          aria-describedby="basic-addon2" 
          
/>
  <span 
  className="input-group-text p-3" 
  id="basic-addon2">
    <BsSearch  className=' search fs-6'/>
  </span>
</div>
</div>
         
          <div className="col-5">
          <div className="header-upper-links d-flex align-items-center justify-content-between">
            <div>
              <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
              <img src={compare} alt="compare" />
              <p className='mb-0'>Compare <br /> Products</p>
              </Link>
            </div>
            

            <div>
              <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white wishList'>
              <img src={wish} alt="wishList" />
              <img src={wishFeatured} alt="whishList"/>
              <p className='mb-0'>Favourite <br /> Whishlist</p>
              </Link>
            </div>

           

            <div>
              <Link to='/login'  className='d-flex align-items-center gap-10 text-white'>
              <img src={user} alt="user" />
              <p className='mb-0'>Log in <br /> My Account</p>
              </Link>
            </div>
            
            <div>
              <Link to='/card' className='d-flex align-items-center gap-10 text-white'>
              <img src={cart}alt="cart" />
              <div className='d-flex flex-column'>
                <span className="badge bg-white text-dark">0
                </span>
                <p className='mb-0'>50000</p>
               
              </div>
              </Link>
            </div>
          </div>
          </div>
        </div>
        </div>
      </header>
       <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
              
                <Dropdown className='header-bottom'>
                  <img src={menu} alt='menu' />
                    <Dropdown.Toggle variant="bg-transparent" id="dropdown-basic">
                      Show Categories
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-menu'>
                      <Dropdown.Item href="#" className='dropdown-item'>Action</Dropdown.Item>
                      <Dropdown.Item href="#" className='dropdown-item' >Another action</Dropdown.Item>
                      <Dropdown.Item href="#" className='dropdown-item'>Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="menu-links">
                <div className="d-flex align-items-center gap-15 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/product">Our Store</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              

                  </div>                
                </div>

              </div>
            </div>
          </div>
        </div>
       </header>
    </div>
  )
}

export default Header
