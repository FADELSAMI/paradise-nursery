import React from "react";
import { Link } from "react-router-dom"; // pour naviguer vers la page des produits

const PageDestination = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: 'url("/background-image.jpg")', backgroundSize: 'cover', height: '100vh', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Bienvenue chez Paradise Nursery</h1>
      <p>Découvrez une variété de plantes d'intérieur pour embellir votre maison.</p>
      <Link to="/product-page">
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
          Commencer
        </button>
      </Link>
    </div>
  );
};

export default PageDestination;
