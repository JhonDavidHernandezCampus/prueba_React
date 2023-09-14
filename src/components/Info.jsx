import React from "react";
import './info.css';

export const Info = ({nombre, cantidad})=>{
    return <div className="padreInfo">
        <p>{nombre}</p>
        <h3><strong>{cantidad}</strong></h3>
    </div>
}