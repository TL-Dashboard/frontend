import React from "react";

import { Polar } from "react-chartjs-2";

function AttendanceChart({ labels, dataPoints }) {

    const lineColors = [
        "#ACACE1",
        "#C6ACE1",
        "#E1C6AC",
        "#E1E1AC",
        "#ACE1AC",
        "#ACE1E1"
      ];

    const data = {
        labels: labels, 
        datasets: [{
            data: dataPoints,
            backgroundColor: lineColors
        }]
    };

    const options = {
        legend:{
            display: true,
            position: 'bottom'
        }
    };

    return (
        <div>
            <Polar
                height={300}
                data={data}
                options={options}
            />
        </div>
    );
}

export default AttendanceChart;