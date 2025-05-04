import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


import Laptop2 from "./assets/laptop2.png";
import Laptop3 from "./assets/laptop3.png";
import Laptop4 from "./assets/laptop4.png";
import Laptop5 from "./assets/laptop5.png";
import Laptop6 from "./assets/laptop6.png";
import Laptop7 from "./assets/laptop7.png";

import "./laptops.css";

export default function Laptops() {
  const navigate = useNavigate();

  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Laptop Section</h1>

      <Carousel indicators={false}>
        <Carousel.Item>
          <Row className="g-4 justify-content-center">
            {/* Product 1 */}
            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Laptop7} alt="Dell Inspiron 15" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Dell Inspiron 15</Card.Title>
                  <Card.Text>15.6" FHD, Intel i5 12th Gen, 8GB RAM, 512GB SSD</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹57,999</p>
                  <Button variant="dark" onClick={() => handleBuyNow(1, "laptop")}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Product 2 */}
            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Laptop2} alt="HP Pavilion x360" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>HP Pavilion x360</Card.Title>
                  <Card.Text>Touchscreen, 11th Gen i5, 512GB SSD, Windows 11</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹62,499</p>
                  <Button variant="dark" onClick={() => handleBuyNow(2, "laptop")}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Product 3 */}
            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Laptop3} alt="Asus VivoBook 14" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Asus VivoBook 14</Card.Title>
                  <Card.Text>Compact design, Ryzen 5, 8GB RAM, 512GB SSD</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹49,999</p>
                  <Button variant="dark" onClick={() => handleBuyNow(3, "laptop")}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Product 4 */}
            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Laptop4} alt="Apple MacBook Air M1" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>MacBook Air M1</Card.Title>
                  <Card.Text>Powerful M1 chip, 8GB RAM, 256GB SSD, 13.3" Retina</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹84,900</p>
                  <Button variant="dark" onClick={() => handleBuyNow(4, "laptop")}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Product 5 */}
            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Laptop5} alt="Lenovo IdeaPad Gaming 3" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>IdeaPad Gaming 3</Card.Title>
                  <Card.Text>15.6" FHD, Ryzen 5, RTX 3050, 16GB RAM</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹68,999</p>
                  <Button variant="dark" onClick={() => handleBuyNow(5, "laptop")}>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Product 6 */}
            <Col md={4}>
              <Card className="h-100 text-center">
                <div className="card-image-container">
                  <img src={Laptop6} alt="Acer Aspire 7" className="custom-card-img" />
                </div>
                <Card.Body>
                  <Card.Title>Acer Aspire 7</Card.Title>
                  <Card.Text>Ryzen 5 Hexa Core, GTX 1650, 8GB RAM, 512GB SSD</Card.Text>
                  <p className="fw-bold text-success mb-2">Price: ₹52,999</p>
                  <Button variant="dark" onClick={() => handleBuyNow(6, "laptop")}>Buy Now</Button>
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
