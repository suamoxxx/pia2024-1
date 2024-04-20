import React from "react";
import '/app/app.css';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
    datasets: [
        {
        label: "Estados de las tareas",
        borderColor: "rgb(0, 0, 255)",
        data: [0, 10, 5, 2, 20, 30, 45],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ]
        },
        ]
};
function Charts (){
        return (
            <div>
                <div>
                    <h1>grafico</h1>
                    <Pie data={data} />
                </div>
            </div>
        );
    }
export default Charts;



