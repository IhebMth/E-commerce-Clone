import React, { useState } from "react";
import Layout from "../Layout";
import BlogCard from "../BlogCard";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import SpecialProducts from "../SpecialProducts";
import Container from "../Container";
import { services } from "../utils/Data";

import mainBanner from "../../images/main-banner.jpg";
import laptopBanner from "../../images/catbanner-01.jpg";
import watchBanner from "../../images/catbanner-02.jpg";
import ipadBanner from "../../images/catbanner-03.jpg";
import airPodsBanner from "../../images/catbanner-04.jpg";

import camera from "../../images/camera.jpg";
import laptop from "../../images/laptop.jpg";
import smartTv from "../../images/tv.jpg";
import smartWatch from "../../images/headphone.jpg";
import headPhone from "../../images/headphone.jpg";

import famous from "../../images/famous-1.png";
import famous2 from "../../images/famous-2.png";
import famous3 from "../../images/famous-3.png";
import famous4 from "../../images/famous-4.png";

import brand1 from "../../images/brand-01.png";
import brand2 from "../../images/brand-02.png";
import brand3 from "../../images/brand-03.png";
import brand4 from "../../images/brand-04.png";
import brand5 from "../../images/brand-05.png";
import brand6 from "../../images/brand-06.png";
import brand7 from "../../images/brand-07.png";
import brand8 from "../../images/brand-08.png";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner  position-relative">
              <img
                src={mainBanner}
                alt="main banne"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>Special Sale</h5>
                <p>From $999.00 or 41.62/mo</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner  position-relative">
                <img
                  src={laptopBanner}
                  alt="laptop banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or $64.62/mo</p>
                </div>
              </div>

              <div className="small-banner  position-relative">
                <img
                  src={watchBanner}
                  alt="watch banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the lastest band styles and colors</p>
                </div>
              </div>

              <div className="small-banner  position-relative">
                <img
                  src={ipadBanner}
                  alt="Ipad banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>BUY IPAD AIR</h5>
                  <p>From $599 or 49.91/mo</p>
                </div>
              </div>

              <div className="small-banner  position-relative">
                <img
                  src={airPodsBanner}
                  alt="AirPods banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & ultra-low destortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-10" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="div d-flex  align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>

              <div className="div d-flex  align-items-center">
                <div>
                  <h6>laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src={laptop} alt="laptop" />
              </div>

              <div className="div d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={smartTv} alt="Smart Tv" />
              </div>

              <div className="div d-flex  align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={smartWatch} alt="Smart Watch" />
              </div>

              <div className="div d-flex  align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>

              <div className="div d-flex  align-items-center">
                <div>
                  <h6>laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src={laptop} alt="laptop" />
              </div>

              <div className="div d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={smartTv} alt="Smart Tv" />
              </div>

              <div className="div d-flex  align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={headPhone} alt="HeadPhone" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-12">
            <div className="section-heading">Featured Collection</div>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative bg-dark">
              <div className="famous-content">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From 399£or 16£.62/mo for 24 mo*</p>
              </div>
              <img src={famous} alt="famous" className="img-fluid" />
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative ">
              <div className="famous-content">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness</h6>
                <p className="text-dark"> 27-inch 5k Retina display</p>
              </div>
              <img src={famous4} alt="famous" className="img-fluid  mt-3" />
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <div className="famous-content p-3">
                <h5 className="text-dark">SmartPhones</h5>
                <h6 className="text-dark">SmartPhone 13 Pro</h6>
                <p className="text-dark">
                  Now in pink. From 999£.00 or 41.62£/mo for 24 mo{" "}
                </p>
              </div>
              <img src={famous2} alt="famous" className="img-fluid iphone" />
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative ">
              <div className="famous-content">
                <h5 className="text-dark">Home Speakers</h5>
                <h6 className="text-dark">Room-filling sound</h6>
                <p className="text-dark">From 699£or 116£.58/mo for 12 mo*</p>
              </div>
              <img
                src={famous3}
                alt="famous"
                className="img-fluid w-100"
                style={{ marginTop: "-20px" }}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-12">
            <div className="section-heading">Our Popular Products</div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>

      <Container class1=" marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand1} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-12">
            <div className="section-heading">Our Latest Blogs</div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>

          <div className="col-3">
            <BlogCard />
          </div>

          <div className="col-3">
            <BlogCard />
          </div>

          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
