import React from "react";

const MissingWork = ({context}) => {

    const assignments = context.assignments;
    const students = context.students;

    let missing = []

    function compare(a, b) {
        const itemA = a.assignment?.id;
        const itemB = b.assignment?.id;
      
        let comparison = 0;
        if (itemA > itemB) {
          comparison = 1;
        } else if (itemA < itemB) {
          comparison = -1;
        }
        return comparison * -1;
    }

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
                missing.sort(compare)
                // console.log(missing)
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
            missing.length > 0 && assignments.length > 0  && students.length > 0 ? 
            (
            missing.map((item, index) =>(
                <div className="tile__missing__container" key={index}>
                    <div className="tile__missing__container__student">
                        <p>{item.student.first_name}</p>
                        <p>{item.student.last_name}</p>
                    </div>
                    <a href={item.assignment.url} target="_blank" rel="noopener noreferrer">
                        <div className={`tile__missing__container__student__${item.assignment.type}`}>
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