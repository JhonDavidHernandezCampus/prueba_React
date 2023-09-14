import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Post } from './components/Post';
import { Ultimo } from './components/Ultimo';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className='contenedor'>
      <div className='bloqueIzquierda'>
        <Search />
        <Header />
        <Post />
        <Header tipo={true}  />

      </div>

      <div className='bloqueDerecha'>
        <Ultimo/>
      </div>

    </div>
  </React.StrictMode>
);
