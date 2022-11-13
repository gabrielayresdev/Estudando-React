import React from 'react';

const Button = ({ produto, setProduto, setCarregando }) => {
  async function handleClick(produto) {
    setCarregando(true);
    const requisicao = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const requisicaoJSON = await requisicao.json();

    setProduto(requisicaoJSON);
    setCarregando(false);
  }

  return (
    <button style={{ margin: '.5rem' }} onClick={() => handleClick(produto)}>
      {produto}
    </button>
  );
};

export default Button;
