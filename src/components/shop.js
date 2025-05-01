import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import About from "./About";

import Shop1 from "./assets/12pro2.webp";
import Shop2 from "./assets/techno.webp";
import Shop3 from "./assets/galaxy.webp";
import Shop4 from "./assets/Xiaom3.webp";
import Shop5 from "./assets/redmi.webp";
import Shop6 from "./assets/XR.webp";

import "./shop.css";

function Shop() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/");
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Shop Page</h1>

      <Carousel indicators={false}>
        <Carousel.Item>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img
                    src={Shop1}
                    alt="iPhone 12 Pro"
                    className="custom-card-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>iPhone 12 Pro</Card.Title>
                  <Card.Text>
                    Experience premium performance with the iPhone 12 Pro's A14
                    Bionic chip and stunning camera.
                  </Card.Text>
                  <p className="fw-bold text-success mb-2">Price: 	₹89,999</p>
                  <Button variant="dark" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img
                    src={Shop2}
                    alt="Tecno Spark"
                    className="custom-card-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Tecno Spark</Card.Title>
                  <Card.Text>
                    Affordable and stylish, the Tecno Spark delivers great
                    battery life and performance for its price.
                  </Card.Text>
                  <p className="fw-bold text-success mb-2">Price: 	₹7,499</p>
                  <Button variant="dark" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img
                    src={Shop3}
                    alt="Samsung Galaxy"
                    className="custom-card-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Samsung Galaxy</Card.Title>
                  <Card.Text>
                    The latest Galaxy device with AMOLED display and powerful
                    processing for smooth multitasking.
                  </Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹29,999</p>
                  <Button variant="dark" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img
                    src={Shop4}
                    alt="Xiaomi Mi 11"
                    className="custom-card-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Xiaomi Mi 11</Card.Title>
                  <Card.Text>
                    Flagship specs at midrange pricing – Xiaomi Mi 11 offers
                    top-tier performance and sleek design.
                  </Card.Text>
                  <p className="fw-bold text-success mb-2">Price: 	₹39,499</p>
                  <Button variant="dark" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img
                    src={Shop5}
                    alt="Redmi Note"
                    className="custom-card-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Redmi Note</Card.Title>
                  <Card.Text>
                    A fan favorite with reliable performance, big battery, and a
                    value-for-money experience.
                  </Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹15,999</p>
                  <Button variant="dark" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img
                    src={Shop6}
                    alt="iPhone XR"
                    className="custom-card-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>iPhone XR</Card.Title>
                  <Card.Text>
                    Colorful design meets performance – iPhone XR is perfect for
                    everyday use with iOS features.
                  </Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹47,999</p>
                  <Button variant="dark" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
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

export default Shop;
