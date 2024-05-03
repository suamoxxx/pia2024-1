import React, { Component, useState } from "react";
import '/app/app.css';
import Btndel  from './components/del.js';
import Btnadd  from './components/add.js';
import Nav  from './components/nav.js';
import Charts  from './components/draw.js';
import BtnaddTsk  from './components/add _nts.js';
import BtndelNts from './components/del_nts.js';
function FrontMain(){
    return (
        <div>
                <div>
                    {/*Renderizamos el componente nav */}
                    <Nav />
                </div>
            <div id="mn">
            <h1 className="text-main">Bahamuth</h1>
            <div id="zntsk">
                            <div>
                                {/*Renderizamos el componente importado boton para agregar tarea*/}
                                <Btnadd />
                            </div>
                            <div>
                                {/*Renderizamos el componente importado boton para eliminar tareas*/}
                            <Btndel />
                            </div>
                </div>

                <div id="znte">
                            <div>
                                {/*Renderizamos el componente importado boton para agregar notas*/}
                                <BtnaddTsk />    
                            </div>
                            <div>
                                 {/*Renderizamos el componente importado boton para eliminar notas */}
                            <BtndelNts />
                            </div>
                </div>
                <div id="znch">
                        <Charts />
                </div>
            </div>
            {/*Renderizamos el componente pie de pagina*/}
            <footer>
                <div>
                    <h2>footer</h2>
                </div>
            </footer>
        </div>
    );
}
export default FrontMain;