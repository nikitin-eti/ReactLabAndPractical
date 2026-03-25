import React from 'react';
import ProductContainer from '../components/Product/ProductContainer';

const EquipmentPage = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: '#22d3ee', textTransform: 'uppercase', marginBottom: '30px', textShadow: '0 0 10px #22d3ee' }}>
        АРСЕНАЛ_ТА_ЕКІПІРУВАННЯ
      </h2>
      <ProductContainer />
    </div>
  );
};

export default EquipmentPage;
