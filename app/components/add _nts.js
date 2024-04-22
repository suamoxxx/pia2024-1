import React from "react";
import '/app/app.css';
    function BtnaddNts(){
        return (
            <div>
                <div>
                    <form>
                       <button class="btn_nts">&#43;</button>
                        <textarea 
                                   id="description" 
                                    name="description"
                                    className="input_style_description" 
                                    placeholder="Descripcion de la tarea">   
                        </textarea>
                 </form>
                </div>
            </div>
        );
    }
export default BtnaddNts;
