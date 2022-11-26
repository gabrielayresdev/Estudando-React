import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  async function buscaProdutos() {
    const resposta = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto',
    );
    const json = await resposta.json();

    console.log(json);
    setProdutos(json);
  }
  React.useEffect(() => {
    buscaProdutos();
  }, []);

  if (!produtos) return null;
  return (
    <div className="produtos">
      {produtos.map((produto) => (
        <Link to={produto.id}>
          <img
            src={produto.fotos[0].src}
            className="fotoDeCapa"
            alt="Foto do produto"
          />
        </Link>
      ))}
    </div>
  );
};

export default Produtos;
