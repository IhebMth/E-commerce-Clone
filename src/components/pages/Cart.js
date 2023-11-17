import React from "react";
import Meta from "../Meta";
import BreadCrumb from "../BreadCrumb";
import { Link } from "react-router-dom";
import watch from "../../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import Container from '../Container'
const Cart = () => {
  return (
    <>
    <Meta title={"Cart"} />
      <BreadCrumb title={"Cart"} />

      <Container class1="cart-wrapper home-wrapper-2 py-2">
        
          <div className="row">
            <div className="col-12">
              <div className="card-header d-flex justify-content-between align-items-center py-3">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>

              <div className="card-data d-flex justify-content-between align-items-center py-3">
                <div className="cart-col-1 d-flex gap-10 align-items-center">
                  <div className="w-25">
                    <img 
                      src={watch}
                      alt="product-img"
                      className="img-fluid"
                    />
                  </div>

                  <div className="w-75">
                    <p>GDffdh</p>
                    <p>Size: red</p>
                    <p>Color: M</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">100 £</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className=" cart-form form-control p-2"
                    />
                  </div>

                  <div>
                    <AiFillDelete
                      className="text-danger fs-5"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">100 £</h5>
                </div>
              </div>

            </div>

            <div className="col-12 py-2">
                <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">Continue To Shopping
                </Link>
                <div className=" d-flex flex-column align-items-end">
                    <h4>SubToatal: 100£</h4>
                    <p>Taxes and shpping calculated at checkout</p>
                    <Link to="/checkout" className="button">
                    Checkout
                    </Link>
                </div>
                </div>
            </div>
          </div>
       
      </Container>
    </>
  );
};

export default Cart;
