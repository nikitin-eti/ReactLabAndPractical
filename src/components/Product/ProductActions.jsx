import React from 'react';
import Button from '../atoms/Button/Button';

const ProductActions = ({ quantity, onIncrement, onDecrement, onInstall }) => {
  return (
    <div style={{ marginTop: '25px', borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ color: '#94a3b8', fontSize: '12px', fontFamily: 'monospace' }}>КІЛЬКІСТЬ_МОДУЛІВ:</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button 
            onClick={onDecrement}
            style={{ 
              backgroundColor: '#1e293b', 
              color: '#22d3ee', 
              border: '1px solid #22d3ee', 
              padding: '2px 10px', 
              cursor: 'pointer' 
            }}
          >
            -
          </button>
          <span style={{ color: '#fff', minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
          <button 
            onClick={onIncrement}
            style={{ 
              backgroundColor: '#1e293b', 
              color: '#10b981', 
              border: '1px solid #10b981', 
              padding: '2px 10px', 
              cursor: 'pointer' 
            }}
          >
            +
          </button>
        </div>
      </div>
      <Button onClick={onInstall}>ІНСТАЛЮВАТИ У СИСТЕМУ</Button>
    </div>
  );
};

export default ProductActions;
