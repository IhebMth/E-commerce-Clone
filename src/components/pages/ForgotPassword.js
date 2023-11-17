import React from 'react'
import Meta from "../Meta";
import BreadCrumb from "../BreadCrumb";
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />

      <div className="login-wrapper home-wrapper py-5 d-flex justify-content-center align-items-center">
        <div className="container-xxl d-flex align-items-center justify-content-center">
        <div className="row">
          
          <div className="col-12 ">
            <div className="login-card d-flex flex-column justify-content-center align-items-center">
              <h5 className="title text-center">Reset Your Password</h5>
              <p className="text-center my-2 mb-2">We will send instructions to reset your password</p>
              <form action="">
              
                <div className="form-floating ">
                  <input
                    type="email"
                    className="form-control mt-3 mb-3"
                    id="floatingInput"
                    placeholder="Email"
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>

                
                <div>
            

              <div className="d-flex flex-column justify-content-center align-items-center position-relative">
              <button className="button border-0 mb-1" type='submit'>Submit</button>
                <Link to="/login">Cancel</Link>
              </div>
              </div>
              </form>
               
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default ForgotPassword
