import React, { useState, useEffect } from "react";
import { getCurrentDate, getUser } from "../../utils";

const Attendance = props => {
  const { students, assignments } = props.context;

  const [form, setForm] = useState({
    requiredWarning: false,
    buttonDisable: false
  });

  const [formData, setFormData] = useState([]);

  useEffect(() => {
      if (students.length) {
          setFormData(
            students.map(student => {
                return {
                  date: getCurrentDate("-"),
                  time_slot: "",
                  present: "",
                  notes: "",
                  student_id: null,
                  assignment_id: null,
                  teamlead_id: getUser().id
                }
            })
          )
      }
  }, [students.length])

 const handleAttendance = (event, index) => {
    event.preventDefault();
    const newForm = formData.map((item, fdindex) =>{
            if (fdindex === index){
                return {...item,
                    [event.target.name]: event.target.value}
            } else if (index === 'all') {
                return {...item,
                    [event.target.name]: event.target.value}
            } else {
                return item
            }
        })
    setFormData(newForm)
    // console.log(formData)
 }

  const handleSelect = event => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: Number(event.target.value)
    });
    // console.log(formData);
  };

  const handleChanges = event => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    // console.log(formData);
  };

  const handleSubmit = () => {
    console.log("submitting", formData);
    // setForm({ buttonDisable: true });
    // postTicket(formData, props.context.actions.updateState, () =>
    //   props.history.push("/dashboard/overview")
    // );
  };

  return (
    <div>
      {students.length && assignments.length ? (
        <form className="tile__attendance" method="dialog" onSubmit={handleSubmit}>
          <div className="tile__attendance__container">
            <div className="tile__attendance__container__smallcontainer">
              <div className='date'>
                <label htmlFor="tile__attendance__container__smallcontainer--item">
                  Date:{" "}
                </label>
                <select
                  className="tile__attendance__container__smallcontainer--item--date"
                  name="date"
                >
                  <option value="1">Today</option>
                  <option value="2">Tomorrow</option>
                  <option value="3">Yesterday</option>
                </select>
              </div>
              <div className={`time_slot-${form.requiredWarning}`}>
                  <div>
                       <label htmlFor="checkbox">
                  Start of Class:
                </label>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="time_slot"
                  value="Start"
                  onChange={(e) => handleAttendance(e, 'all')}
                />
                  </div>
               
                <div>
                <label htmlFor="checkbox-stand-up" className="checkbox-stand-up">
                  Stand Up: {' '}
                </label>
                <input
                  type="checkbox"
                  className="checkbox-stand-up"
                  name="time_slot"
                />
                </div>
              </div>
            </div>
            <div className="tile__attendance__container__smallcontainer">
              <label htmlFor="tile__attendance__container__smallcontainer--item">
                Module{" "}
              </label>
              <select
                className="tile__attendance__container__smallcontainer--item--assignments"
                name="assignment_id"
                onChange={handleSelect}
                defaultValue={""}
                
              >
                <option value="" disabled>
                  Select an assignment...
                </option>
                {assignments.map((assignment, index) => {
                  return (
                    <option value={assignment.id} key={index}>
                      {assignment.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="tile__attendance__container__smallcontainer">
              <label htmlFor="tile__attendance__container__smallcontainer--item">
                {students.map((student, index) => {
                    return(
                        <div key={index}>
                            {student.first_name} {student.last_name}
                            <input type='text' name='notes' onChange={(e) => handleAttendance(e, index)}></input>
                            <input type='checkbox'></input>
                        </div>
                    )
                })}
              </label>
              
              
            </div>
            <div className="tile__attendance__container__smallcontainer">
              <input
                className="tile__attendance__container__smallcontainer__submitBtn"
                type="submit"
              />
            </div>
          </div>
        </form>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Attendance;
