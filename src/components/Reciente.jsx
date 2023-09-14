import React from "react";
import './reciente.css';
export const Reciente = ({ nombre = 'nombre', informacion = 'informacion', fecha = 'may 17' }) => {
    return <>
        <div className="padreReiente">
            <p className="info"><strong>{nombre}</strong>{informacion}</p>
            <p>{fecha}</p>
        </div>
        <hr />
    </>
}