import React from "react";
import './header.css';
import img1 from "../img/Captura desde 2023-09-14 16-18-26.png";
import img2 from "./../img/lectura.jpg"

export const Header = ({ tipo = false }) => {
    return (!tipo) ? <div className="padre">
        <div className="nuevoLibro">
            <h2 className="tituloHeader">Hola, Andres, ¿Estas inspirado hoy?</h2>
            <p>Vuelte tu libro una tendenca mundial</p>
            <p>Quieres empezar a escribir una vez mas?</p>
            <button className="btnCrearLibro"> Crear Borrador <span className="btnMas"> + </span></button>
        </div>
        <div className="headerImg">
            <img src={img2} alt="" />
        </div>
    </div> : <div className="padreF">
        <div className="mensaje">
            <h1 className="tituloHeader">Andres la Verdad no se mucho de React pero suelo aprender Rapido</h1>
            <ol className="lista">
                <li>listas de ejemplo</li>
                <li>listas de ejemplo</li>
                <li>listas de ejemplo</li>
            </ol>
        </div>
        <div >
            <img className="imgDiv" src={img1} alt="" />
        </div>
    </div>
}