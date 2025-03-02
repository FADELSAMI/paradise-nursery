import React from "react";
import { Link } from "react-router-dom"; // Pour la navigation
import Header from "../components/Header"; // Assure-toi du bon chemin

const ProductPage = () => {
  // Définir les plantes par catégorie
  const categories = [
    {
      title: "Air Purifying Plants", // Plantes purificatrices d'air
      products: [
        { name: "Ficus", image: "/ficus.jpeg", price: 20 },
        { name: "Monstera", image: "/monstera.jpeg", price: 25 },
      ],
    },
    {
      title: "Aromatic Plants", // Plantes aromatiques
      products: [
        { name: "Lavande", image: "/lavande.jpeg", price: 12 },
        { name: "Aloe", image: "/aloe.jpeg", price: 18 },
      ],
    },
    {
      title: "Succulents", // Plantes succulentes
      products: [
        { name: "Cactus", image: "/cactus.jpeg", price: 15 },
        { name: "Areca", image: "/areca.jpeg", price: 22 },
      ],
    },
  ];

  return (
    <>
      <Header cartCount={0} /> {/* L'en-tête reste ici */}

      <div className="product-container">
        {categories.map((category) => (
          <div key={category.title} className="category-section">
            <h2 className="category-title">{category.title}</h2>
            <div className="product-list">
              {category.products.map((product) => (
                <div key={product.name} className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">{product.price} €</p>
                  <Link to={`/product-detail/${product.name}`}>
                    <button className="add-to-cart-btn">View Details</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;




