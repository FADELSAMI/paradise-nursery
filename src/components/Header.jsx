import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext"; // Importer le contexte du panier

const Header = () => {
  const { cart } = useCart(); // Récupérer les articles du panier

  // Calculer le nombre total d'articles dans le panier
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header
      className="header"
      style={{
        backgroundColor: "#28a745",
        padding: "10px 20px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Paradise Nursery</h1>
      <p>Bring nature into your home!</p>
      <Link to="/cart" className="cart">
        🛒 <span>{totalItems}</span> {/* Nombre d'articles dynamiquement mis à jour */}
      </Link>
    </header>
  );
};

export default Header;








