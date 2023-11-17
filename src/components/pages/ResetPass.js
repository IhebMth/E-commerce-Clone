import React from 'react'
import Meta from "../Meta";
import BreadCrumb from "../BreadCrumb";
import { Link } from "react-router-dom";

function ResetPass() {
  return (
    <div>
            <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />

      <div className="login-wrapper home-wrapper py-5 d-flex justify-content-center">
          <div className="container-xxl d-flex align-items-center justify-content-center">
          <div className="row">
          
          <div className="col-12 ">
            <div className="login-card d-flex flex-column">
              <h5 className="title text-center mb-3">Reset Password</h5>
              <form action="">

                <div className="form-floating ">
                  <input
                    type="password"
                    name='password'
                    className="form-control mt-3 mb-3"
                    id="floatingInput"
                    placeholder="Passwrod"
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>

                <div className="form-floating ">
                  <input
                    type="password"
                    name='confirm-password'
                    className="form-control mt-3 mb-3"
                    id="floatingInput"
                    placeholder="Confirm Password"
                  />
                  <label htmlFor="floatingInput">Confirm Password</label>
                </div>
                <div>

              <div className="d-flex flex-column justify-content-center align-items-center position-relative">
              <button className=" button button2 border-0" type='submit'>Reset Password</button>
              </div>
              </div>
              </form>
               
            </div>
          </div>
        </div>
          </div>
        
      </div>
    </div>
  )
}

export default ResetPass
