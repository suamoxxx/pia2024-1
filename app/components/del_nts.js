import React from "react";
import '/app/app.css';
import del from "../images/del.png";
    function BtndelNts (){
        return (
            <div>
                <button><img  id="del" src={del} /></button>
            </div>
        );
    }
export default BtndelNts;
