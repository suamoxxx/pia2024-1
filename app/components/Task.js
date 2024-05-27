import React from "react";
import '/app/app.css';
import del from '../images/del.png';
import editar from '../images/editar.png';

function Task({task, id}) {

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
                <li><button className="btn-edit"><img id="img-task" src={editar}/></button></li>
                </ul>
        </div>
    )
}

export default Task