import React, { Component, useState } from "react";
import '/app/app.css';
import Btndel  from './components/del.js';
import Btnadd  from './components/add.js';
import Nav  from './components/nav.js';
import Charts  from './components/draw.js';
import BtnaddTsk  from './components/add _nts.js';
import BtndelNts from './components/del_nts.js';
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
                                <Btnadd />
                            </div>
                            <div>
                            <Btndel />
                            </div>
                </div>

                <div id="znte">
                            <div>
                                <BtnaddTsk />    
                            </div>
                            <div>
                            <BtndelNts />
                            </div>
                </div>
                <div id="znch">
                        <Charts />
                </div>
            </div>
            <footer>
                <div>
                    <h1>footer</h1>
                </div>
            </footer>
        </div>
    );
}
export default FrontMain;