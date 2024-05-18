//Importamos el modulo USESTATE o el uso de estados de react, esto para controlar los datos
import React, {useState, useEffect} from "react";
import '/app/app.css';
//Importamos el modulo notie para las alertas de las notas
import notie from 'notie'
//Importamos el modelo de datos de las tareas
import task from "../../models/task";
//Importamos el modulo arrastrar y soltar de react
import { DndContext,closestCenter,clousestCorners } from "@dnd-kit/core";
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'
import Task from './Task'
//Boton que envia a Mongoose la data de los input de React
    function Btnadd(){
        //Estado de los inputs 
        const [priority, setPriority ] = useState('');
        const [description, setDescriptions ] = useState('');
        const [data, setData ] = useState([]);
         
         //Solicita datos registrados en la DB a traves de useEffect de react y useState
        useEffect(()=>{
            fetch('http://127.0.0.1:3001/tareas')
            .then(res =>res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
        }, [])
        //Evento del boton submit
       const handleSubmit =(e)=>{
        //Detenemos el evento por defecto del navegador  
            e.preventDefault();
        //Pasamos los datos del estado a un objeto
            const task = {
                priority: priority,
                description: description
            }
            //Enviamos datos a la api rest para que los guarde
            fetch('http://localhost:3001/tareas', {
                method: 'POST',
                headers: { "Content-type": "application/json", "Accept": "applications/json"},
                body: JSON.stringify(task)
            })
            //Limpiamos los datos de los inputs de prioridad y description
            setDescriptions('');
            setPriority('');
        }
        //Alerta de guardado en la DB
            const alertNote = ()=>{ 
              notie.alert(
                { 
                    type: 'success', 
                    text: 'guardado', time: 2 
                });
          }
        return (
            <div>            
                <div>                    
                    {/*Formulario de tareas */}
                    <form onSubmit={handleSubmit}>
                    <button id="bt-main">&#43;</button>
                    {/* Input de prioridad*/}
                            <input 
                                id="priority" 
                                name="priority" 
                                value={priority}
                                placeholder="Alta/Media/Baja"
                                onChange={(e) => setPriority(e.target.value)}
                                required  >
                           </input>
                           {/* Input de descripcion*/}
                           <textarea 
                                    id="description" 
                                    name="description"
                                    className="input_style_description"
                                    value={description} 
                                    placeholder="Descripcion de la tarea"
                                    onChange={(e) => setDescriptions(e.target.value)}
                                    required >   
                         </textarea>
                 </form>
                </div>
                <DndContext collisionDetection={closestCenter}>
                <div className="table">
                        <table>
                            <thead>
                                <div>
                                <tr>
                                    <th>Prioridad</th>
                                    <th>Descripción</th>
                                </tr>
                                </div>
                            </thead>
                            <tbody>
                                  <SortableContext items={data}
                                  strategy={verticalListSortingStrategy}>
                                            {
                                   data.map(tsk =>{                         
                                    return(
                                      <Task task={tsk} key={data._id }/>
                                    )})
                                   }
                                  </SortableContext>
                            </tbody>
                        </table>
                </div>
                </DndContext>
            </div>
        );
    }
export default Btnadd;
