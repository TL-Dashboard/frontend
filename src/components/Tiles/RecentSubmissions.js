import React from "react";
import { Link } from "react-router-dom";

const RecentSubmissions = React.memo(({context}) => {
    // console.log('students', context.students)
    // console.log('submissions tile render')
    const assignments = context.assignments;
    const students = context.students;

    const checkIfGradeExistsForRetro = (retroId, grades) =>{
        // console.log('check grades')
        for (let i = 0; i < grades.length; i++){
            if (grades[i].retro_id === retroId){
                // console.log('found', grades[i].retro_id, retroId)
                return true
            }else return false
        }
    }

    const handleReviewClick = (retro) => {
        console.log(retro)
        context.actions.updateState('retro', retro)
    }

    return (
        <div className="tile__recent">
            <div className="tile__recent__headers">
                <p>Most recently submitted retro:</p>
            </div>
            {
                students.length > 0 && assignments.length > 0 ? 
                (
                students.map((student, index) => (
                    <div className="tile__recent__container" key={index}>
                        <div className="tile__recent__container__student">
                            <p>{student.first_name}</p>
                            <p>{student.last_name}</p>
                        </div>
                        <div className={`tile__recent__container__student__${assignments[student.retros[0].assignment_id - 1].type}`}>
                            <Link to={student.retros[0].url}><p>{assignments[student.retros[0].assignment_id - 1].name}</p></Link>
                        </div>
                        {!checkIfGradeExistsForRetro(student.retros[0].id, student.grades) && (
                            <Link to='/dashboard/review'>
                            <div className="tile__recent__container__review" onClick={() => handleReviewClick(student.retros[0])}>
                                <p>Review</p>
                            </div>
                            </Link>
                            )}
                    </div>
                ))
                ):(
                <span>Loading...</span>
                )
            }
        </div>
    )
})

export default RecentSubmissions;