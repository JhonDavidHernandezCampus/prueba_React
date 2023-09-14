import React from "react";
import './header.css';

export const Header = () => {
    return <div className="padre">
            <div className="nuevoLibro">
                <h2>Hola, Andres, ¿Estas inspirado hoy?</h2>
                <p>Vuelte tu libro una tendenca mundial</p>
                <p>Quieres empezar a escribir una vez mas?</p>
                <button  className="btnCrearLibro"> Crear Borrador <span className="btnMas"> + </span></button>
            </div>
            <div className="headerImg">
                <img src="https://png.pngtree.com/png-clipart/20210912/original/pngtree-stack-of-books-png-image_6712581.jpg" alt="" />
            </div>
    </div>
}