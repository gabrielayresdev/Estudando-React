import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Produtos from './Produtos';
import Contato from './Contato';
import styles from './App.module.css';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
  console.log(styles);
  return (
    <BrowserRouter>
      <div className={styles.body}>
        <div className={styles.container}>
          <Header />
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
//rafce
