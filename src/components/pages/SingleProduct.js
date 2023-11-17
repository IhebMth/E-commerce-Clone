import React, { useState } from "react";
import Meta from "../Meta";
import BreadCrumb from "../BreadCrumb";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Colors from "../Colors";
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { useEffect } from "react";


const SingleProduct = () => {
  let [orderedProduct, setOrderedProduct] = useState(true);
  let [isCopied, setIsCopied] = useState(false)
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };

  let copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    setIsCopied(true)
  }

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);


  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={"Dynamic Product Name"} />

      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>

              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>

                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>

                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>

                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids headphone bulk 10 pack multi colored for students
                  </h3>
                </div>

                <div className="border-bottom py-3">
                  <p className="price">100 £</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">( 2 Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>

                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">Watch</p>
                  </div>

                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Havels</p>
                  </div>

                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>
                    <p className="product-data">Watch</p>
                  </div>

                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">Watch</p>
                  </div>

                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availibilty In Stock:</h3>
                    <p className="product-data">In Stock</p>
                  </div>

                  <div className="d-flex gap-10 flex-column my-2">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary mt-2 mb-3">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary mt-2 mb-3">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary mt-2 mb-3">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary mt-2 mb-3">
                        XXL
                      </span>
                    </div>
                  </div>

                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <Colors />
                  </div>

                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        style={{ width: "70px" }}
                        id=""
                        min={1}
                        max={15}
                        className="form-control"
                      />
                    </div>

                    <div className=" d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">ADD TO CART</button>
                <button to="/sign-up" className="button button2 border-0 mx-2">BUY NOW</button>
                    </div>

                  </div>

                  <div className="d-flex align-items-center gap-15">

                    <div>
                    <AiOutlineHeart className="fs-5 me-2" /> 
                    <a href="">Add to Wishlish</a>
                    </div>

                    <div>
                        <a href="">
                        <TbGitCompare className="fs-5 me-2" /> 
                        Add to Compare</a>
                    </div>

                  </div>

                  <div className="d-flex  flex-column gap-10 mt-3 my-3 ">
                    <h3 className="product-heading mb-0">Shipping & Returns:</h3>
                    <p className="product-data">
                        Free Shipping and returns available on all orders! <br />
                        We ship all US withinn domestic orders within  
                         <b> 5-10 days</b>
                    </p>
                  </div>

                  <div className="product-copy d-flex gap-10 align-items-center my-2  mt-3 mb-3 ">
                    <h3 className="product-heading"> Product Link:</h3>
                    <button className="bg-white border-0" onClick={() => 
                    {
                        copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
                      
                   }}>
                        Copy Product Link
                    </button>
                    {
                            isCopied &&(
                            <div class="alert alert-success" role="alert">
                             text Copied To Clioboard !
                            </div>
                            )
                        }
                    
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Desctiption</h4>
              <div className="bg-white p-3">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="review" className="reviews-wrapper home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mb-0">Based on 2 reviews</p>
                  </div>
                  {orderedProduct && (
                    <a href="" className="review text-decoration-underline">
                      Write a Review
                    </a>
                  )}
                </div>

                <div className="review-form">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15 mt-4">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={0}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button className="button border-0 mx-2">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>

                <div className="reviews mt-4">
                  <div className="review mb-2">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Iheb Meftah</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt
                    </p>
                  </div>

                  <div className="review mb-2">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Ahmed Hassin</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <div className="section-heading">Our Popular Products</div>
            </div>
            <div className="row">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
