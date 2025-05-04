import React from "react";
import Phone from "./assets/Phone.webp";
import Laptop from "./assets/laptop.webp";
import Tv from "./assets/tvv.webp";
import Tablet from "./assets/tablet.webp";



import { Swiper, SwiperSlide} from 'swiper/react';
import { Parallax,  Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';


import Banner2 from "./assets/banner2.jpg"
import Banner3 from "./assets/banner3.jpg"
import Banner4 from "./assets/fashion_20merchandising.webp"


import SliderMain1 from "../components/assets/mainSlider.png"
import SliderMain2 from "../components/assets/mainSlider2.png"


import "./Main.css";

export default function Main() {
  return (
    <>
      {/* Hero Section */}
      <div className="container my-5">
  <div className="row align-items-center">
    {/* Left Column (Text) */}
    <div className="headingMain col-md-6">
      <h1
        style={{
          fontSize: '67px',
          fontFamily: '"Bebas Neue", sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
        }}
        className="mb-3"
      >
        Welcome to Shopinity
      </h1>
      <p style={{ fontSize: '20px', fontWeight: 400, fontStyle: 'normal' }}>
        Shopify is your all-in-one commerce platform to start, run, and grow a business. Whether you're selling online, in-store, or on social media — Shopify is your tool to build a brand.
      </p>
      <button
        className="btn btn-dark"
        style={{
          fontSize: '20px',
          fontFamily: '"Bebas Neue", sans-serif',
          fontWeight: 400,
          fontStyle: 'italic',
        }}
      >
        <a style={{ textDecoration: 'none', color: 'white', fontSize: '30px' }} href="/">
          Shop Now
        </a>
      </button>
    </div>

    {/* Right Column (Swiper) */}
    <div className="col-md-6">
      <Swiper
        style={{ width: '100%', height: '100%' }}
        speed={600}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        parallax={true}
        navigation={true}
        modules={[Parallax, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: 'url("https://www.pinterest.com/pin/392587292523588290/")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
          <img
            src={Banner2}
            alt="Slide 1"
            className="img-fluid"
            data-swiper-parallax="-300"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Banner3}
            alt="Slide 2"
            className="img-fluid"
            data-swiper-parallax="-300"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Banner4}
            alt="Slide 3"
            className="img-fluid"
            data-swiper-parallax="-300"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>

      {/* Slider Section */}
      <div className="container my-5">
        <div className="row" style={{ position: "relative" }}>
          <div>
            <h1 className="mb-4 text-center">Best Selling Products</h1>
          </div>
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
    position: 'relative',
    zIndex: 2, 
  }}
  speed={600}
  autoplay={{ delay: 1500, disableOnInteraction: false }}
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
      src={SliderMain1}
      alt="Slide 1"
      className="img-fluid"
      data-swiper-parallax="-300"
    />
    <div className="title mt-3" data-swiper-parallax="-100"></div>
  </SwiperSlide>

  <SwiperSlide>
    <img
      src={SliderMain2}
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
