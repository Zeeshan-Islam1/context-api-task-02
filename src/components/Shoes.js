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
import Container from "react-bootstrap/Container"; 

import ShoesSlider1 from "../components/assets/shoesSlider.webp";
import ShoesSlider2 from "../components/assets/shoesSlider2.webp";
import ShoesSlider3 from "../components/assets/shoesSlider3.webp";

import shoes1 from "../components/assets/shoes1.png";
import shoes2 from "../components/assets/shoes2.png";
import shoes3 from "../components/assets/shoes3.png";
import shoes4 from "../components/assets/shoes4.png";
import shoes5 from "../components/assets/shoes5.png";
import shoes6 from "../components/assets/shoes6.png";

import ShoesMain1 from "../components/assets/shoesmain1.jpg"
import ShoesMain2 from "../components/assets/shoesmain2.jpg"


import "./tShirts.css";

function Shoes() {
  return (
    <Container fluid="md" className="py-4"> {/* ✅ All content wrapped in Container */}
      <div className="slider-wrapper">
        <div className="overlay">
          <div className="overlay__text">
            <h2 className="overlay__text--header">Runner Shoes</h2>
            <h1 className="overlay__text--subheader">
              Sports{" "}
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Hawk Runner Shoes 
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
                src={ShoesSlider1}
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
                src={ShoesSlider2}
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
                src={ShoesSlider3}
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
              {[shoes1, shoes2, shoes3, shoes4, shoes5, shoes6].map((img, i) => {
               const data = [
                {
                    title: "Trail Runner X1",
                    text: "Durable trail running shoes designed for rugged terrain and comfort.",
                    price: "₹2,999",
                  },
                  {
                    title: "Urban Street Sneaker",
                    text: "Stylish sneakers perfect for daily wear with cushioned insoles.",
                    price: "₹3,499",
                  },
                  {
                    title: "Performance Sports Pro",
                    text: "High-performance shoes for athletes with maximum grip and support.",
                    price: "₹4,199",
                  },
                  {
                    title: "Classic Leather Loafer",
                    text: "Elegant leather design with comfort padding – ideal for formal wear.",
                    price: "₹3,799",
                  },
                  {
                    title: "Everyday Flexi Walk",
                    text: "Lightweight and breathable shoes for all-day walking comfort.",
                    price: "₹2,299",
                  },
                  {
                    title: "Retro Runner Vibe",
                    text: "Throwback-inspired sneakers with modern durability and style.",
                    price: "₹3,899",
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
< hr/>
      <div className="container my-5">
  <div className="row align-items-center">
      <div className="Heading">
      <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'italic', fontSize: '70px', textAlign: 'center' }}>
  Premium Sports Shoes
</h2>
<hr/>
      </div>
    {/* Left Column – Image and Button */}
    <div className="col-md-6 dflex flex-column align-items-center">

      <img
        src={ShoesMain1}
        alt="Classic White Tee"
        className="img-fluid rounded mb-3"
        style={{ maxHeight: "400px", width: "700px", objectFit: "cover" }}
      />
    </div>

    {/* Right Column – Product Details */}
    <div className="col-md-6">
  <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
    Trail <span style={{ color: 'red' }}>Runner</span>  X1
  </h2>
  <p>
    Designed for trail adventurers, these shoes offer excellent grip, comfort, and support across any terrain.
  </p>
  <p><strong>Material:</strong> Synthetic Mesh & Rubber Sole</p>
  <p><strong>Available Sizes:</strong> 7, 8, 9, 10</p>
  <p><strong>Price:</strong> ₹2,999</p>
  <Button variant="dark">Buy Now</Button>
</div>


  </div>
 <hr/>
  <div className="row align-items-center">
    {/* Right Column – Product Details */}
    <div className="col-md-6">
  <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
    Urban <span style={{ color: 'red' }}>Street</span> Sneakers
  </h2>
  <p>
    Bold red design sneakers built for city comfort and confident street style. Breathable and supportive.
  </p>
  <p><strong>Material:</strong> PU Leather & Foam Sole</p>
  <p><strong>Available Sizes:</strong> 6, 7, 8, 9, 10</p>
  <p><strong>Price:</strong> ₹3,499</p>
  <Button variant="dark">Buy Now</Button>
</div>
    {/* Left Column – Image and Button */}
    <div className="col-md-6 dflex flex-column align-items-center">
      <img
        src={ShoesMain2}
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

export default Shoes;
