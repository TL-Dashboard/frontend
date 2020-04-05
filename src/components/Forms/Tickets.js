import React, { useState, useEffect } from "react";
import { getCurrentDate, getUser, getSLs, postTicket } from "../../utils";

const Tickets = props => {
  const { students, sectionleads } = props.context;

  const [form, setForm] = useState({
    buttonDisable: false
  });

  const [formData, setFormData] = useState({
    date: getCurrentDate("-"),
    posted_by: `${getUser().first_name} ${getUser().last_name}`,
    type: "",
    description: "",
    status: "In-Progress",
    sectionlead_id: null,
    teamlead_id: getUser().id,
    student_id: null
  });

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
    console.log("submitting");
    setForm({ buttonDisable: true });
    postTicket(formData, props.context.actions.updateState, () =>
      props.history.push("/dashboard/overview")
    );
  };

  useEffect(() => {
    getSLs(props.context.actions.updateState, getUser().cohort_id);
  }, [props.context.actions.updateState]);

  return (
    <div>
      {students.length && sectionleads.length ? (
        <form className="review" method="dialog" onSubmit={handleSubmit}>
          <div className="review__container">
            <div className="review__container__header">
              <p>Create New Ticket</p>
            </div>
            <div className="review__container__smallcontainer">
              <label htmlFor="review__container__smallcontainer--item">
                Student Name:
              </label>
              <select
                className="review__container__smallcontainer--item"
                name="student_id"
                defaultValue={""}
                onChange={handleSelect}
                required
              >
                <option value="" disabled>
                  Select a student...
                </option>
                {students.map((student, index) => {
                  return (
                    <option value={student.id} key={index}>
                      {student.first_name} {student.last_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="review__container__smallcontainer">
              <label htmlFor="review__container__smallcontainer--item">
                Section Lead Name:
              </label>
              <select
                className="review__container__smallcontainer--item"
                name="sectionlead_id"
                defaultValue={""}
                onChange={handleSelect}
                required
              >
                <option value="" disabled>
                  Select an SL...
                </option>
                {sectionleads.map((sl, index) => {
                  return (
                    <option value={sl.id} key={index}>
                      {sl.first_name} {sl.last_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="review__container__smallcontainer">
              <label htmlFor="review__container__smallcontainer--item">
                Ticket Type:
              </label>
              <select
                className="review__container__smallcontainer--item"
                name="type"
                defaultValue={""}
                onChange={handleChanges}
                required
              >
                <option value="" disabled>
                  Select a subject...
                </option>
                <option value="Support Hours">
                  Support Hours
                </option>
                <option value="Attendance">
                  Attendance
                </option>
                <option value="Grades">
                  Grades
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>
            <div className="review__container__smallcontainer">
              <label>Description: </label>
              <textarea
                type="text"
                className="review__container__smallcontainer--item"
                name="description"
                maxLength="2048"
                placeholder="What is this ticket about?"
                onChange={handleChanges}
                required
              />
            </div>
            <div>
              <input
                className="review__container__smallcontainer__submitBtn"
                type="submit"
                disabled={form.buttonDisable}
              />
            </div>
          </div>
        </form>
      ):(
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Tickets;
