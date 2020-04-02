import React from "react";

import { Bar } from "react-chartjs-2";

function AttendanceChart() {
    const data = {
        labels: ["Carmela F.", "Angel H.", "Maxime R.", "Elouise B.", "Sabrina K.", "Evans H.", "Torrance L.", "Oswald D."],
        datasets: [
            {
                label: "Days Missed",
                data: [0, 2, 0, 1, 0, 0, 0, 0],
                backgroundColor: [
                    "rgba(235, 57, 68, 1)",
                    "rgba(235, 57, 68, 1)",
                    "rgba(235, 57, 68, 1)",
                    "rgba(235, 57, 68, 1)",
                    "rgba(235, 57, 68, 1)",
                    "rgba(235, 57, 68, 1)",
                    "rgba(235, 57, 68, 1)",
                    "rgba(235, 57, 68, 1)",
                ],
            }
        ]
    };

    const options = {
        scales: {
            yAxes:[{
                ticks: {
                    min: 0,
                    max: 3,
                    stepSize: 1,
                }
            }]
        }
    };

    return (
        <div>
            <Bar
                height={300}
                data={data}
                options={options}
            />
        </div>
    );
}

export default AttendanceChart;
