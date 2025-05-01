import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import Tv1 from "./assets/tv1.png";
import Tv2 from "./assets/tv2.png";
import Tv3 from "./assets/tv3.png";
import Tv4 from "./assets/tv4.png";
import Tv5 from "./assets/tv5.png";
import Tv6 from "./assets/tv6.png";

import "./laptops.css";

function Tv() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/");
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">TV Section</h1>

      <Carousel indicators={false}>
        <Carousel.Item>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tv1} alt="Samsung Neo QLED" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Samsung Neo QLED</Card.Title>
                  <Card.Text>Quantum Matrix Technology and ultra-fine light control for stunning clarity.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹1,29,999</p>
                  <Button variant="dark" onClick={handleBuyNow}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tv2} alt="LG C2 OLED" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>LG C2 OLED</Card.Title>
                  <Card.Text>Self-lit pixels, Dolby Vision IQ & webOS Smart features for top performance.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹1,05,000</p>
                  <Button variant="dark" onClick={handleBuyNow}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tv3} alt="Sony Bravia XR" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Sony Bravia XR</Card.Title>
                  <Card.Text>Cognitive Processor XR and Full Array LED for incredible contrast and realism.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹1,10,999</p>
                  <Button variant="dark" onClick={handleBuyNow}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tv4} alt="TCL 4K QLED" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>TCL 4K QLED</Card.Title>
                  <Card.Text>Android TV with HDR10+ and Dolby Atmos for a cinematic experience.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹45,499</p>
                  <Button variant="dark" onClick={handleBuyNow}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tv5} alt="OnePlus Y1S Pro" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>OnePlus Y1S Pro</Card.Title>
                  <Card.Text>4K Ultra HD display, Gamma Engine, and bezel-less design.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹32,999</p>
                  <Button variant="dark" onClick={handleBuyNow}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Tv6} alt="Mi TV 5X" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Mi TV 5X</Card.Title>
                  <Card.Text>Premium metallic design, Vivid Picture Engine 2, and Dolby Audio.</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹29,499</p>
                  <Button variant="dark" onClick={handleBuyNow}>Buy Now</Button>
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

export default Tv;
