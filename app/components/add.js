import React from "react";
import '/app/app.css';
    function Btnadd(){
        return (
            <div>
                <div>
                <input id="priority" 
                        name="priority" 
                        placeholder="Alta/Media/Baja"  >
                 </input>
                 <textarea 
                           id="description" 
                            name="description"
                            className="input_style_description" 
                             placeholder="Descripcion de la tarea">   
                </textarea>
                 <button>&#43;</button>
                </div>
            </div>
        );
    }
export default Btnadd;
