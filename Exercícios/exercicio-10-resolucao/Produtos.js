import React from 'react';
import Head from './Head';
import styles from './App.module.css';

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
  buscaProdutos();
  return (
    <>
      <Head title={'Home'} />

      <div className={styles.produtos}>
        {produtos
          ? produtos.map((produto) => (
              <div>
                <img src={produto.fotos[0].src} className={styles.fotoDeCapa} />
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Produtos;
