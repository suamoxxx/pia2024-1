import React, { Component, useState } from "react";
import '/app/app.css';
import Btndel  from './components/del.js';
import Btnadd  from './components/add.js';
import Nav  from './components/nav.js';
import Charts  from './components/draw.js';
import { DndContext,clousestCorners } from "@dnd-kit/core";



function FrontMain(){
    return (
        <div>
                <div>
                    <Nav />
                </div>
            <div id="mn">
            <div id="zntsk">
                            <div>
                                <h1>tareas</h1>
                                <Btndel />
                            </div>
                            <div>
                            <Btnadd />
                            </div>
                </div>

                <div id="znte">
                            <div>
                                <h2>notas</h2>

                            </div>
                            <div>
          
                            </div>
                </div>
                <div id="znch">
                        <Charts />
                </div>
            </div>
        </div>
    );
}
export default FrontMain;