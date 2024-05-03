//Importamos el modulo USESTATE o el uso de estados de react, esto para controlar los datos
import React, {useState} from "react";
import '/app/app.css';
//Importamos el modulo notie para las alertas de las notas
import notie from 'notie'
//Importamos el modelo de datos de las tareas
import task from "../../models/task";
//Importamos el modulo arrastrar y soltar de react
import { DndContext,clousestCorners } from "@dnd-kit/core";
var Recognizer = require('recognize-speech');
var recognizer = new Recognizer();
//Boton que envia a Mongoose la data de los input de React
    function Btnadd(){
        let ren = [];
        //Solicita datos de la DB al iniciar, funcion autoejecutada
        (function  (){
            fetch('http://127.0.0.1:3001/tareas')
            .then(res =>res.json())
            .then(data => {
               console.log(data)
            })
        }());
        //Estado de los inputs 
        const [priority, setPriority ] = useState('');
        const [description, setDescriptions ] = useState('');
        const [tasks, setTasks ] = useState('');
        //Evento del boton submit
       const handleSubmit =(e)=>{
        //Detenemos el evento por defecto del navegado  
            e.preventDefault();
            //Pasamos los datos del estado a un onjeto
            const task = {
                priority: priority,
                description: description
            }
            console.log(task)
            fetch('http://localhost:3001/tareas', {
                method: 'POST',
                headers: { "Content-type": "application/json", "Accept": "applications/json"},
                body: JSON.stringify(task)
            })
            //Limpiamos los datos de los inputs de prioridad y description
            setDescriptions('');
            setPriority('');
            //Llamamos la funcion de alerta de guardado en la DB
            alertNote()
        }
        //Alerta de guardado en la DB
            const alertNote = ()=>{ 
              notie.alert({ type: 'success', text: 'guardado', time: 2 });
          }
        return (
            <div>
                <div>                    
                    {/*Formulario de tareas */}
                    <form onSubmit={handleSubmit}>
                    <button>&#43;</button>
                    {/* Input de prioridad*/}
                            <input 
                                id="priority" 
                                name="priority" 
                                value={priority}
                                placeholder="Alta/Media/Baja"
                                onChange={(e) => setPriority(e.target.value)}  >
                           </input>
                           {/* Input de descripcion*/}
                           <textarea 
                                    id="description" 
                                    name="description"
                                    className="input_style_description"
                                    value={description} 
                                    placeholder="Descripcion de la tarea"
                                    onChange={(e) => setDescriptions(e.target.value)} >   
                         </textarea>
                 </form>
                </div>
                <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Prioridad</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                     
                            </tbody>
                        </table>
                </div>
            </div>
        );
    }
export default Btnadd;
