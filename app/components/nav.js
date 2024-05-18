import React from "react";
import '/app/app.css';
import elf from "../images/elf.png";
import lgtx from "../images/lgtx.png";
import logo from "../images/logo.png";
    function Nav(){        
        return (
            <div>
               <nav className="nav">
                    <div >
                       <img id="elf" src={elf}/>
                     </div>     
                     <div className="ul-li">
                            <ul>
                                <li><button className="btn-nav"><a href="#clip2">notas</a></button></li>
                                <li><button className="btn-nav"><a href="#clip">tareas</a></button></li>
                            </ul>
                        </div>
               </nav>
                <div id="p-main">
                <img id="logo" src={logo}/>
                    <img id="elf2" src={lgtx}/>
                    <p id="txt-nav">te ayuda a gestionar tus tareas de una manera sencilla. </p>
                </div>
              <div id="curva">1</div>
            </div>
        );
    }
export default Nav;
