import React, { useState, useEffect } from "react";
import { getCurrentDate, getUser, postAttendance } from "../../utils";

const Attendance = props => {
  const { students, assignments, attendanceTaken } = props.context;

  const [form, setForm] = useState({
    startOfClass: false,
    standUp: false,
    requiredWarning: false,
    buttonDisable: false,
    unit: "",
    unitSelected: false
  });

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (students.length) {
      setFormData(
        students.map(student => {
          return {
            date: getCurrentDate("-"),
            time_slot: "",
            present: "true",
            notes: "",
            student_id: student.id,
            assignment_id: null,
            teamlead_id: getUser().id
          };
        })
      );
    }
  }, [students]);

  const handleAttendance = (event, index, present) => {
    event.stopPropagation();
    const newForm = formData.map((item, fdindex) => {
      if (fdindex === index) {
        if (present === "present") {
            if (item.present === "true"){
                return {...item, [event.target.name]: "false"}
            }else {
                return { ...item, [event.target.name]: "true"};
            }
        } else {
          return { ...item, [event.target.name]: event.target.value };
        }
      } else if (index === "all") {
        return { ...item, [event.target.name]: event.target.value };
      } else if (index === "all number") {
        console.log("numbers", index);
        return { ...item, [event.target.name]: Number(event.target.value) };
      } else {
        return item;
      }
    });
    setFormData(newForm);
    // console.log(formData)
  };

  const handleCheckbox = (event, index) => {
    console.log("checkbox", event.target.value);
    if (event.target.value === "Start") {
      setForm({
        ...form,
        startOfClass: true,
        standUp: false,
        requiredWarning: false
      });
      handleAttendance(event, index);
    } else if (event.target.value === "Stand up") {
      setForm({
        ...form,
        startOfClass: false,
        standUp: true,
        requiredWarning: false
      });
      handleAttendance(event, index);
    }
  };

  const assignmentsList = () => {
    return (
      <select
        className="tile__attendance__container__smallcontainer--item--assignments"
        name="assignment_id"
        onChange={e => handleAttendance(e, "all number")}
        defaultValue={""}
        disabled={!form.unitSelected}
        required
      >
        <option value="" disabled>
          Select an assignment...
        </option>
        {assignments.map(
          (assignment, index) =>
            assignment.unit === form.unit && (
              <option value={assignment.id} key={index}>
                {assignment.name}
              </option>
            )
        )}
      </select>
    );
  };

  const handleChanges = event => {
    event.stopPropagation();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      unitSelected: true
    });
    console.log(form.unit);
  };

  const handleSubmit = () => {
    console.log("submitting", formData);
    if (form.standUp !== true && form.startOfClass !== true) {
      // console.log(form.standUp, form.startOfClass)
      setForm({ ...form, requiredWarning: true });
    } else {
        postAttendance(formData, props.context.actions.updateState);
        props.context.actions.updateState("attendanceTaken", true);
    }
  };

  return (
    <div>
      {students.length && assignments.length ? (
        <form
          className="tile__attendance"
          method="dialog"
          onSubmit={handleSubmit}
        >
          <div className="tile__attendance__container">
            <div className="tile__attendance__container__smallcontainer">
              <div className="date">
                <label htmlFor="tile__attendance__container__smallcontainer--item">
                  Date:{" "}
                </label>
                <select
                  className="tile__attendance__container__smallcontainer--item--date"
                  name="date"
                  onChange={e => handleAttendance(e, "all")}
                >
                  <option value={getCurrentDate("-")}>
                    {getCurrentDate("-")}
                  </option>
                  <option value={getCurrentDate("-", -1)}>
                    {getCurrentDate("-", -1)}
                  </option>
                  <option value={getCurrentDate("-", -2)}>
                    {getCurrentDate("-", -2)}
                  </option>
                </select>
              </div>
              <div className={`time_slot-${form.requiredWarning}`}>
                <div>
                  <label>Start of Class:
                  <input
                    type="checkbox"
                    name="time_slot"
                    value="Start"
                    checked={form.startOfClass}
                    onChange={e => handleCheckbox(e, "all")}
                  />
                  <span className="checkmark-start" ></span>
                  </label>
                </div>

                <div>
                  <label>
                    Stand Up:{" "}
                  <input
                    type="checkbox"
                    name="time_slot"
                    value="Stand up"
                    checked={form.standUp}
                    onChange={e => handleCheckbox(e, "all")}
                  ></input>
                  <span className="checkmark-stand-up"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="tile__attendance__container__smallcontainer">
              <label htmlFor="tile__attendance__container__smallcontainer--item">
                Unit:{"  "}
              </label>
              <select
                className="tile__attendance__container__smallcontainer--item--assignments"
                name="unit"
                onChange={e => handleChanges(e)}
                defaultValue={""}
                required
              >
                <option value="" disabled>
                  Select unit...
                </option>
                <option value="Web Fundamentals">
                  Unit 1 - Web Fundamentals
                </option>
                <option value="Web Applications I">
                  Unit 2 - Web Applications I
                </option>
              </select>
            </div>
            <div className="tile__attendance__container__smallcontainer">
              <label htmlFor="tile__attendance__container__smallcontainer--item">
                Module:{"            "}
              </label>
              {form.unit === "Web Fundamentals" && assignmentsList()}
              {form.unit === "Web Applications I" && assignmentsList()}
            </div>
            <div className="tile__attendance__container__smallcontainer">
              <div className="students">
                <div className="students--labels">
                  <label
                    htmlFor="tile__attendance__container__smallcontainer--item--students"
                    id="student"
                  >
                    Student:
                  </label>
                  <label
                    htmlFor="tile__attendance__container__smallcontainer--item--students"
                    id="notes"
                  >
                    Notes:
                  </label>
                  <label
                    htmlFor="tile__attendance__container__smallcontainer--item--students"
                    id="present"
                  >
                    Present:
                  </label>
                </div>
                <div className="students--list">
                  {students.map((student, index) => {
                    return (
                      <div className="students--list--container" key={index}>
                        <div className="names">
                          {student.first_name} {`${student.last_name}`}
                        </div>
                        <textarea
                          className="notes"
                          type="text"
                          name="notes"
                          onChange={e => handleAttendance(e, index)}
                        ></textarea>
                        <label>
                        <input
                          type="checkbox"
                          name="present"
                          value="true"
                          defaultChecked
                          onChange={e => handleAttendance(e, index, "present")}
                        ></input>
                        <span className="checkmark"></span>
                        </label>
                      </div>
                    );
                  })}
                  {/* start test additional students
                  <div className="students--list--container">
                    <div className="names">Test Test</div>
                    <textarea
                      className="notes"
                      type="text"
                      name="notes"
                      onChange={e => handleAttendance(e)}
                    ></textarea>
                    <input
                      type="checkbox"
                      name="present"
                      value="true"
                      onChange={e => handleAttendance(e)}
                    ></input>
                  </div>
                  <div className="students--list--container">
                    <div className="names">Test Test</div>
                    <textarea
                      className="notes"
                      type="text"
                      name="notes"
                      onChange={e => handleAttendance(e)}
                    ></textarea>
                    <input
                      type="checkbox"
                      name="present"
                      value="true"
                      onChange={e => handleAttendance(e)}
                    ></input>
                  </div>
                  end test additional students */}
                </div>
              </div>
            </div>
            <div
              className="tile__attendance__container__smallcontainer"
              id="submit"
            >
              {attendanceTaken ? (
                <div id="success">Attendance taken, thank you!</div>
              ) : (
                <input
                  className="tile__attendance__container__smallcontainer__submitBtn"
                  type="submit"
                />
              )}
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
