import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

function App() {
  const dados = luana;

  return (
    <div>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={dados.ativa ? { color: 'green' } : { color: 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total gasto: {somaPrecos(dados.compras)}</p>
      <p>
        {somaPrecos(dados.compras) > 10000 ? (
          <p>Você está comprando muito</p>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
}

function somaPrecos(valores) {
  var soma = 0;
  valores.map((produto) => {
    soma += Number(produto.preco.slice(3));
  });
  return soma;
}

export default App;
