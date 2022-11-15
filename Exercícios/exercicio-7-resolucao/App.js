import React, { useState } from 'react';

const App = () => {
  const [promessa, setPromessa] = useState(null);
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  /*   async function requisicao() {
    const resultado = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // form é o objeto com os dados do formulário
        body: JSON.stringify(form),
      },
    );

    setPromessa(resultado);
  } */

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setPromessa(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form>
      <label htmlFor="nome">Nome: : </label>
      <input
        type="text"
        id="nome"
        value={form.nome}
        onChange={handleChange}
        placeholder="José"
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha: </label>
      <input
        type="password"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">Cep: </label>
      <input
        type="text"
        id="cep"
        value={form.cep}
        onChange={handleChange}
        placeholder="25515180"
      />
      <label htmlFor="rua">Rua: </label>
      <input
        type="text"
        id="rua"
        value={form.rua}
        onChange={handleChange}
        placeholder="Rua flores"
      />
      <label htmlFor="numero">Número: </label>
      <input
        type="text"
        id="numero"
        value={form.numero}
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro: </label>
      <input
        type="text"
        id="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade: </label>
      <input
        type="text"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        value={form.estado}
        onChange={handleChange}
      />
      {promessa && promessa.ok && <p>Usuário Criado</p>}
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
};

export default App;
//rafce
