import React from "react";

const MissingWork = ({context}) => {

    const assignments = context.assignments;
    const students = context.students;

    let missing = []

    const checkIfRetroExistsForAssignment = () => {
        if (students.length > 0) {
            students.map(student => {
                if (student.retros.length < 5){
                    for (let i = 4; i >= 0; i--){
                        if (student.retros[i]?.assignment_id === undefined){
                            // console.log(student.first_name, 'missing!', assignments[i].id)
                            missing = [ ...missing,
                                { student: student,
                                  assignment: assignments[i]  
                                }
                            ]
                        }else {
                            // console.log('submitted', assignments[i])
                        }
                    }
                }
                return missing
            })
        }
    }
    
    return(
    <div className="tile__missing">
        <div className="tile__missing__headers">
            <p>Student</p>
            <p>Assignment</p>
            
        </div>
        {checkIfRetroExistsForAssignment()}
       { 
            missing.length > 0 ? 
            (
            missing.map((item, index) =>(
                <div className="tile__missing__container" key={index}>
                    <div className="tile__missing__container__student">
                        <p>{item.student.first_name}</p>
                    </div>
                    <a href={item.assignment.url} target="_blank" rel="noopener noreferrer">
                        <div className="tile__missing__container__student__assignment">
                            <p>{item.assignment.name}</p>
                        </div>
                    </a>
                </div>
                ))               
            ):(
            <span>Loading...</span>
            )
        }
    </div>
    )
}

export default MissingWork;