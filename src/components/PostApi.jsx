import React, { useEffect, useState } from "react";
import './postApi.css';

export const PostApi = () => {
    const [datosApi, setDatosApi] = useState([]);

    useEffect(() => {
        const peticiones = async () => {
            let datosApi = await (await fetch(`https://rickandmortyapi.com/api/character/[1,2,3]`)).json();
            setDatosApi(datosApi);
        }
        peticiones();
    }, []);
    console.log(datosApi);
    //console.log(datosApi,"fuera");

    return <>
        <div className="padreApi">
            {datosApi.map((element) => (
                <div>
                    <hr />
                    <div className="personaje">
                        <img className="imgPersonaje" src={element.image} alt="" />
                        <h4>{element.name}</h4>
                        <p>Especie:{element.species}</p>
                    </div>
                </div>
            ))}
        </div>
    </>

}
