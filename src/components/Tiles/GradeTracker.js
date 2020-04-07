import React, { useState, useEffect } from "react";
import GradesChart from "./Charts/GradesChart";

const lineColors = [
  "#ACACE1",
  "#C6ACE1",
  "#E1C6AC",
  "#E1E1AC",
  "#ACE1AC",
  "#ACE1E1",
  "#ACC1EB",
  "#B6ACEB",
  "#D6ACEB",
  "#EBB6AC",
  "#E1EBAC",
  "#C1EBAC"
];

const fillColors = [
  "rgba(130, 101, 158, 0.3)",
  "rgba(158, 101, 158, 0.3)",
  "rgba(158, 101, 130, 0.3)",
  "rgba(158, 101, 101, 0.3)",
  "rgba(158, 130, 101, 0.3)",
  "rgba(158, 158, 101, 0.3)",
  "rgba(130, 158, 101, 0.3)",
  "rgba(101, 158, 101, 0.3)",
  "rgba(101, 158, 130, 0.3)",
  "rgba(101, 158, 158, 0.3)",
  "rgba(101, 130, 158, 0.3)",
  "rgba(101, 101, 158, 0.3)"
]

const GradeTracker = props => {
  const { students } = props.context;
  // console.log(students)

  const [chartData, setChartData] = useState([
    {
      label: "",
      data: [],
      backgroundColor: "",
      borderColor: "",
      borderWidth: 1
    }
  ]);

  useEffect(() => {
    if (students.length) {
      setChartData(
        students.map((student, index) => {
          return {
            label: student.first_name,
            data: student.grades.map(grade => grade.grade).reverse(),
            backgroundColor: fillColors[12],
            borderColor: lineColors[index],
            borderWidth: 4,
            pointRadius: 1,
            lineTension: 0
          };
        })
      );
    }
  }, [students]);

//   console.log(chartData);

  return (
    <div className="grades-chart">
      <div className="grades-chart-title">Sprint: User Interface and Git</div>
      <GradesChart chartData={chartData} />
    </div>
  );
};

export default GradeTracker;
