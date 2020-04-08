import React, { useState } from "react";
import { getCurrentDate, starLogic, postRetro, getUser } from "../../utils";

const Retro = props => {
  //console.log(context.retro.assignment_id);
  //console.log('render review')
  const { assignments, retro, students } = props.context;

  const currentAssignment = assignments[retro.assignment_id - 1];

  const [form, setForm] = useState({
    requiredWarning: false,
    buttonDisable: false
  });

  const [formData, setFormData] = useState({
    date: getCurrentDate("-"),
    url: null,
    mood: null,
    notes: "",
    student_id: students[retro?.student_id - 1]?.id,
    assignment_id: retro?.assignment_id,
    teamlead_id: getUser().id,
  });

  const [stars, setStars] = useState([false, false, false]);

  const handleStars = (event, star) => {
    event.preventDefault();
    starLogic(star, stars, setStars, true);
    setForm({
      ...form,
      requiredWarning: false
    });
    setFormData({
      ...formData,
      mood: star + 1
    });
    // console.log(formData)
  };

  const handleSelect = event => {
      event.preventDefault()
      setFormData({
        ...formData,
        [event.target.name]: Number(event.target.value)
      });
      // console.log(formData);
  }

  const handleChanges = event => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.mood) {
      setForm({
        ...form,
        requiredWarning: true
      });
    } else {
      setForm({
        ...form,
        buttonDisable: false
      });
      // console.log("submitting");
      postRetro(formData, props.context.actions.updateState, () =>
        props.history.push("/dashboard/overview")
      );
    }
    // console.log(formData);
  };

  return (
    <div>
      {students.length && (
        <form className="review" onSubmit={(e) => {handleSubmit(e)}}>
          <div className="review__container">
            <div className="review__container__header">
              <p>Retro Review</p>
            </div>
            <div className="review__container__smallcontainer">
              <label htmlFor="review__container__smallcontainer--item">
                Student Name:
              </label>
              {retro?.id ? (
                <div className="review__container__smallcontainer--selected">
                  {students[retro.student_id - 1].first_name}{" "}
                  {students[retro.student_id - 1].last_name}
                </div>
              ) : (
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
              )}
            </div>
            <div className="review__container__smallcontainer">
              <label htmlFor="review__container__smallcontainer--item">
                {retro?.id ? (
                  <span>
                    {currentAssignment.type.replace(/^\w/, c =>
                      c.toUpperCase()
                    )}
                    :
                  </span>
                ) : (
                  <span>Assignment:</span>
                )}
              </label>
              {retro?.id ? (
                <div
                  className={`review__container__smallcontainer--${currentAssignment.type}`}
                >
                  <a href={retro.url} target="_blank" rel="noopener noreferrer">{currentAssignment.name}</a>
                </div>
              ) : (
                <select
                  className="review__container__smallcontainer--item"
                  name="assignment_id"
                  onChange={handleSelect}
                  defaultValue={""}
                  required
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
              )}
            </div>
            <div className="review__container__smallcontainer">
              <label>Url: </label>
              <input
                type="text"
                className="review__container__smallcontainer--item"
                name="url"
                maxLength="2048"
                placeholder="Submission URL"
                required
                onChange={handleChanges}
              />
            </div>
            <div className="review__container__smallcontainer">
              <label htmlFor="review__container__smallcontainer--item">
                {form.requiredWarning ? (
                  <span style={{ color: "red" }}>Please enter your mood:</span>
                ) : (
                  <span>Mood:</span>
                )}
              </label>
              <div className="mood">
                <span
                  className={`mood-${stars[0]}`}
                  onClick={e => handleStars(e, 0)}
                >
                  {"\uD83D\uDE25"}
                </span>
                <span
                  className={`mood-${stars[1]}`}
                  onClick={e => handleStars(e, 1)}
                >
                  {"\uD83D\uDE42"}
                </span>
                <span
                  className={`mood-${stars[2]}`}
                  onClick={e => handleStars(e, 2)}
                >
                  {"\uD83D\uDE0E"}
                </span>
              </div>
            </div>
            <div className="review__container__smallcontainer">
              <label>Notes: </label>
              <textarea
                type="text"
                className="review__container__smallcontainer--item"
                name="notes"
                maxLength="2048"
                placeholder="How do you feel you did on this assignment?"
                onChange={handleChanges}
              />
            </div>
            <div>
              <button
                className="review__container__smallcontainer__submitBtn"
                type="button"
                disabled={form.buttonDisable}
                onClick={handleSubmit}
              >
                Submit
                </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Retro;