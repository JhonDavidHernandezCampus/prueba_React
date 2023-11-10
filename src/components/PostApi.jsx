import React, { useEffect, useState } from "react";
import './postApi.css';

export const PostApi = () => {
    const [datosApi, setDatosApi] = useState([]);

    useEffect(() => {
        const peticiones = async () => {
            let datosApi = await (await fetch(`https://rickandmortyapi.com/api/character/[1,4,230]`)).json();
            setDatosApi(datosApi);
        }
        peticiones();
    }, []);

    return <>
        <div className="padreApi">
            {datosApi.map((element,index) => (
                <div key={element.id}>
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
