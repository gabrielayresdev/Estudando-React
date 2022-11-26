import React from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState(null);

  async function buscaProduto() {
    const resposta = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
    );
    const json = await resposta.json();

    console.log(json);
    setProduto(json);
  }

  React.useEffect(() => {
    buscaProduto();
  }, []);

  if (!produto) return null;
  return (
    <div className="produto">
      <div className="fotosDoProduto">
        {produto.fotos.map((foto) => (
          <img className="fotoDeCapa" src={foto.src} alt="Foto do produto" />
        ))}
      </div>
      <div className="informacoesDoProduto">
        <h1 className="produtoTitulo">{produto.nome}</h1>
        <p className="produtoPreco">R$ {produto.preco}</p>
        <p className="produtoDescricao">{produto.descricao}</p>
      </div>
    </div>
  );
};

export default Produto;
