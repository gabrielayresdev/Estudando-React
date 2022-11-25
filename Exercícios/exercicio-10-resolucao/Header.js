import React from 'react';
import styles from './App.module.css';

const Header = () => {
  return (
    <header>
      <button className={styles.button}>Produtos</button>
      <button className={styles.button}>Contato</button>
    </header>
  );
};

export default Header;
