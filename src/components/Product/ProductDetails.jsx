import React from 'react';
import StarRating from './StarRating';

const ProductDetails = ({ name, description, price, specs, reliability, image }) => {
  return (
    <div style={{ color: '#e2e8f0', fontFamily: 'monospace' }}>
      <div style={{ 
        width: '100%', 
        height: '200px', 
        backgroundColor: '#030617', 
        border: '1px solid #22d3ee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          color: '#22d3ee', 
          fontSize: '40px', 
          opacity: 0.3,
          animation: 'pulse 2s infinite alternate'
        }}>
          [HOLOGRAM]
        </div>
        <img 
          src={image} 
          alt={name} 
          style={{ position: 'absolute', maxWidth: '80%', maxHeight: '80%', filter: 'drop-shadow(0 0 10px #22d3ee)' }} 
        />
      </div>
      <h2 style={{ color: '#22d3ee', margin: '0 0 10px 0', textTransform: 'uppercase' }}>{name}</h2>
      <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '15px' }}>{description}</p>
      
      <div style={{ marginBottom: '15px' }}>
        <h4 style={{ color: '#0ea5e9', fontSize: '10px', marginBottom: '5px' }}>СПЕЦИФІКАЦІЇ:</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '11px' }}>
          {specs.map((s, i) => <li key={i}>- {s}</li>)}
        </ul>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '10px', color: '#64748b' }}>НАДІЙНІСТЬ:</span>
          <StarRating rating={reliability} />
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '10px', color: '#64748b' }}>ВАРТІСТЬ:</div>
          <div style={{ color: '#22d3ee', fontSize: '20px', fontWeight: 'bold' }}>{price} CR</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
