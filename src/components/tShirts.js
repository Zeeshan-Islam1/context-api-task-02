import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"; // ✅ Container added

import SliderMain1 from "../components/assets/cr7.webp";
import SliderMain2 from "../components/assets/cr72.webp";
import SliderMain3 from "../components/assets/cr73.webp";

import Tshirt1 from "../components/assets/tshirt1.jpg";
import Tshirt2 from "../components/assets/tshirt2 (2).jpg";
import Tshirt3 from "../components/assets/tshirt3.jpg";
import Tshirt4 from "../components/assets/tshirt4.jpg";
import Tshirt5 from "../components/assets/tshirt5.jpg";
import Tshirt6 from "../components/assets/tshirt6.jpg";
import Tshirt7 from "../components/assets/abouttshirt.webp";
import Tshirt8 from "../components/assets/abouttshirt2.webp";


import "./tShirts.css";

function tShirts() {
  return (
    <Container fluid="md" className="py-4"> {/* ✅ All content wrapped in Container */}
      <div className="slider-wrapper">
        <div className="overlay">
          <div className="overlay__text">
            <h2 className="overlay__text--header">T-Shirts</h2>
            <h1 className="overlay__text--subheader">
              Sports{" "}
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                T-Shirts
              </span>{" "}
              for Men
            </h1>
          </div>
        </div>

  
        {/* Swiper Section */}
        <Swiper
          speed={700}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          parallax={true}
          navigation={true}
          modules={[Parallax, Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="position-relative">
              <img
                src={SliderMain1}
                alt="T-shirt 1"
                className="img-fluid w-100"
                data-swiper-parallax="-300"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 align-items-center text-white text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
                <div className="inner">
                  <h2>Classic Edition</h2>
                  <p>A timeless classic for any occasion.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="position-relative">
              <img
                src={SliderMain2}
                alt="T-shirt 2"
                className="img-fluid w-100"
                data-swiper-parallax="-300"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 align-items-center text-white text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
                <div className="inner">
                  <h2>Streetwear Edition</h2>
                  <p>Urban vibes with modern comfort.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="position-relative">
              <img
                src={SliderMain3}
                alt="T-shirt 3"
                className="img-fluid w-100"
                data-swiper-parallax="-300"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 align-items-center text-white text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
                <div className="inner">
                  <h2>Printed Cool Tee</h2>
                  <p>Show off your attitude in style.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

           {/* Carousel Section */}
           <Carousel indicators={false}>
          <Carousel.Item>
            <Row className="g-4 justify-content-center">
              {[Tshirt1, Tshirt2, Tshirt3, Tshirt4, Tshirt5, Tshirt6].map((img, i) => {
               const data = [
                {
                  title: "Classic White Tee",
                  text: "Premium cotton T-shirt with a timeless look and ultimate comfort.",
                  price: "₹499",
                },
                {
                  title: "Graphic Print Tee",
                  text: "Bold prints with a relaxed fit – ideal for streetwear vibes.",
                  price: "₹699",
                },
                {
                  title: "Sports Dry-Fit",
                  text: "Sweat-wicking performance tee designed for workouts and runs.",
                  price: "₹799",
                },
                {
                  title: "Black Oversized Tee",
                  text: "Trendy oversized fit with minimal branding – all-day comfort.",
                  price: "₹599",
                },
                {
                  title: "Striped Casual Tee",
                  text: "Everyday striped T-shirt for a laid-back, stylish look.",
                  price: "₹549",
                },
                {
                  title: "Retro Colorblock Tee",
                  text: "Throwback colorblock design with modern cotton stretch fabric.",
                  price: "₹749",
                },
              ];
              

                return (
                  <Col md={4} key={i}>
                    <Card className="h-100 text-center">
                      <div className="card-image-container">
                        <img src={img} alt={data[i].title} className="custom-card-img" />
                      </div>
                      <Card.Body>
                        <Card.Title>{data[i].title}</Card.Title>
                        <Card.Text>{data[i].text}</Card.Text>
                        <p className="fw-bold text-success mb-2">Price: {data[i].price}</p>
                        <Button variant="dark">Buy Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container my-5">
  <div className="row align-items-center">
      <div className="Heading">
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'italic', fontSize: '70px',textAlign: 'center' }} >premium cotton T-shirts</h2>
      </div>
    {/* Left Column – Image and Button */}
    <div className="col-md-6 dflex flex-column align-items-center">

      <img
        src={Tshirt7}
        alt="Classic White Tee"
        className="img-fluid rounded mb-3"
        style={{ maxHeight: "400px", width: "700px", objectFit: "cover" }}
      />
    </div>

    {/* Right Column – Product Details */}
    <div className="col-md-6">
      <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'italic' }} >Classic White Tee</h2>
      <p>
        This premium cotton T-shirt offers unmatched comfort and style. Perfect for casual wear or layering, its breathable fabric keeps you cool all day.
      </p>
      <p><strong>Material:</strong> 100% Cotton</p>
      <p><strong>Available Sizes:</strong> M, L, XL</p>
      <p><strong>Price:</strong> ₹499</p>
      
    </div>


  </div>
 <hr/>
  <div className="row align-items-center">
    {/* Right Column – Product Details */}
    <div className="col-md-6">
       <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'italic'}} >Classic <span style={{color: 'red'}}>Red</span>   Tee</h2>
     <p>
        This premium cotton T-shirt offers unmatched comfort and style. Perfect for casual wear or layering, its breathable fabric keeps you cool all day.
      </p>
      <p><strong>Material:</strong> 100% Cotton</p>
      <p><strong>Available Sizes:</strong> M, L, XL</p>
      <p><strong>Price:</strong> ₹499</p>
      <Button variant="dark">Buy Now</Button>
    </div>
    {/* Left Column – Image and Button */}
    <div className="col-md-6 dflex flex-column align-items-center">
      <img
        src={Tshirt8}
        alt="Classic White Tee"
        className="img-fluid rounded mb-3"
        style={{ maxHeight: "400px", width: "700px", objectFit: "cover" }}
      />
    </div>


</div>
</div>



    </Container>
  );
}

export default tShirts;
