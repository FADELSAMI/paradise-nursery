import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import Header from "../components/Header";
import "./ProduitDetail.css";

const ProductDetail = () => {
  const { plantName } = useParams();
  const { addToCart, removeFromCart, cart } = useCart(); // Ajout de removeFromCart
  const navigate = useNavigate();

  const plants = [
    { name: "Ficus", image: "/ficus.jpeg", price: 20, description: "A beautiful indoor plant." },
    { name: "Monstera", image: "/monstera.jpeg", price: 25, description: "Great for air purification." },
    { name: "Cactus", image: "/cactus.jpeg", price: 15, description: "Thorny but beautiful!" },
    { name: "Aloe", image: "/aloe.jpeg", price: 18, description: "A succulent plant with healing properties." },
    { name: "Areca", image: "/areca.jpeg", price: 22, description: "A palm plant perfect for indoor spaces." },
    { name: "Lavande", image: "/lavande.jpeg", price: 12, description: "Known for its calming scent." }
  ];

  const plant = plants.find(p => p.name === plantName);
  if (!plant) {
    return <div>Plante non trouvée</div>;
  }

  const [quantity, setQuantity] = useState(1);

  const isInCart = cart.some(item => item.name === plant.name);

  const handleAddToCart = () => {
    addToCart({ ...plant, quantity });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(plant.name);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />

      <div className="product-detail">
        <img src={plant.image} alt={plant.name} className="product-detail-image" />
        <h2>{plant.name}</h2>
        <p>{plant.description}</p>
        <p>Price: {plant.price} €</p>

        <div className="quantity-controls">
          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        {!isInCart ? (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : (
          <button className="remove-from-cart-btn" onClick={handleRemoveFromCart}>
            Delete from cart
          </button>
        )}

        <button onClick={handleGoToCart}>Go to my cart page</button>
      </div>
    </>
  );
};

export default ProductDetail;















