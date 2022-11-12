import React from 'react';
import Button from './Button';
import Produto from './Produto';

const App = () => {
  const [preferido, setPreferido] = React.useState(null);
  const [produto, setProduto] = React.useState(null);

  async function requisitaProduto(nome) {
    const requisicao = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${nome}`,
    );
    const json = await requisicao.json();

    setProduto({ nome: json.nome, preco: json.preco });
  }

  React.useEffect(() => {
    if (preferido) {
      localStorage.setItem('preferido', preferido);
      requisitaProduto(preferido);
    }
  }, [preferido]);

  React.useEffect(() => {
    const item = localStorage.getItem('preferido');
    if (item) {
      requisitaProduto(item);
      setPreferido(item);
    }
  }, []);

  return (
    <>
      <h1>Preferência: {preferido ? preferido : ''}</h1>
      <Button nome="notebook" setPreferido={setPreferido} />
      <Button nome="smartphone" setPreferido={setPreferido} />

      {produto && <Produto nome={produto.nome} preco={produto.preco} />}
    </>
  );
};

export default App;
//rafce
