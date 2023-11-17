import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import watch from '../images/watch.jpg'

export default function SpecialProducts() {
  return (
    <div className='col-6 mt-4'>
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
            <div>
                <img src={watch} className='img-fluid' alt="watch" />
            </div>

            <div>
                <div className="special-product-content  m-2  ">
                    <h5 className="brand">Havels</h5>
                    <h6 className='title'>Sumsung Galaxy  Note 10+ Mobile Phone; Sim...</h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                        />
                </div>
                <p className="price">
                    <span className="red-p">100£ </span>
                <strike> 200£</strike>
                </p>
                <div className="discount-till d-flex align-items-center gap-10">
                    <p className='mb-0'>
                        <b>5</b>days 
                        </p>
                      
                        <div className="d-flex gap-10 align-items-center">
                            <span className='badge rounded-circle p-3 bg-danger '>1</span>
                            <span className='badge rounded-circle p-3 bg-danger '>1</span>
                            <span className='badge rounded-circle p-3 bg-danger '>1</span>
                        </div>        
                </div>

                <div className="prod-count my-3">
                <p>Products: 5</p>
                <div className="progress">
                 <div className="progress-bar" 
                 style={{width: '25%'}}
                 role="progressbar" 
                 aria-label="Basic example"
                  aria-valuenow="25"
                   aria-valuemin="0" 
                   aria-valuemax="100"
                   >
                 </div>
                </div>

                    </div>

                <Link className='button mt-4'>Add toCard</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
