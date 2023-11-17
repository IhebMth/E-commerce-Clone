import React from 'react'
import { Link } from 'react-router-dom'

import blog from '../images/blog-1.jpg'
export default function BlogCard() {
  return (
    <>
  
      
        <div className="blog-card">
            <div className="card-image">
                <img src={blog} className='img-fluid' alt="blog" />
            </div>
            <div className="card-content">
                <h6 className='blog-time pt-4'>11 June 2022</h6>
                <h4 className='blog-title pt-3'>
                    A Beatiful Sunday Morning Renaissance
                </h4>

            <h6 className="blog-content pt-3">
                You're only as good as your last collection. Which is An
                Enormous Pressure i think there is Something about.. 
            </h6>
        <Link to="/blog/:id" className=' blog-button text-white text-upper p-2 mt-3'>Read More</Link>
            </div>
        </div>
     </>
     
  )
}
