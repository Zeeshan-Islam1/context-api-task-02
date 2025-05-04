import React from "react";
import { useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Button } from "react-bootstrap";

import "./productDetail.css";

function TvDetails() {
  const { id } = useParams();

  const tvProductDetails = {
    1: {
      name: "Samsung Neo QLED",
      description:
        "Quantum Matrix Technology and ultra-fine light control for stunning clarity.",
      price: "₹1,29,999",
      image: "tv1.png",
    },
    2: {
      name: "LG C2 OLED",
      description:
        "Self-lit pixels, Dolby Vision IQ & webOS Smart features for top performance.",
      price: "₹1,05,000",
      image: "tv2.png",
    },
    3: {
      name: "Sony Bravia XR",
      description:
        "Cognitive Processor XR and Full Array LED for incredible contrast and realism.",
      price: "₹1,10,999",
      image: "tv3.png",
    },
    4: {
      name: "TCL 4K QLED",
      description:
        "Android TV with HDR10+ and Dolby Atmos for a cinematic experience.",
      price: "₹45,499",
      image: "tv4.png",
    },
    5: {
      name: "OnePlus Y1S Pro",
      description: "4K Ultra HD display, Gamma Engine, and bezel-less design.",
      price: "₹32,999",
      image: "tv5.png",
    },
    6: {
      name: "Mi TV 5X",
      description:
        "Premium metallic design, Vivid Picture Engine 2, and Dolby Audio.",
      price: "₹29,499",
      image: "tv6.png",
    },
  };

  const tvProduct = tvProductDetails[id];

  return (
    <div className="container py-4 text-center">
      <div className="product-details">
      <h1>Product Details</h1>
        <h2>{tvProduct?.name}</h2>
        <h5>{tvProduct?.description}</h5>
        <hr />
        <p>
          <strong>Price: {tvProduct?.price}</strong>
        </p>
        <img
          src={require(`./assets/${tvProduct?.image}`)}
          alt={tvProduct?.name}
        />
        <br />
        <div class = "Btn-container">
                <Button variant="dark">Add to Wishlist</Button>
                <Button variant="dark">Remove from Cart</Button>
                <Button variant="dark">Add to Cart</Button>
                    </div>
      </div>
      <a href="/tv" className="go-back">
        <RiArrowGoBackFill className="back-icon" /> Back to Home
      </a>
    </div>
  );
}

export default TvDetails;
