import React from "react";
import './info.css';

export const Info = ({nombre, cantidad})=>{
    return <div className="padreInfo">
        <p>{nombre}</p>
        <h1>{cantidad}  </h1>
    </div>
}