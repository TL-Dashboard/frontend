import React from "react";

import { Radar } from "react-chartjs-2";

function AttendanceChart({ labels, dataPoints }) {

    const data = {
        labels: labels, 
        datasets: [{
            // label: labels,
            data: dataPoints,
            pointRadius: 1,
            pointHoverRadius: 10,
            pointBorderColor: "rgba(247, 12, 12, 0.3)",
            borderWidth: 3,
            borderColor: "rgba(247, 12, 12, 0.3)",
            backgroundColor: "rgba(247, 12, 12, 0.3)",
            fill: true
        }],
    };

    const options = {
        scale:{
            ticks: {
                max: 5,
                stepSize: 1,
                showLabelBackdrop: false,
                // display: false,
            }
        },
        legend:{
            display: false,
            position: 'bottom'
        },
        tooltips:{
            enabled: false
        }
    };

    return (
        <div>
            <Radar
                height={280}
                width={280}
                data={data}
                options={options}
            />
        </div>
    );
}

export default AttendanceChart;