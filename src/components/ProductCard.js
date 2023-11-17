import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg'
import wish from "../images/wish.svg"
import wishFeatured from "../images/wishFeatured.svg"
import watch from '../images/watch.jpg'
import watch2 from "../images/watch1.jpg"
import addcard from '../images/add-cart.svg'
import view from '../images/view.svg'

export default function ProductCard(props) {
  let {grid} = props;
  let location = useLocation()

  const handleClick = () => {
    window.scrollTo(0, 300); // Scroll to the top of the page
  };

  const destinationPath =
  location.pathname === '/'
    ? '/product/:id'
    : location.pathname === '/product/:id'
    ? '/product/:id'
    : ':id';
  return (
    
      <div 
      className={` ${location.pathname == "/product" || location.pathname === ":id"? `gr-${grid}` : "col-3" }`}>
        <Link to={destinationPath} onClick={handleClick} 

   
        className="product-card position-relative">
            <div className="wishList-icon">
                <button className='border-0 bg-transparent' >
                <img src={wishFeatured} alt="wishList" />
                </button>
            </div>
        <div className="product-image d-flex flex-column justify-content-center align-items-center">
                <img src={watch} alt="watch" />
                <img src={watch2} alt="watch" className='w-50 h-100' />

            </div>
       {/* <i className="bi bi-heart w-25 mx-4 "></i> */}

      <div className="product-details">
        <h6 className="brand">Havels</h6>
        <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
        </h5>
        <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
  />
        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>These kids headphones are the perfect solution for any classroom or library. 
                  The 10 pack comes in a variety of colors, 
                  so you can easily find the perfect set for your students.
                   The headphones are lightweight and comfortable, 
                   so your students can wear them for hours without any discomfort.
                    The adjustable headband ensures a perfect fit for all ages. 
                    The headphones also have a built-in volume limiter, 
                    so you can rest assured that your students are not listening to music too loudly.</p>
        <p className="price">£100.00</p>
      </div>
       
       <div className="action-bar ">
            <div className="d-flex flex-column gap-15">

                <button className='border-0 bg-transparent'>
                <img src={prodcompare} alt="compare" />
                </button>

                <button className='border-0 bg-transparent'>
                <img src={view} alt="view" />
                </button>

                <button className='border-0 bg-transparent'>
                <img src={addcard} alt="add" />
                </button>
            </div>
       </div>

        </Link>
      </div>

  )
}
