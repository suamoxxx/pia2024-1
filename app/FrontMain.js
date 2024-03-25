import React, { Component, useState } from "react";
import { render } from "react-dom";
import '/app/app.css';
import { Draggable, Droppable } from "react-drag-and-drop";

class TaskFront extends Component {
    
    state = { 
        priority:'', description: ""
    }

    send (e){
        e.preventDefault();
        const data = {
            description: this.state.description,
            priority: this.state.priority
        }
    }

    change(){
        const {} = e.target
    }
    render(){ 
        return (
           <div className="container">
                    <nav className="nav">
                          <div></div>
                    </nav>
                    <div>
                            <form>
                                <p><label>Prioridad</label></p>
                                    <select name="priority"  
                                            placeholder="Prioridad" 
                                            onChange={this.change} 
                                            value={this.state.priority}>
                                            <option>Alta</option><option>Media</option><option>Baja</option>
                                    </select>
                                <textarea onChange={this.change} 
                                        name="description" 
                                        className="input_style_description" 
                                        placeholder="Descripcion de la tarea">
                                        </textarea>
                                <button onSubmit={this.send} type="submit" className="btn-submit">&#43;</button> 
                        </form>
                    </div>
            </div>
        )
    }
};

export default TaskFront;