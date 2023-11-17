import React from 'react'
import Meta from '../Meta'
import BreadCrumb from '../BreadCrumb'
import Colors from '../Colors'
import cross from '../../images/cross.svg'
import watch from "../../images/watch.jpg"
function CompareProduct() {
  return (
    <>
       <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
   
   <div className="compare-product-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
        <div className="row">
            
            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img 
                    src={cross}
                    alt="cross"
                    className='position-absolute cross'
                     />

                    <div className="product-card-image">
                        <img src={watch} alt="watch" />
                    </div>
                    <div className="compare-product-details">
                        <h5 className="title">
                            Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet  
                        </h5>

                        <h6 className="price mb-3">100 £ </h6>

                        <div>
                            <div className="product-detail ">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Type:</h5>
                                <p>Watch</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Availability:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Color:</h5>
                                <Colors />
                            </div>

                            <div className="product-detail ">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img 
                    src={cross} 
                    alt="cross"
                    className='position-absolute cross'
                     />

                    <div className="product-card-image">
                        <img src={watch} alt="watch" />
                    </div>
                    <div className="compare-product-details">
                        <h5 className="title">
                            Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet  
                        </h5>

                        <h6 className="price mb-3">100 £ </h6>

                        <div>
                            <div className="product-detail ">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Type:</h5>
                                <p>Watch</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Availability:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Color:</h5>
                                <Colors />
                            </div>

                            <div className="product-detail ">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img 
                    src={cross} 
                    alt="cross"
                    className='position-absolute cross'
                     />

                    <div className="product-card-image">
                        <img src={watch} alt="watch" />
                    </div>

                    <div className="compare-product-details">
                        <h5 className="title">
                            Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet  
                        </h5>

                        <h6 className="price mb-3">100 £ </h6>

                        <div>
                            <div className="product-detail ">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Type:</h5>
                                <p>Watch</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Availability:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Color:</h5>
                                <Colors className="compareColors"/>
                            </div>

                            <div className="product-detail ">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img 
                    src={cross}
                    alt="cross"
                    className='position-absolute cross'
                     />

                    <div className="product-card-image">
                        <img src={watch} alt="watch" />
                    </div>
                    <div className="compare-product-details">
                        <h5 className="title">
                            Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet  
                        </h5>

                        <h6 className="price mb-3">100 £ </h6>

                        <div>
                            <div className="product-detail ">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Type:</h5>
                                <p>Watch</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Availability:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Color:</h5>
                                <Colors />
                            </div>

                            <div className="product-detail ">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img 
                    src={cross}
                    alt="cross"
                    className='position-absolute cross'
                     />

                    <div className="product-card-image">
                        <img src={watch} alt="watch" />
                    </div>
                    <div className="compare-product-details">
                        <h5 className="title">
                            Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet  
                        </h5>

                        <h6 className="price mb-3">100 £ </h6>

                        <div>
                            <div className="product-detail ">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Type:</h5>
                                <p>Watch</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Availability:</h5>
                                <p>Havels</p>
                            </div>

                            <div className="product-detail ">
                                <h5>Color:</h5>
                                <Colors />
                            </div>

                            <div className="product-detail ">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                                    </div>
                                
                            </div>
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

export default CompareProduct
