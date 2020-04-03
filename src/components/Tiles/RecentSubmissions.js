import React from "react";
import { Link } from "react-router-dom";

const RecentSubmissions = ({context}) => {
    // console.log('students', context.students)
    const assignments = context.assignments;
    const students = context.students;

    return (
        <div className="tile__recent">
            {
                students.length > 0 ? 
                (
                students.map((student, index) => (
                    <div className="tile__recent__container" key={index}>
                        <div className="tile__recent__container__student">
                            <p>{student.first_name}</p>
                        </div>
                        <div className={`tile__recent__container__student__${assignments[student.retros[0].assignment_id - 1].type}`}>
                            {console.log(assignments[student.retros[0].assignment_id - 1].type)}
                            <Link to={student.retros[0].url}><p>{assignments[student.retros[0].assignment_id - 1].name}</p></Link>
                        </div>
                    </div>
                ))
                ):(
                <span>Loading...</span>
                )
            }
        </div>
    )
}

export default RecentSubmissions;