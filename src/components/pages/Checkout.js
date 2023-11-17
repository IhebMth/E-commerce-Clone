import React from "react";
import Meta from "../Meta";
import BreadCrumb from "../BreadCrumb";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi"
import watch from '../../images/watch.jpg'
const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Fashion</h3>
                <nav
                  style={{"--bs-breadcrumb-divider": ">"}}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark total-price">Cart</Link>
                    </li>
                    
                    <li className="breadcrumb-item active total-price" aria-current="page">
                      / Information
                    </li>

                    <li className="breadcrumb-item active total-price">
                     / Shipping
                    </li>
                    
                    <li className="breadcrumb-item active total-price">
                     / Payment
                    </li>
                    
                  </ol>
                </nav>

                <h4 className="title total">
                    Contact Information
                </h4>
                <p className="user-details total">
                    Iheb Meftah (Ihebmeftah@outlook.fr)
                </p>

                <h4 className="mb-3">Shipping Adress</h4>
                <form action="" className="d-flex flex-wrap gap-15 justify-content-between">
                    <div className="w-100">
                        <select name="" className="form-control form-select">
                            <option value="" selected disabled>
                                Select Country
                            </option>
                        </select>
                    </div>

                    <div className="flex-grow-1">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="First Name" />
                    </div>

                    <div className="flex-grow-1">
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="Last Name" />
                    </div>

                    <div className="w-100">
                    <input 
                    type="text"
                     className="form-control" 
                     placeholder="Adress" />
                    </div>

                    <div className="flex-grow-1">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Apprtment, Suite, etc"/>
                    </div>

                    <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select" >
                        <option value="" selected disabled>
                            Select State
                        </option>
                    </select>
                    </div>
                    
                    <div className="flex-grow-1">
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="Zip Code" />
                    </div>   

                    <div className="w-100">
                        <div className="d-flex justify-content-between aling-items-center">
                           <Link to="/cart" className="text-dark mt-2">
                           <BiArrowBack className="fs-5 me-2" />
                           Return To Cart
                           </Link>
                         
                          <Link to="/cart" className="button">Continue To Shipping</Link>

                            </div>
                            </div>             
                    </form>
              </div>
            </div>

            <div className="col-5">
                <div></div>
                <div className="border-bottom py-4">
                  <div className="d-flex gap-10 align-items-center mb-2">
                 
                  <div className="w-75 d-flex gap-10">
                
                  <div className="w-25 position-relative">
                    <span
                    style={{"top":"2px", "right":"2px"}} 
                     className="badge bg-secondary text-white rounded-circle py-1 position-absolute"
                     >
                        1    
                    </span>
                        <img className="img-fluid" src={watch} alt="product" />
                    </div>

                    <div>
                    <h5 className="total-price">Best Watch Ever</h5>
                    <p className="total-price">Buy this watch to get the best bonuses</p>
                    </div>
                    </div>
                
                    <div className="flex-grow-1">
                        <h5 className="total">100 £</h5>
                    </div>
                  </div>

                </div>

                <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="total">SubTotal</p>
                    <p className="total-price">£ 1000</p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 total" >Shipping</p>
                    <p className="mb-0 total-price">£ 1000</p>
                </div>
                </div>

                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                    <h4 className="total">Total</h4>
                    <h5 className="total-price">£ 1000</h5>
                </div>
                </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Checkout;
