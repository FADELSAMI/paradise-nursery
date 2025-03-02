import React from "react";
import { Link } from "react-router-dom"; // Pour les liens de navigation

const App = () => {
  return (
    <div 
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }} 
    >
      <h1 className="text-5xl font-bold text-white mb-4 shadow-lg">Paradise Nursery</h1>
      <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-3xl">
        <p className="text-xl text-white text-center">
          At <span className="font-semibold">Paradise Nursery</span>, we believe that every home deserves a touch of nature. 
          Our carefully selected indoor plants bring life, freshness, and serenity to any space. Whether you're looking for 
          air-purifying plants, elegant decorative greens, or easy-to-maintain succulents, we have something for every plant lover. 
          Let us help you create your own little paradise, one plant at a time!
        </p>
      </div>

      <Link to="/products">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition mt-6">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default App;





















