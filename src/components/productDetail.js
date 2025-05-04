import React from "react";
import { useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Button } from "react-bootstrap";

import  "./productDetail.css";
function ProductDetailPage() {
  const { id } = useParams();

  const productDetails = {
    1: { name: "Dell Inspiron 15", description: "15.6\" FHD, Intel i5 12th Gen, 8GB RAM, 512GB SSD", price: "₹57,999", image: "laptop7.png" },
    2: { name: "HP Pavilion x360", description: "Touchscreen, 11th Gen i5, 512GB SSD, Windows 11", price: "₹62,499", image: "laptop2.png" },
    3: { name: "Asus VivoBook 14", description: "Compact design, Ryzen 5, 8GB RAM, 512GB SSD", price: "₹49,999", image: "laptop3.png" },
    4: { name: "MacBook Air M1", description: "Powerful M1 chip, 8GB RAM, 256GB SSD, 13.3\" Retina", price: "₹84,900", image: "laptop4.png" },
    5: { name: "Lenovo IdeaPad Gaming 3", description: "15.6\" FHD, Ryzen 5, RTX 3050, 16GB RAM", price: "₹68,999", image: "laptop5.png" },
    6: { name: "Acer Aspire 7", description: "Ryzen 5 Hexa Core, GTX 1650, 8GB RAM, 512GB SSD", price: "₹52,999", image: "laptop6.png" },
   

  };

  const product = productDetails[id];

  return (
    <div className="container  py-4 text-center">
      <div className="product-details">
      <h1>Product Details</h1>
        <h2>{product?.name}</h2>
        <h5>{product?.description}</h5>
        < hr/>
        <p><strong>Price: {product?.price}</strong></p>
        <img src={require(`./assets/${product?.image}`)} alt={product?.name} />
        < br/>
        

       <div class = "Btn-container">
               <Button variant="dark">Add to Wishlist</Button>
               <Button variant="dark">Remove from Cart</Button>
               <Button variant="dark">Add to Cart</Button>
                   </div>
      </div>
         <a href="/laptops" className="go-back">
            <RiArrowGoBackFill className="back-icon" /> Back to Home
          </a>

    </div>

  );
}

export default ProductDetailPage;
