import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>CYBER_NET [v4.0.1]</div>
        <nav className={styles.nav}>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            {({ isActive }) => <>{isActive && '> '}ГОЛОВНА</>}
          </NavLink>
          <NavLink 
            to="/feed" 
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            {({ isActive }) => <>{isActive && '> '}ЛОГИ_МЕРЕЖІ</>}
          </NavLink>
          <NavLink 
            to="/students" 
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            {({ isActive }) => <>{isActive && '> '}КЕРУВАННЯ_КАДЕТАМИ</>}
          </NavLink>
          <NavLink 
            to="/equipment" 
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            {({ isActive }) => <>{isActive && '> '}ЕКІПІРУВАННЯ</>}
          </NavLink>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            {({ isActive }) => <>{isActive && '> '}ПРОФІЛЬ</>}
          </NavLink>
        </nav>
      </header>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.statusLine}>СИСТЕМА: СТАБІЛЬНО | ЛОКАЦІЯ: КІБЕР-ПРОСТІР</div>
      </footer>
    </div>
  );
};

export default MainLayout;
