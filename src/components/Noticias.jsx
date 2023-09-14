import React from "react";
import './noticias.css';

export const Noticias = ({titulo="titulo",descrip = "una corta descripcion",img="",imgPer = "",nombre="Nombre",fecha=""})=>{
    return <>
        <div className="padreNoticias">
            <img className="imgFoto" src={img} alt="" />
            <div className="NotiInfo">
                <h4>{titulo}</h4>
                <p>{descrip}</p>
            </div>
            <div className="infoPerso">
                <div>
                    <img className="imgPersona" src={imgPer} alt="" />
                </div>
                <div>
                    <h5><strong>{nombre}</strong></h5>
                    <p>{fecha}</p>
                </div>
            </div>
        </div>
    </>
}