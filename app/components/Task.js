import React from "react";
import '/app/app.css';
import {CSS} from '@dnd-kit/utilities';
import del from '../images/del.png';

function Task({task, id}) {

    const delTas = (id) => {
        console.log(id)
        fetch(`http://127.0.0.1:3001/tareas/${id}` , {
            method: "DELETE",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
          })
          .then(resp => resp.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
       
      }
    return(
        <div  id="taskUI">
            <ul >
                <li>{task.priority}</li>
                <li>{task.description}</li>
                <li><button className="btn-del" onClick={()=> delTas(task._id)}><img id="img-task" src={del}/></button> </li>
                </ul>
        </div>
    )
}

export default Task