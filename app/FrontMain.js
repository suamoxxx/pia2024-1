//desestructuramos del paquete react-dom el metodo render
import React, { Component, useState } from "react";
//desttructuramos del paquete react-dom el metodo render
import { render } from "react-dom";
import '/app/app.css';
import { Draggable, Droppable } from "react-drag-and-drop";
import del from '../public/del.png'





class TaskFront extends Component {
    constructor (){
        super();
        this.state = {
            priority: "", 
            description: ""
        };   
        //Captura cada metodo
        this.addtask = this.addtask.bind(this);
        this.handlechange = this.handlechange.bind(this)
    }  
        addtask (e){
                console.log(this.state)
                fetch('http://localhost:3001/tareas', {
                method: 'POST',
                headers: { "Content-type": "application/json", "Accept": "applications/json"},
                body: JSON.stringify(this.state)
            }).then(resp => console.log(resp)).catch(error=> (error))
        }
        handlechange(e){
            const {name, value} = e.target;
            console.log(e.target.value)
            this.setState ({
                [name]:value
            })                
        }

    render(){ 
        return (
           <div className="container">
                    <nav className="nav">
                          <div></div>
                    </nav>
                    <div>
                            <form onSubmit={this.addtask} >
                                        <p><label>Prioridad</label></p>
                                       { /*Input de Prioridad con multiples opciones*/} 

                                            <input id="priority" 
                                                    name="priority" 
                                                    placeholder="Alta/Media/Baja" 
                                                    onChange={ this.handlechange} >
                                            </input>
                                          {/*Input de area de texto   */}
                                        <textarea
                                                onChange={  this.handlechange} 
                                                id="description" 
                                                name="description"
                                                className="input_style_description" 
                                                placeholder="Descripcion de la tarea">   
                                                </textarea>
                                                {/*Boton que envia los inputs*/}
                                        <button type="submit" className="btn-submit">&#43;</button> 
                        </form>
                    </div>

                    <div>
                        <button><img src=""/></button>
                    </div>
            </div>
        )
    }
};

export default TaskFront;