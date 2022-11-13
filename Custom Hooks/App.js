import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  function handdleClick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response);
      console.log(json);
    }
    fetchData();
  }, [request]);

  if (error) {
    return <p>{error}</p>;
  }
  if (loading) {
    return <p>Carregando...</p>;
  }
  if (data) {
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button style={{ marginRight: '.5rem' }} onClick={handdleClick}>
          notebook
        </button>
        <button style={{ marginBotttom: '.5rem' }} onClick={handdleClick}>
          smartphone
        </button>

        <div>
          <ul>
            {data.map((produto) => (
              <li key={produto.id}>{produto.nome}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default App;
//rafce
