import React from "react";
import '/app/app.css';
import del from "../images/del.png";
    function Btndel (){
        return (
            <div>
                <button className="bt-main"><img  id="del" src={del} /></button>
            </div>
        );
    }
export default Btndel;
