import React, {useState, useEffect} from "react";
import '/app/app.css';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";


const data = {

    labels: [
        'Incompletas',
        'Completas',
      ],
    datasets: [
        {
        label: "Estados de las tareas",
        data: [ 50, 50],
        backgroundColor: [
            'rgb(217, 94, 57)',
            'rgb(82, 183, 136)'
          ]
        } 
        ]
};
function Charts (){
    const [tasks, setTasks] = useState([]);
    const incompleteTasks = tasks.filter(task => task.completed).length;
   const  completedTasks = tasks.length - incompleteTasks;

    useEffect(()=>{
        fetch('http://127.0.0.1:3001/api/task/')
        .then(res =>res.json())
        .then(tasks => {
            setTasks(tasks) 
            console.log(tasks)
        })
    }, [])
    
    
        return (
            <div>
                <div>
                    <h1 id="txt-task">Resumen de tareas</h1>
                    <Pie data={data} />
                </div>
            </div>
        );
    }
export default Charts;



