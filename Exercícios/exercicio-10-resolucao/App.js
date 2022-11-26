import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Produto from './Produto';
import Produtos from './Produtos';
import Contato from './Contato';

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Produtos />} />
              <Route path="/:id" element={<Produto />} />
              <Route path="contato" element={<Contato />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
