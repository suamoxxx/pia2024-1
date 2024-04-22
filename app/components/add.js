import React, {useState} from "react";
import '/app/app.css';
    function Btnadd(){
        const [priority, setPriority ] = useState('');
        const [description, setDescriptions ] = useState('');


       const handleSubmit =(e)=>{
            e.preventDefault();
            const task = {
                priority: priority,
                description: description
            }
            console.log(task)
            fetch('http://localhost:3001/tareas', {
                method: 'POST',
                headers: { "Content-type": "application/json", "Accept": "applications/json"},
                body: JSON.stringify(task)
            });

            console.log('llego a la DB');
        }

        return (
            <div>
                <div>                    
                    <form onSubmit={handleSubmit}>
                    <button>&#43;</button>
                            <input 
                                id="priority" 
                                name="priority" 
                                value={priority}
                                placeholder="Alta/Media/Baja"
                                onChange={(e) => setPriority(e.target.value)}  >
                           </input>
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
            </div>
        );
    }
export default Btnadd;
