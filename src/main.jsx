import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; // Importer CartProvider
import LandingPage from "./App";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage"; // Importer la page du panier
import "./index.css";

// Envelopper le Router avec CartProvider pour rendre le contexte accessible dans toute l'application
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider> {/* Envelopper ici avec CartProvider */}
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product-detail/:plantName" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} /> {/* Nouvelle route du panier */}
      </Routes>
    </Router>
  </CartProvider>
);


