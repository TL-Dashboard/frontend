import React from "react";

import { Radar } from "react-chartjs-2";

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
            label: "Days Missed",
            data: dataPoints,
            pointBorderColor: lineColors,
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
    };

    return (
        <div>
            <Radar
                height={300}
                width={300}
                data={data}
                options={options}
            />
        </div>
    );
}

export default AttendanceChart;