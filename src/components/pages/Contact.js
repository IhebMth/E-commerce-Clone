import React from 'react'
import Meta from '../Meta'
import BreadCrumb from '../BreadCrumb'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {BsInfoLg} from 'react-icons/bs'
const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact Us" />

<div className="contact-wrapper py-5 home-wrapper-3">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
     
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.535564393614!2d10.056631565093982!3d33.87585825970945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125571c77137a8dd%3A0x275aa18646047659!2sBrahim%20Meftah!5e0!3m2!1sen!2stn!4v1686408991778!5m2!1sen!2stn" 
height="450" 
width= "600"
className='border-0 w-100'
 allowFullscreen=""
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="col-12 mt-5">
        <div className="contact-inner-wrapper d-flex justify-content-between">
          
          <div className=''>
            <h3 className='contact-title'>Contact </h3> 
            <form action="" className='d-flex flex-column gap-15 mt-4'>
              <div>
                <input 
                type="text"
                 className="form-control " 
                 placeholder='Name'/>
              </div>

              <div>
                <input type="text" 
                className="form-control" 
                placeholder='Email'/>
              </div>

              <div>
                <input 
                type="text" 
                className="form-control" 
                placeholder='Mobile Number'
                />
              
              </div>

              <div>
              <textarea name="" 
              id=""
              className='w-100 form-control' 
              cols="30" 
              rows="4"
              placeholder='Comments'>
              </textarea>
              </div>

              <div>
                <button className="button border-0 mx-2">Submit</button>
              </div>
            </form>
          </div>
          
          <div className=''>
          <h3 className='contact-title'>
            Get in touch with us
            </h3>
            <div>
              <ul className="ps-0">
                <li className='mb-2 d-flex gap-15 align-items-center mt-4 mb-4'>
                  <AiOutlineHome className='fs-5' />
                  <address className='mb-0'> Chenini Gabes, Near Bakery Al-Baraka </address>
                </li>

                <li className='mb-2 d-flex gap-15 align-items-center mb-4'>
                  <BiPhoneCall className='fs-5' />
                  <a href="tel:+216 55 918 650">+216 55 918 650</a>
                </li>

                <li className='mb-2 d-flex gap-15 align-items-center mb-4'>
                  <AiOutlineMail className='fs-5' />
                  <a href="mailto:ihebmeftah@outlook.fr">
                    ihebmeftah@outlook.fr
                  </a>
                </li>

                <li className='mb-2 d-flex gap-15 align-items-center'>
                  <BsInfoLg className='fs-5' />
                  <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                </li>

              </ul>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Contact
