import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/">
        <button className="button">Produtos</button>
      </Link>
      <Link to="contato">
        <button className="button">Contato</button>
      </Link>
    </>
  );
};

export default Header;
