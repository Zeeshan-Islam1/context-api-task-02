import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Laptop1 from "./assets/laptop1.jpg";

function ProductPage() {
  const navigate = useNavigate();

  const handleBuyNow = (id) => {
    // Redirect to the product detail page with the product ID
    navigate(`/product/${id}`);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Shop Page</h1>
      <Row className="g-4 justify-content-center">
        <Col md={4}>
          <Card className="h-100 text-center">
            <div className="card-image-container">
              <img src={Laptop1} alt="Laptop 1" className="custom-card-img" />
            </div>
            <Card.Body>
              <Card.Title>Laptop 1</Card.Title>
              <Card.Text>
                Powerful laptop with great performance for all your tasks.
              </Card.Text>
              <Button variant="dark" onClick={() => handleBuyNow(1)}>
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductPage;
