import './search.css';
import React from 'react';
// import {AiOutlineSearch} from 'react-icons/ai';


export const Search = ()=>{
    return <>
        <div className='padreSearch'>
            <input className='inputSearch' type="text" placeholder='Buscar por libros'  />
        </div>
    </>
}