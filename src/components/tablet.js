import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import Tablet1 from "./assets/tablet1.png";
import Tablet2 from "./assets/tablet2.png";
import Tablet3 from "./assets/tablet3.png";
import Tablet4 from "./assets/tablet4.png";
import Tablet5 from "./assets/tablet5.png";
import Tablet6 from "./assets/tablet6.png";



export default function TabletPage() {
  const navigate = useNavigate();

  const handleBuyNow = (id) => {
    navigate(`/tablet/${id}`);;
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Tablet Section</h1>

      <Carousel indicators={false}>
        <Carousel.Item>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tablet1} alt="Galaxy Tab A8" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Galaxy Tab A8</Card.Title>
                  <Card.Text>Entertainment-ready tablet with immersive display and Dolby Atmos audio.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹15,999</p>
                  <Button variant="dark"onClick={() => handleBuyNow(1 ,'tablet')}> Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tablet2} alt="iPad 9th Gen" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>iPad 9th Gen</Card.Title>
                  <Card.Text>A powerful iPad with A13 Bionic chip and Retina display.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹29,999</p>
                  <Button variant="dark"onClick={() => handleBuyNow(2 ,'tablet')}> Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tablet3} alt="Lenovo Tab M10" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Lenovo Tab M10</Card.Title>
                  <Card.Text>Compact and efficient tablet for casual use and browsing.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹12,499</p>
                  <Button variant="dark"onClick={() => handleBuyNow(3 ,'tablet')}> Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tablet4} alt="Realme Pad" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Realme Pad</Card.Title>
                  <Card.Text>Ultra-slim tablet with long battery life and immersive display.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹13,999</p>
                  <Button variant="dark"onClick={() => handleBuyNow(4 ,'tablet')}> Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tablet5} alt="Microsoft Surface Go 3" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Surface Go 3</Card.Title>
                  <Card.Text>Portable 2-in-1 with Windows 11 and touchscreen experience.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹42,999</p>
                  <Button variant="dark"onClick={() => handleBuyNow(5 ,'tablet')}> Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tablet6} alt="Xiaomi Pad 6" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Xiaomi Pad 6</Card.Title>
                  <Card.Text>Performance-focused tablet with Snapdragon chipset and 120Hz display.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹26,999</p>
                  <Button variant="dark"onClick={() => handleBuyNow(6 ,'tablet')}> Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>

            <a href="/" className="go-back">
                <RiArrowGoBackFill className="back-icon" /> Back to Home
              </a>
    </div>
  );
}
