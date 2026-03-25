import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = ({ name, email, role }) => {
  return (
    <div className={styles.dossierCard}>
      <div className={styles.header}>
        <div className={styles.icon}>⌬</div>
        <h3 className={styles.title}>ДОСЬЄ_ОПЕРАТИВНИКА</h3>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>ІМ’Я:</span>
        <span className={styles.value}>{name || 'ДАНІ_ВІДСУТНІ'}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>МЕРЕЖЕВА_АДРЕСА:</span>
        <span className={styles.value}>{email}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>СТАТУС:</span>
        <span className={styles.roleValue}>{role}</span>
      </div>
    </div>
  );
};

export default UserInfo;
