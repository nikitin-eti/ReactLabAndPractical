import React from 'react';
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, label, value, onChange, name, disabled }) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
