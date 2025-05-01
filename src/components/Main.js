import React from "react";
import MainImg from "./assets/fashion-ecommerce.webp";
import Phone from "./assets/Phone.webp";
import Laptop from "./assets/laptop.webp";
import Tv from "./assets/tvv.webp";
import Tablet from "./assets/tablet.webp";
import Pc from "./assets/Desktop.webp";


import { Swiper, SwiperSlide} from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';


import Banner2 from "./assets/banner2.jpg"
import Banner3 from "./assets/banner3.jpg"
import Banner4 from "./assets/fashion_20merchandising.webp"


import "./Main.css";

export default function Main() {
  return (
    <>
      {/* Hero Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="headingMain col-md-6">
            <h1
              style={{
                fontSize: "67px",
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
              }}
              className="mb-3"
            >
              Welcome to Shopify
            </h1>
            <p
              style={{ fontSize: "20px", fontWeight: 400, fontStyle: "normal" }}
            >
              Shopify is your all-in-one commerce platform to start, run, and
              grow a business. Whether you're selling online, in-store, or on
              social media — Shopify is your tool to build a brand.
            </p>
            <button
              className="btn btn-dark"
              style={{
                fontSize: "20px",
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              <a
                style={{ textDecoration: "none", color: "white" , fontSize: "30px" }}
                href="/"
              >
                Shop Now
              </a>
            </button>
          </div>

          {/* Right Column */}
          <div className="col-md-6 text-center">
            <img
              style={{
                borderRadius: "20px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                height: "400px",
                objectFit: "cover",
              }}
              src={MainImg}
              alt="Shopify Items"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="container my-5">
        <div className="row" style={{ position: "relative" }}>
          <div
            className="Slider-Ovarly"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
            }}
          ></div>
            <div className="slider-wrapper">
         <Swiper cla
  style={{
    // '--swiper-navigation-color': '#fff',
    // '--swiper-pagination-color': '#fff',
    position: 'relative',
    zIndex: 2, 
  }}
  speed={600}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  parallax={true}
  navigation={true}
  modules={[Parallax, Navigation, Parallax, Autoplay]}
  className="mySwiper"
>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      backgroundImage: 'url("https://www.pinterest.com/pin/392587292523588290/l)',
    }}
    data-swiper-parallax="-23%"
  ></div>

  <SwiperSlide>
    <img
      src={Banner2}
      alt="Slide 1"
      className="img-fluid"
      data-swiper-parallax="-300"
    />
    <div className="title mt-3" data-swiper-parallax="-100"></div>
  </SwiperSlide>

  <SwiperSlide>
    <img
      src={Banner3}
      alt="Slide 2"
      className="img-fluid"
      data-swiper-parallax="-300"
      
    />
  </SwiperSlide>
  <SwiperSlide>
    <img
      src={Banner4}
      alt="Slide 2"
      className="img-fluid"
      data-swiper-parallax="-300"
      
    />
  </SwiperSlide>
</Swiper>
</div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container my-5">
        <h1 className="Heading-products text-center mb-4">Products Section</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="Cards d-flex flex-wrap justify-content-center align-items-center">

            <div className="card-Ovarly text-center m-3">
            <a href="/Laptops" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={Laptop}
                alt="Laptop"
                className="img-fluid"
                style={{ width: "200px" }}
              />
              <h1>Laptops</h1>
            </a>
            </div>

                   <div className="card-Ovarly text-center m-3">

            <a href="/shop" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={Phone}
                alt="Phone"
                className="img-fluid"
                style={{ width: "200px" }}
              />
              <h1>Mobiles</h1>
            </a>
            </div>


            <div className="card-Ovarly text-center m-3">
            <a href="/Tv" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={Tv}
                alt="TV"
                className="img-fluid"
                style={{ width: "200px" }}
              />
              <h1>TV</h1>
            </a>
            </div>



            <div className="card-Ovarly text-center m-3">
            <a href="/tablet" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={Tablet}
                alt="Tablet"
                className="img-fluid"
                style={{ width: "200px" }}
              />
              <h1>Tablet</h1>
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
