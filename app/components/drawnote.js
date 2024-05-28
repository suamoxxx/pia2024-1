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
        label: "Estados de las notas",
        data: [ 30,70],
        backgroundColor: [
            'rgb(217, 94, 57)',
            'rgb(82, 183, 136)'
          ]
        }
        ]
};
function ChartsNote (){
        return (
            <div>
                <div>
                    <h1 id="txt-note">Resumen de Notas</h1>
                    <Pie data={data} />
                </div>
            </div>
        );
    }
export default ChartsNote;



