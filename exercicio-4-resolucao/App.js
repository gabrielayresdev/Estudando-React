import React from 'react';
import Button from './Button';
import Produto from './Produto';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  return (
    <>
      <section>
        <Button
          produto="notebook"
          setProduto={setProduto}
          setCarregando={setCarregando}
        />
        <Button
          produto="smartphone"
          setProduto={setProduto}
          setCarregando={setCarregando}
        />
        <Button
          produto="tablet"
          setProduto={setProduto}
          setCarregando={setCarregando}
        />
      </section>
      <section>
        {carregando && <p>Carregando...</p>}
        <Produto produto={produto} />
      </section>
    </>
  );
};

export default App;
//rafce
