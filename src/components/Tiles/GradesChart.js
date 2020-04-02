import React from "react";

import { Line } from "react-chartjs-2";

function AttendanceChart() {
    const data = {
        labels: ["Module 1", "Module 2", "Module 3", "Module 4", "Sprint"],
        datasets: [
            {
                label: "Carmela F.",
                data: randomData(),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: randomColor(),
                borderWidth: 1,
            },
            {
                label: "Angel H.",
                data: randomData(),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: randomColor(),
                borderWidth: 1,
            },
            {
                label: "Maxine R.",
                data: randomData(),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: randomColor(),
                borderWidth: 1,
            },
            {
                label: "Elouise B.",
                data: randomData(),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: randomColor(),
                borderWidth: 1,
            },
            {
                label: "Sabrina K.",
                data: randomData(),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: randomColor(),
                borderWidth: 1,
            },
            {
                label: "Evans H.",
                data: randomData(),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: randomColor(),
                borderWidth: 1,
            },
            {
                label: "Torrance L.",
                data: randomData(),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: randomColor(),
                borderWidth: 1,
            },
            {
                label: "Oswald D.",
                data: randomData(),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: randomColor(),
                borderWidth: 1,
            }
        ]
    };

    const options = {
        scales: {
            yAxes:[{
                ticks: {
                    min: 1,
                    max: 3,
                    stepSize: 1,
                }
            }]
        }
    };

    return (
        <div>
            <Line
                height={300}
                data={data}
                options={options}
            />
        </div>
    );
}

const randomColor = () => {
    const [r, g, b] = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
    ]
    return `rgba(${r}, ${g}, ${b}, 1)`;
}

const randomData = () => {
    return [
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1,
    ];
}

export default AttendanceChart;
