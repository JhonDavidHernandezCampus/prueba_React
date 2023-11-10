import React from "react";
import './sidebar.css';
import imgLibro from './img/libros.png';



export const Sidebar = () => {
    return <>
        <div className="container">
            <div className="libro">
                <img src={imgLibro} alt="" className="imgLibro" />
            </div>
            <div className="listaMenu">
            <a href="https://www.buscalibre.com.co/libros">
                Inicio
            </a>
            <a href="https://www.buscalibre.com.co/libros">
                Libros
            </a>
            <a href="https://www.buscalibre.com.co/libros">
               Editores
            </a>
            <a href="https://www.buscalibre.com.co/libros">
               Lectores
            </a>
            </div>
            <div className="contendbtn">
                <button className="btnCrear"> Crear <span className="btnMas"> + </span></button>
            </div>
        </div>
    </>
}