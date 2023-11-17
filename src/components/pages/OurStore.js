import React, { useState } from "react";
import ProductCard from '../ProductCard'
import BreadCrumb from "../BreadCrumb";
import { Helmet } from "react-helmet";
import Meta from "../Meta";
import ReactStars from 'react-rating-stars-component'
import Colors from "../Colors";

import gr1 from "../../images/gr.svg"
import gr2 from "../../images/gr2.svg"
import gr3 from "../../images/gr3.svg"
import gr4 from "../../images/gr4.svg"
import { Container } from "react-bootstrap";
function OurStore() {


  let [grid, setGrid] = useState(4)
  
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
    
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
            

              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        In Stock {1}
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        Out Of Stock {0}
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />

                      <label htmlFor="floatingInput">From</label>
                    </div>

                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />

                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>
                  <div>  
                    <Colors />
                  </div>
                
                  <h5 className="sub-title">Size</h5>
                  <div>
                  <div className="form-check  ">
                      <input
                        className="form-check-input fs-5"
                        type="checkbox"
                        value="S"
                        id="color-1"
                      />
                      <label htmlFor="color-1" className="form-check-label text-dark ">
                        S (2)
                      </label>

                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input fs-5"
                        type="checkbox"
                        value="M"
                        id="color-2"
                      />
                      <label htmlFor="color-2" className="form-check-label text-dark">
                        M (2)
                      </label>

                    </div>
                  </div>

                  </div>

                </div>
              

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2  px-3">
                    HeadPhone
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2  px-3">
                    Laptop
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2  px-3">
                    Mobile
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2  px-3">
                    Wire
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2  px-3">
                    Speaker
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2  px-3">
                    Tablet
                  </span>
                </div>

              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
              <div className="random-products d-flex">
                <div className="w-50">
                  <img 
                  src="images/watch.jpg" 
                  className="img-fluid" 
                  alt="watch" />
                </div>
                <div className="w-50">
                  <h5>
                    Kids headphones bulk 10 pack multi colored for students
                  </h5>
                  <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                        />
                  
                  <b> 300£</b>
                </div>
              </div>

              <div className="random-products d-flex">
                <div className="w-50">
                  <img 
                  src="images/watch.jpg" 
                  className="img-fluid" 
                  alt="watch" />
                </div>
                <div className="w-50">
                  <h5>
                    Kids headphones bulk 10 pack multi colored for students
                  </h5>
                  <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                        />
                        
                  <b> 300£</b>
                </div>
              </div>

              </div>

            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{"width":"100px"}}>
                    Sort By:
                  </p>
                  <select 
                  name="" 
                  className="form-control form-select">
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="crice-descending">Date, new to old</option>

                  </select>
                </div>

                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">8 Products</p>
                  <div className=" d-flex gap-10 align-items-center grid " >
                  <img onClick={() => {
                    setGrid(3)
                  }}
                   src={gr4} 
                   alt="grid" className="d-block img-fluid" />                       
                  
                  <img onClick={() => {
                    setGrid(4)
                  }}
                   src={gr3} 
                   alt="grid" className="d-block img-fluid" />                       
                  
                   <img onClick={() => {
                    setGrid(6)
                   }
                   } src={gr2}
                    alt="grid" className="d-block img-fluid" />                       
                  
                   <img onClick={() => {
                    setGrid(12)
                   }
                   } src={gr1}
                   alt="grid" className="d-block img-fluid"  />                       


                  </div>                  
                
                </div>

                </div>

               <div className="products-list pb-5 ">
                <div className="d-flex gap-10 flex-wrap mt-4">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurStore;
