//desestructuramos del paquete react-dom el metodo render
import React, { Component, useState } from "react";
//desttructuramos del paquete react-dom el metodo render
import { render } from "react-dom";
import '/app/app.css';
import { Draggable, Droppable } from "react-drag-and-drop";


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
            fetch('http://localhost:3001/tareas', {
                method: 'POST',
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(this.state)
            }).then(res => console.log(res)).catch(error=> (error))
            console.log("almacenado")
            this.setState({priority: '', description:""})
        }
        handlechange(e){
            console.log(e.target.value);
                
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
                                            <select id="priority" 
                                                    name="priority" 
                                                    placeholder="prioridad" 
                                                    onChange={ this.handlechange} 
                                                    value={this.state.priority}>
                                                    <option>Alta</option>
                                                    <option>Media</option>
                                                    <option>Baja</option>
                                            </select>
                                          {/*Input de area de texto   */}
                                        <textarea
                                                onChange={  this.handlechange} 
                                                id="description" 
                                                name="description"
                                                className="input_style_description" 
                                                placeholder="Descripcion de la tarea"
                                                value={this.state.description}>   
                                                </textarea>
                                                {/*Boton que envia los inputs*/}
                                        <button type="submit" className="btn-submit">&#43;</button> 
                        </form>
                    </div>
            </div>
        )
    }
};

export default TaskFront;