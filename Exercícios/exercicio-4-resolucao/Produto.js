import React from 'react';

const Produto = ({ produto }) => {
  if (produto != null)
    return (
      <div>
        <h1>{produto.nome}</h1>
        <p>R$ {produto.preco}</p>
        <img src={produto.fotos[0].src} alt="Foto do produto" />
      </div>
    );
  else {
    return null;
  }
};

export default Produto;
