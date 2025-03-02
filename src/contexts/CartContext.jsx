import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Ajouter au panier
  const addToCart = (plant) => {
    const existingPlant = cart.find(item => item.name === plant.name);
    if (existingPlant) {
      // Si la plante existe déjà, on incrémente la quantité
      const updatedCart = cart.map(item =>
        item.name === plant.name ? { ...item, quantity: item.quantity + plant.quantity } : item
      );
      setCart(updatedCart);
    } else {
      // Sinon, on l'ajoute avec la quantité spécifiée
      setCart([...cart, plant]);
    }
  };

  // Supprimer du panier
  const removeFromCart = (plantName) => {
    const updatedCart = cart.filter(item => item.name !== plantName);
    setCart(updatedCart);
  };

  // Mettre à jour la quantité d'un article dans le panier
  const updateCartQuantity = (plantName, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === plantName ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);





