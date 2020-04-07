import React, { useState, useEffect } from "react";
import GradesChart from "./Charts/GradesChart";

const lineColors = [
  "#ACACE1",
  "#C6ACE1",
  "#E1C6AC",
  "#E1E1AC",
  "#ACE1AC",
  "#ACE1E1"
];

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
            // backgroundColor: "#EEE",
            borderColor: lineColors[index],
            borderWidth: 5,
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
