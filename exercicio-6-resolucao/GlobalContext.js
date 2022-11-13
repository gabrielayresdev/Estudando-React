import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  async function requisitaProduto() {
    const requisicao = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto',
    );
    const json = await requisicao.json();
    setProduto(json);
  }

  React.useEffect(() => {
    requisitaProduto();
  }, []);

  function limpaProduto() {
    setProduto(null);
  }

  return (
    <GlobalContext.Provider value={{ produto, setProduto, limpaProduto }}>
      {children}
    </GlobalContext.Provider>
  );
};
