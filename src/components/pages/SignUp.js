import React from 'react'
import Meta from "../Meta";
import BreadCrumb from "../BreadCrumb";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div>
        <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />

      <div className="login-wrapper home-wrapper py-5 d-flex justify-content-center">
         <div className="container-xxl d-flex align-items-center justify-content-center">
         <div className="row">
          
          <div className="col-12 ">
            <div className="login-card d-flex flex-column">
              <h5 className="title text-center">Create Account</h5>
              <form action="">
              <div className="form-floating ">
                  <input
                    type="text"
                    name='name'
                    className="form-control mt-3 mb-3"
                    id="floatingInput"
                    placeholder="name"
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>

                <div className="form-floating ">
                  <input
                    type="text"
                    name='mobile'
                    className="form-control mt-3 mb-3"
                    id="floatingInput"
                    placeholder="mobile Number"
                  />
                  <label htmlFor="floatingInput">Mobile Number</label>
                </div>

                <div className="form-floating ">
                  <input
                    type="email"
                    name='email'
                    className="form-control mt-3 mb-3"
                    id="floatingInput"
                    placeholder="Email"
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>

                <div className="form-floating ">
                  <input
                    type="password"
                    name='password'
                    className="form-control mt-3 mb-3"
                    id="floatingInput"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>
                <div>

              <div className="d-flex flex-column justify-content-center align-items-center position-relative">
              <button className=" button button2 border-0" type='submit'>Create Account</button>
              <div className="d-flex flex-row mt-2">
              <p className='mt-1 px-2'> Have An Account?</p>
              <Link to="/login">Login</Link>
              </div>
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

export default SignUp
