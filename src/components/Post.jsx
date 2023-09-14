import React from "react";
import './post.css';
import { Info } from "./Info";
import { VerTodo } from "./VerTodo";
import { PostApi } from "./PostApi";

export const Post = () => {
    return <>
        <div className="padrePost">
            <div className="postPadre">
                <div className="postInfo">
                    <Info nombre="Libreria" cantidad='124' />
                    <Info nombre="Me Gusta" cantidad='155 K' />
                    <Info nombre="Lectores" cantidad='8 K' />
                    <Info nombre="Opiniones" cantidad='163 K' />
                </div>
                <div className="postAutores">
                    <VerTodo tituilo="Personajes"/>
                    <PostApi/>
                </div>
            </div>
            <div className="postResiente">
                
            </div>
        </div>
    </>
}