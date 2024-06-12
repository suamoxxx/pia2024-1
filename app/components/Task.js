import React, {useState, useEffect} from "react";
import '/app/app.css';
import del from '../images/del.png';
import editar from '../images/editar.png';
import add from './add'

function Task({task}) {
    const [data, setData ] = useState([]); 
    const prioridad = add.setPriority;
    const descrip = add.SetDescriptions;

    const upTask = (id) => {
            fetch(`/api/task/search/${id}/`, {})
            .then(res => res.json())
            .then(data => {
                setData(data)
                 let inp = document.getElementById('priority')
                 let inpDes = document.getElementById('description')
                 let prioridad = data.priority;
                 let descripcion =  data.description;
                 inp.value = prioridad;
                 inpDes.value = descripcion;       
            })
    }
    const delTas = (id) => {
        if(confirm("Realmente deseas eliminarla")){
                fetch(`http://127.0.0.1:3001/api/task/${id}` , {
                method: "DELETE",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
          })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            
            




            
        }      
      }
    return(
        <div  id="taskUI">
            <ul >
                <li>{task.priority}</li>
                <li>{task.description}</li>
                <li><button className="btn-del" onClick={()=> delTas(task._id)}><img id="img-task" src={del}/></button> </li>
                <li><button className="btn-edit" onClick={()=>upTask(task._id)}><img id="img-task" src={editar}/></button></li>
                </ul>
        </div>
    )
}

export default Task