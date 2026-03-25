import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="СКАНИ_МЕРЕЖІ: Пошук даних..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.glowLine}></div>
    </div>
  );
};

export default SearchBar;
