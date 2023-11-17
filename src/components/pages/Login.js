import React from "react";
import Meta from "../Meta";
import BreadCrumb from "../BreadCrumb";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
function Login() {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container className="login-wrapper home-wrapper py-5 d-flex justify-content-center">
         
         <div className="row">
          
          <div className="col-12 ">
            <div className="login-card d-flex flex-column">
              <h5 className="title text-center">Login</h5>
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

                <div className="form-floating ">
                  <input
                    type="password"
                    className="form-control mt-3 mb-3"
                    id="floatingInput"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>
                <div>
              <Link to='/forgot-password'  
              className="forgot-pass">
                  forgot Your password?
              </Link>

              <div className="d-flex justify-content-center align-items-center position-relative">
              <button className="button border-0 mx-2" type="submit">Login</button>
                <Link to="/sign-up" className="button button2 border-0 mx-2">Sign Up</Link>
              </div>
              </div>
              </form>
               
            </div>
          </div>
        </div>
      
        
      </Container>
    </>
  );
}

export default Login;
