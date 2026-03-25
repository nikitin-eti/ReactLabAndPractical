import React from 'react';
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, label }) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input type={type} placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Input;
