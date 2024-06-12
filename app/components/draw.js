import React, {useState, useEffect} from "react";
import '/app/app.css';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
function Charts (){
    const [tasks, setTasks] = useState([]);
    const totalTask = tasks.filter(task => task.priority).length * 10;
    const one = 'Alta'
    const high = tasks.filter(task => task.priority.includes(one)).length *10;
    const two = 'Media'
    const middle = tasks.filter(task => task.priority.includes(two)).length *10;
    const three = 'Baja'
    const low = tasks.filter(task => task.priority.includes(three)).length *10;
    const data = {
        labels: [ 'Alta','Media','Baja'],
        datasets: [{
                    label: "Tareas por prioridad",
                    data: [ high, middle,low],
                    //Alta Media Baja
                    backgroundColor: ['#F46D6D','#E8F46D','#97E068'],
                }]
    };     
    useEffect(()=>{
        fetch('http://127.0.0.1:3001/api/task/')
        .then(res =>res.json())
        .then(tasks => {
            setTasks(tasks) 
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



