import React from "react";
import { VerTodo } from "./VerTodo";
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import { Noticias } from "./Noticias";
import './ultimo.css';

export const Ultimo = () => {
    return <>
        <div className="datos">
            <div>
                <AiOutlineMail size={30} />
                <IoIosNotifications size={30} />
            </div>
            <div className="Perfil">
                <h4>Andres </h4>
                <img className="imgPerfil" src="https://media.licdn.com/dms/image/C4E03AQFQzDUc1GCeVQ/profile-displayphoto-shrink_800_800/0/1623815241928?e=2147483647&v=beta&t=mV0LpDNPPcMvvLVjgIBSqgUj5epwUl5P9KZEI_FVAVg" alt="" />
            </div>
        </div>
        <div className="contenNoticias">
            <VerTodo/>
            <Noticias 
                titulo="La Ciudadela"
                descrip="Descubre las maravillas escondidas en los bosques de Estados Unidos"
                img="https://concepto.de/wp-content/uploads/2019/02/bosque-de-coniferas-1-e1550494832285.jpg"
                imgPer="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                nombre="Camilo Estrada"
                fecha="12 Nov, 2023"
            />
            <Noticias 
                titulo="La Ciudadela"
                descrip="Descubre las maravillas escondidas en los bosques de Estados Unidos"
                img="https://concepto.de/wp-content/uploads/2019/02/bosque-de-coniferas-1-e1550494832285.jpg"
                imgPer="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                nombre="Camilo Estrada"
                fecha="12 Nov, 2023"
            />
        </div>
    </>
}