//Importamos el modulo USESTATE o el uso de estados de react, esto para controlar los datos
import React, {useState, useEffect} from "react";
import '/app/app.css';
//Importamos el modulo arrastrar y soltar de react
import Task from './Task'
import notas from "../images/notas.png";
import down from "../images/down.png";
import up from "../images/up.png";
//Boton que envia a Mongoose la data de los input de React
    function Btnadd(){
        //Estado de los inputs 
        const [priority, setPriority ] = useState('');
        const [description, setDescriptions ] = useState('');
        const [data, setData ] = useState([]);      
         //Solicita datos registrados en la DB a traves de useEffect de react y useState
        useEffect(()=>{
            fetch('http://127.0.0.1:3001/api/task/')
            .then(res =>res.json())
            .then(data => {
                // Establecemos valor a nuestro useState 
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
                    description: description,
                }
                //Enviamos datos a la api rest para que los guarde
                fetch('http://localhost:3001/api/task', {
                    method: 'POST',
                    headers: { "Content-type": "application/json", "Accept": "applications/json"},
                    body: JSON.stringify(task)
                }).then(res => res.json()).then(data =>{
                    setDescriptions('');
                    setPriority('');
                    window.location.reload(true)
                    
                    
                })   
        }
        return (
            <div >           
                <a id="clip4" href="#nav"><img id="up" src={up}/></a>      
                <div className="linea">                    
                <img className="img-tks"  src={notas}/>  
                    {/*Formulario de tareas */}
                    <form onSubmit={handleSubmit}>
                    {/* Input de prioridad*/}
                            <input 
                                id="priority" 
                                name="priority" 
                                value={priority}
                                placeholder="Alta/Media/Baja"
                                onChange={(e) => setPriority(e.target.value)}
                                required  
                                autoComplete="off">
                           </input>
                           {/* Input de descripcion*/}
                           <textarea 
                                    id="description" 
                                    name="description"
                                    className="input_style_description"
                                    value={description} 
                                    placeholder="Descripción de la tarea"
                                    onChange={(e) => setDescriptions(e.target.value)}
                                    required 
                                    autoComplete="off">   
                         </textarea>
                         <button id="bt-main">&#43;</button>
                 </form>
                
                </div>

                <div className="table">
                                    <h1 className="tareastxt">Tus tareas</h1>
                                            {
                                   data.map(tsk =>{                         
                                    return(
                                      <Task task={tsk} key={tsk._id }/>
                                    )})
                                   }
                </div>
                
                <a  href="#clip2"><img id="down" src={down}/></a>                                          
            </div>
        );
    }
export default Btnadd;
