import React from "react";
import '/app/app.css';
import elf from "../images/elf.png";

    function Nav(){        
        return (
            <div>
                <img id="elf" src={elf}/>
                <h1 className="text-main">Bahamuth</h1>
               <nav className="nav">
                <ul>
                    <li><button className="btn-nav"><a>notas</a></button></li>
                    <li><button className="btn-nav"><a>tareas</a></button></li>
                </ul>
               </nav>
            </div>
        );
    }
export default Nav;
