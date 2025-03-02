import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity } = useCart();
  const navigate = useNavigate();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-page">
      {/* En-tête */}
      <Header cartCount={cartCount} />

      <h2>🛒 Your cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.name} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>Price: {item.price} € x {item.quantity}</p>
              </div>
              {/* Ajout des boutons de quantité */}
              <div className="quantity-controls">
                <button onClick={() => updateCartQuantity(item.name, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateCartQuantity(item.name, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Delete</button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Pay
        </button>
      )}
    </div>
  );
};

export default CartPage;




