import React from "react";
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
        return (
            <div>
                <div>
                    <h1 id="txt-note">Resumen de tareas</h1>
                    <Pie data={data} />
                </div>
            </div>
        );
    }
export default Charts;



