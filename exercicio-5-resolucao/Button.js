import React from 'react';

const Button = ({ nome, setPreferido }) => {
  return (
    <button style={{ margin: '.5rem' }} onClick={() => setPreferido(nome)}>
      {nome}
    </button>
  );
};

export default Button;
