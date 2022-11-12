import React from 'react';

const Produto = ({ nome, preco }) => {
  return (
    <section>
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
    </section>
  );
};

export default Produto;
