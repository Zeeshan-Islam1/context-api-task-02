import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../components/Redux/cartSlice';
import { Button } from 'react-bootstrap';
import './cartPage.css';
import { MdDelete } from "react-icons/md";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.quantity * parseFloat(item.price.replace(/[₹,]/g, '')), 0)
      .toFixed(2);
  };

  const handleIncrease = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  return (
    <div className="cart-container">
      <h2>Your Carts</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={require(`../components/assets/${item.image}`)} alt={item.name} />
                <div className="item-details">
                  <h5>{item.name}</h5>
                  <p>{item.price}</p>
                  <div className="quantity-controls">
                    <Button variant="secondary" onClick={() => dispatch(removeFromCart(item.id))}>-</Button>
                    <span>{item.quantity}</span>
                    <Button variant="secondary" onClick={() => handleIncrease(item)}>+</Button>
                    <Button variant="danger" onClick={() => dispatch(deleteFromCart(item.id))}>
                      <MdDelete />
                    </Button>
                  </div>
                  <p><strong>Total: ₹{(item.quantity * parseFloat(item.price.replace(/[₹,]/g, ''))).toFixed(2)}</strong></p>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="total">
            <h4>All Items Total: ₹{calculateTotal()}</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
