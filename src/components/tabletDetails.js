import React from "react";
import { useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Button } from "react-bootstrap";

import  "./productDetail.css";
function TabletDetails() {
    const {id} = useParams();

     const tabletProductDetails = {
    1: {
      name: "Galaxy Tab A8",
      description: "Entertainment-ready tablet with immersive display and Dolby Atmos audio.",
      price: "₹15,999",
      image: "tablet2.png"
    },
    2: {
      name: "iPad 9th Gen",
      description: "A powerful iPad with A13 Bionic chip and Retina display.",
      price: "₹29,999",
      image: "tablet3.png"
    },
    3: {
      name: "Lenovo Tab M10",
      description: "Compact and efficient tablet for casual use and browsing.",
      price: "₹12,499",
      image: "tablet4.png"
    },
    4: {
      name: "Realme Pad",
      description: "Ultra-slim tablet with long battery life and immersive display.",
      price: "₹13,999",
      image: "tablet5.png"
    },
    5: {
      name: "Microsoft Surface Go 3",
      description: "Portable 2-in-1 with Windows 11 and touchscreen experience.",
      price: "₹42,999",
      image: "tablet6.png"
    },
    6: {
      name: "Xiaomi Pad 6",
      description: "Performance-focused tablet with Snapdragon chipset and 120Hz display.",
      price: "₹26,999",
      image: "tablet1.png"
    }
  };

  const Tablets = tabletProductDetails[id];

  return (
    <div className="container  py-4 text-center">
      <div className="product-details">
      <h1>Product Details</h1>
        <h2>{Tablets?.name}</h2>
        <h5>{Tablets?.description}</h5>
        < hr/>
        <p><strong>Price: {Tablets?.price}</strong></p>
        <img src={require(`./assets/${Tablets?.image}`)} alt={Tablets?.name} />
        < br/>
      
            <div class = "Btn-container">
        <Button variant="dark">Add to Wishlist</Button>
        <Button variant="dark">Remove from Cart</Button>
        <Button variant="dark">Add to Cart</Button>
            </div>
      </div>
         <a href="/tablet" className="go-back">
            <RiArrowGoBackFill className="back-icon" /> Back to Home
          </a>

    </div>

  );
}

export default TabletDetails;
