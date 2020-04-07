import React, { useState, useEffect } from "react";
import AttendanceChart from "./Charts/AttendanceChart.js";

const makeData = (students, setLabels, setDataPoints) => {
  setLabels(students.map(student => student.first_name));
  setDataPoints(
    students.map(student => {
      let dataCount = 0;
      for (let i = 0; i < 5; i++) {
        // console.log(student.attendance[i].present)
        if (student.attendance[i].present === "false") {
          dataCount++;
        }
      }
      return dataCount;
    })
  );
};

const AttendanceRadar = props => {
  const { students } = props.context;

  const [labels, setLabels] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    if (students.length > 0) {
      makeData(students, setLabels, setDataPoints);
    }
  }, [students]);

  // console.log(dataPoints)

  return (
    <div className="attendance-chart">
      <div className="attendance-chart-title">
        Days absent (past five days):
      </div>
      <AttendanceChart labels={labels} dataPoints={dataPoints} />
    </div>
  );
};

export default AttendanceRadar;
