import React from 'react';
import { GlobalContext } from './GlobalContext';

const Titulo = () => {
  const dados = React.useContext(GlobalContext);

  return (
    <>
      <ul>
        {dados.produto &&
          dados.produto.map((item) => <li key={item.id}>{item.nome}</li>)}
      </ul>
    </>
  );
};

export default Titulo;
