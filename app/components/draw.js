import React from "react";
import '/app/app.css';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["January", "February"];
const data = {
    labels: [
        'Incompletas',
        'Completas',
      ],
    datasets: [
        {
        label: "Estados de las tareas",
        borderColor: "rgb(230 ,230, 255)",
        data: [ 10, 5],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(82, 183, 136)'
          ]
        }
        ]
};
function Charts (){
        return (
            <div>
                <div>
                    <h1>Grafico</h1>
                    <Pie data={data} />
                </div>
            </div>
        );
    }
export default Charts;



