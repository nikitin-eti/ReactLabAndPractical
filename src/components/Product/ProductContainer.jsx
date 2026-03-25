import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import ProductActions from './ProductActions';

const ProductContainer = () => {
  const [quantity, setQuantity] = useState(1);
  
  const productData = {
    name: "Нейроімплант X-99 'Sandevistan'",
    description: "Бойовий хроно-пристрій для розширення когнітивних можливостей та прискорення реакції.",
    price: 4500,
    reliability: 4,
    specs: [
      "Затримка: 0.02мс",
      "Ресурс: 2500 циклів",
      "Тип: Нейронна мережа"
    ],
    image: "https://api.placeholder.com/150/22d3ee/ffffff?text=X-99"
  };

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleInstall = () => {
    alert(`Система: Інсталяція ${quantity} модулів ${productData.name} розпочата...`);
  };

  return (
    <div style={{ 
      backgroundColor: '#0f172a', 
      border: '1px dashed #22d3ee', 
      padding: '30px', 
      width: '100%', 
      maxWidth: '400px',
      boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)'
    }}>
      <ProductDetails {...productData} />
      <ProductActions 
        quantity={quantity} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement}
        onInstall={handleInstall}
      />
    </div>
  );
};

export default ProductContainer;
