import React, { useState, useEffect } from "react";
import AttendanceChart from './Charts/AttendanceChart.js'

const AttendanceRadar = props => {
  const { students } = props.context;
  // console.log(students)

  // const [chartData, setChartData] = useState([
  //   {
  //     label: "",
  //     data: [],
  //     backgroundColor: "",
  //     borderColor: "",
  //     borderWidth: 1
  //   }
  // ]);

//   const countDaysMissed = (data) => {
//     const zero = 0
//     if (data.length === 5){
//         // console.log(data.length, '= 0')
//         return zero
//     } else {
//         return (5 - data.length)
//     }
// }

const [labels, setLabels] = useState([])
const [dataPoints, setDataPoints] = useState([])

useEffect(() => {
  if (students.length > 0) {
      setLabels(
        students.map(student=> student.first_name)
      )
      setDataPoints(
        students.map(student => (6 - student.attendance.filter(i => i.present === "true").length))
      )
  }
},[students])

  return (
    <div className="attendance-chart">
      <div className="attendance-chart-title">Days absent (past five days):</div>
      <AttendanceChart labels={labels} dataPoints={dataPoints} />
    </div>
  );
};

export default AttendanceRadar;