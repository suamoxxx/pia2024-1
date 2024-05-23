//Componente principal de bahamuth, se importan los demas compontentes como footer y nav
import React, { Component, useState } from "react";
import '/app/app.css';
import Btndel  from './components/del.js';
import Btnadd  from './components/add.js';
import Nav  from './components/nav.js';
import Charts  from './components/draw.js';
import BtnaddTsk  from './components/add _nts.js';
import BtndelNts from './components/del_nts.js';
import elf from "./images/elf.png";
import clip from "./images/clip.png"
import ChartsNote from "./components/drawnote.js";

function FrontMain(){
    return (
        <div >
                    <div className="main">
                                <div>
                                    {/*Renderizamos el componente nav */}
                                    <Nav />
                                </div>

                            <div id="zntsk">
                            <img id="clip" src={clip}/>  
                                            <div>
                                                {/*Renderizamos el componente importado boton para agregar tarea*/}
                                                <Btnadd />
                                            </div>
                                            <div id="znchtask">
                                               <Charts />
                                           </div>
                                </div>

                                <div id="znte">
                                <img id="clip2" src={clip}/>  
                                            <div>
                                                {/*Renderizamos el componente importado boton para eliminar notas */}
                                              <BtndelNts />
                                            </div>
                                            <div id="znchnts">
                                               <ChartsNote />
                                           </div>
                                </div>
                            </div>
                            
                            <div id="curva-pie"></div>
                            {/*Renderizamos el componente pie de pagina*/}
                            <footer>
                                <div>
                                <img id="elf3" src={elf}/>
                                </div>
                            </footer>
        </div>
    );
}
export default FrontMain;