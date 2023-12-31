import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs'
import newsLetter from '../images/newsletter.png'
const Footer = () => {
  return (
      <div>
      <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-align-items-center">
          <div className="col-7">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src={newsLetter} alt='newsletter' />
              <h2 className='mb-0 text-white'>Sign Up for NewsLetter</h2>
            </div>
          </div>
          <div className="col-5">
          <div className="input-group  ">
          <input 
          type="text" 
          className="form-control p-2 w-auto " 
          placeholder="Your Email Adress" 
          aria-label="Your Email Adress" 
          aria-describedby="basic-addon2" 
        
/>
  <span 
  className="input-group-text sub p-2 " 
  id="basic-addon2">
    Subscribe
  </span>
</div>
          </div>
        </div>
      </div>
      </footer>
     
     
     <footer className='py-4'>
      <div className="container-xxl">
        <div className="row ">
          <div className="col-4">
           <h4 className='text-white mb-4'>
            Contact us
            </h4>
          <div className='text-white'>
            <address>Gabes: Rue Ibn Koutaiba Chenini Gabes <br />
              Pin Code : 6040 
            </address>
            <a href="tel: +216 55918650" className="mt-3 d-block mb-0 text-white">
              +216 55 918 650
              </a>
            <a href="mailto: IhebMeftah@outlook.fr"
             className="mt-2 d-block mb-0 text-white">
              IhebMeftah@outlook.fr
              </a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a href="/">
                <BsInstagram className='text-white fs-4' to="" />
   
                </a>
                <a href="/">
                <BsFacebook className='text-white fs-4' to="" />
                </a> 
                 
              </div>
          </div>
          </div>
          <div className="col-3">
           <h4 className='text-white mb-4'>
            Information
            </h4>
            <div className='footer-links d-flex flex-column'>

            <Link to='/privacy-policy' className='text-white py-2 mb-1'> Privacy Policy</Link>
            <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
            <Link to='/shipping-policy' className='text-white py-2 mb-1'> Shipping Policy</Link>
            <Link to='/termsandconditions' className='text-white py-2 mb-1'> Terms & Conditions</Link>
            <Link to='/blogs' className='text-white py-2 mb-1'> Blogs</Link>
          </div>
          </div>
          <div className="col-3">
           <h4 className='text-white mb-4'> 
           Account
           </h4>
           <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1'> About Us</Link>
            <Link className='text-white py-2 mb-1'> Faq</Link>
            <Link className='text-white py-2 mb-1'> Contact</Link>
          </div>   
    
          </div>
          <div className="col-2">
           <h4 className='text-white mb-4'>
            Quick Links
            </h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1'> Laptops</Link>
            <Link className='text-white py-2 mb-1'> HeadPhones</Link>
            <Link className='text-white py-2 mb-1'> Tablets</Link>
            <Link className='text-white py-2 mb-1'> Watch</Link>

          </div>
          </div>
        </div>
      </div>
     </footer>
     
     
     <footer className='py-4 '>
     
      <div className="col-12">
        <p className="text-center mb-0 text-white">@copy: {new Date().getFullYear()}; Powered by Iheb Meftah</p>
      </div>
    
  
     </footer>
     

    </div>
  )
}

export default Footer
