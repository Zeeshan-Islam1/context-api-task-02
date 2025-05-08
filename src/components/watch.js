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

import watchSlider1 from "../components/assets/watchSlider.webp";
import watchSlider2 from "../components/assets/watchSlider2.webp";
import watchSlider3 from "../components/assets/watchSlider3.webp";

import watch1 from "../components/assets/watch1.png";
import watch2 from "../components/assets/watch2.png";
import watch3 from "../components/assets/watch3.webp";
import watch4 from "../components/assets/watch4.webp";
import watch5 from "../components/assets/watch5.png";
import watch6 from "../components/assets/watch6.webp";



import watchMain from "../components/assets/watchmain1.webp";
import watchMain2 from "../components/assets/watchmain2.webp";


import "./tShirts.css";

function Watches() {
  return (
    <Container fluid="md" className="py-4"> {/* ✅ All content wrapped in Container */}
      <div className="slider-wrapper">
        <div className="overlay">
        <div className="overlay__text">
  <h2 className="overlay__text--header">Watches</h2>
  <h1 className="overlay__text--subheader">
    Premium{" "}
    <span
      style={{
        color: "red",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      Watches
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
                src={watchSlider1}
                alt="T-shirt 1"
                className="img-fluid w-100"
                data-swiper-parallax="-300"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 align-items-center text-white text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="position-relative">
              <img
                src={watchSlider2}
                alt="T-shirt 2"
                className="img-fluid w-100"
                data-swiper-parallax="-300"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 align-items-center text-white text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="position-relative">
              <img
                src={watchSlider3}
                alt="T-shirt 3"
                className="img-fluid w-100"
                data-swiper-parallax="-300"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 align-items-center text-white text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

           {/* Carousel Section */}
           <Carousel indicators={false}>
          <Carousel.Item>
            <Row className="g-4 justify-content-center">
              {[watch1, watch2, watch3, watch4, watch5, watch6].map((img, i) => {
               const data = [
                {
                    title: "Classic Analog Watch",
                    text: "Elegant design with leather strap, perfect for formal wear.",
                    price: "₹1,999",
                  },
                  {
                    title: "Smart Fitness Watch",
                    text: "Track your steps, heart rate & stay connected on the go.",
                    price: "₹2,499",
                  },
                  {
                    title: "Chronograph Sports Watch",
                    text: "Water-resistant with stopwatch feature and bold dial.",
                    price: "₹3,199",
                  },
                  {
                    title: "Minimalist Steel Watch",
                    text: "Clean, classic look with stainless steel body.",
                    price: "₹1,899",
                  },
                  {
                    title: "Digital Outdoor Watch",
                    text: "Backlit display, rugged design – made for adventure.",
                    price: "₹2,199",
                  },
                  {
                    title: "Gold-Plated Luxe Watch",
                    text: "Luxury design with gold finish and classic detailing.",
                    price: "₹4,499",
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
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'italic', fontSize: '70px',textAlign: 'center' }} >Signature Timepieces</h2>
      </div>
    {/* Left Column – Image and Button */}
    <div className="col-md-6 dflex flex-column align-items-center">

      <img
        src={watchMain}
        alt="Classic White Tee"
        className="img-fluid rounded mb-3"
        style={{ maxHeight: "400px", width: "700px", objectFit: "cover" }}
      />
    </div>

    {/* Right Column – Product Details */}
    <div className="col-md-6">
      <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'italic' }} > Classic Leather Watch</h2>
      <p>
  This timeless analog watch features a genuine leather strap and durable casing. Ideal for both office and occasion wear.
</p>
<p><strong>Material:</strong> Stainless Steel & Leather</p>
<p><strong>Water Resistant:</strong> Yes</p>
<p><strong>Price:</strong> ₹1,999</p>
<Button variant="dark">Buy Now</Button>
    </div>


  </div>
 <hr/>
  <div className="row align-items-center">
    {/* Right Column – Product Details */}
    <div className="col-md-6">
    <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'italic'}} >
  Bold <span style={{color: 'red'}}>Red Dial</span> Watch
</h2>
       <p>
  Make a statement with this striking red-dial watch. Built for performance and unmatched style.
</p>
<p><strong>Material:</strong> Alloy & Silicone Strap</p>
<p><strong>Water Resistant:</strong> Yes</p>
<p><strong>Price:</strong> ₹2,499</p>
      <Button variant="dark">Buy Now</Button>
    </div>
    {/* Left Column – Image and Button */}
    <div className="col-md-6 dflex flex-column align-items-center">
      <img
        src={watchMain2}
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

export default Watches;
