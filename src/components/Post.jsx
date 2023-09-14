import React from "react";
import './post.css';
import { Info } from "./Info";
import { VerTodo } from "./VerTodo";

export const Post = () => {
    return <>
        <div className="padrePost">
            <div className="postPadre">
                <div className="postInfo">
                    <Info nombre="Libreria" cantidad='124' />
                    <Info nombre="Libreria" cantidad='124' />
                    <Info nombre="Libreria" cantidad='124' />
                    <Info nombre="Libreria" cantidad='124' />
                </div>
                <div className="postAutores">

                </div>
            </div>
            <div className="postResiente">

            </div>
        </div>
    </>
}