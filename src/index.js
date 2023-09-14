import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Search } from './components/Search';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='contenedor'>

      <div className='bloqueIzquierda'>
        <Search />
        <Header />
      </div>

      <div className='bloqueDerecha'>
        aqui debe ir algo
      </div>

    </div>
  </React.StrictMode>
);
