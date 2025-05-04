import React from "react";
import { useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Button } from "react-bootstrap";

import  "./productDetail.css";
function MobileDetails() {
  const { id } = useParams();

  const mobileDetails = {
    1: {
      name: "iPhone 12 Pro",
      description:
        "Experience premium performance with the iPhone 12 Pro's A14 Bionic chip and stunning camera.",
      price: "₹89,999",
      image: "12pro2.png",
    },
    2: {
      name: "Tecno Spark",
      description:
        "Affordable and stylish, the Tecno Spark delivers great battery life and performance for its price.",
      price: "₹7,499",
      image: "techno.png",
    },
    3: {
      name: "Samsung Galaxy",
      description:
        "The latest Galaxy device with AMOLED display and powerful processing for smooth multitasking.",
      price: "₹29,999",
      image: "galaxy.png",
    },
    4: {
      name: "Xiaomi Mi 11",
      description:
        "Flagship specs at midrange pricing – Xiaomi Mi 11 offers top-tier performance and sleek design.",
      price: "₹39,499",
      image: "Xiaom3.png",
    },
    5: {
      name: "Redmi Note",
      description:
        "A fan favorite with reliable performance, big battery, and a value-for-money experience.",
      price: "₹15,999",
      image: "redmi.png",
    },
    6: {
      name: "iPhone XR",
      description:
        "Colorful design meets performance – iPhone XR is perfect for everyday use with iOS features.",
      price: "₹47,999",
      image: "XR.png",
    },
  };

  const mobile = mobileDetails[id];
  return (
    <div className="container py-4 text-center">
      <div className="product-details">
      <h1>Mobile Details</h1>
        <h2>{mobile?.name}</h2>
        <h5>{mobile?.description}</h5>
        <hr />
        <p>
          <strong>Price: {mobile?.price}</strong>
        </p>
        <img src={require(`./assets/${mobile?.image}`)} alt={mobile?.name} />
        <br />
   <div class = "Btn-container">
           <Button variant="dark">Add to Wishlist</Button>
           <Button variant="dark">Remove from Cart</Button>
           <Button variant="dark">Add to Cart</Button>
               </div>
      </div>
      <a href="/shop" className="go-back">
        <RiArrowGoBackFill className="back-icon" /> Back to Home
      </a>
    </div>
  );
}

export default MobileDetails;
