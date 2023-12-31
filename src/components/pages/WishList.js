import React from "react";
import Meta from "../Meta";
import BreadCrumb from "../BreadCrumb";
import watch from '../../images/watch.jpg'
import cross from '../../images/cross.svg'

function WishList() {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />

      <div className="wishlist-wrapper home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">

            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image ">
                  <img
                    src={watch}
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet
                </h5>

                <h6 className="price">100 £</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image ">
                  <img
                    src={watch}
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet
                </h5>

                <h6 className="price">100 £</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image ">
                  <img
                    src={watch}
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet
                </h5>

                <h6 className="price">100 £</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image ">
                  <img
                    src={watch}
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet
                </h5>

                <h6 className="price">100 £</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image ">
                  <img
                    src={watch}
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+ 3G Tablet
                </h5>

                <h6 className="price">100 £</h6>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default WishList;
