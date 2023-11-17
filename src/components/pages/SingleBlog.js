import React from 'react'
import Meta from '../Meta'
import BreadCrumb from '../BreadCrumb'
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from 'react-icons/hi'
function SingleBlog() {
  return (
    <>
            <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title={" Dinamic Blog Name"} />
    
      <div className="blog-wrapper home-wrapper-2 py-5">
    <div className="container-xxl">
        <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
              <Link to='/blogs' className='d-flex align-items-center gap-10'> 
              <HiOutlineArrowLeft className='fs-4' />
              Go back to Blogs</Link>
               <h3 className="title">
                A Beautifu Sunday Morning Renaissance
               </h3>
               <img src="images/blogs-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                <p>You're only as good as your last collection,
                    whish is an enormous pressure.
                    I think there is something about luxury -
                    It's not something people need but it's what they want.
                </p>
                </div>  
            </div>

        </div>
    </div>
</div>
    
    </>
  )
}

export default SingleBlog
