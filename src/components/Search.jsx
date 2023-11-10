import './search.css';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import imgMenu  from './../img/menu.png';

// import {AiOutlineSearch} from 'react-icons/ai';


export const Search = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <>

        <div className='padreSearch'>
            <div className="menuResponsing">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <img src={imgMenu} className='imgMenu' alt="" />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Inicio</MenuItem>
                    <MenuItem onClick={handleClose}>Libros</MenuItem>
                    <MenuItem onClick={handleClose}>Editores</MenuItem>
                    <MenuItem onClick={handleClose}>Lectores</MenuItem>
                </Menu>
            </div>
            <input className='inputSearch' type="text" placeholder='Buscar por libros' />
            <div className="PerfilResponsig">
                <h4>Andres </h4>
                <img className="imgPerfil" src="https://media.licdn.com/dms/image/C4E03AQFQzDUc1GCeVQ/profile-displayphoto-shrink_800_800/0/1623815241928?e=2147483647&v=beta&t=mV0LpDNPPcMvvLVjgIBSqgUj5epwUl5P9KZEI_FVAVg" alt="" />
            </div>
        </div>
    </>
}