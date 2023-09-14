import React from "react";
import './verTodo.css';

export const VerTodo = ({ titulo = 'Personajes' }) => {
    return <>
        <div className="verTodoPadre" >
            <div className="verTodoConten">
                <h1 className="titulo">{titulo}</h1>
                <button className="btnVerTodo">Ver Todo</button>
            </div>
        </div>
    </>
}