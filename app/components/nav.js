import React from "react";
import '/app/app.css';
import logo from "../images/logo.png";
    function Nav(){        
        return (
            <div>
               <nav className="nav" id="nav">
                    <div >
                       <img id="elf" src={logo}/>
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
                    <p id="txt-nav">Te ayudamos a gestionar tus tareas de una manera sencilla. </p>
                </div>
              <div id="curva">1</div>
            </div>
        );
    }
export default Nav;
