import React, { useState } from "react";
import { getCurrentDate, starLogic } from "../../utils";

const Review = ({ context }) => {
  //   console.log(context.retro.assignment_id);
  const { assignments, retro, students, user } = context;

  const currentAssignment = assignments[retro.assignment_id - 1];

  const [form, setForm] = useState({
    requiredWarning: false,
    buttonDisable: false
  });

  const [formData, setFormData] = useState({
    date: getCurrentDate("-"),
    grade: null,
    notes: "",
    student_id: null,
    assignment_id: null,
    teamlead_id: null,
    retro_id: null
  });

  const [stars, setStars] = useState([false, false, false]);

  const handleStars = (event, star) => {
    event.preventDefault();
    starLogic(star, stars, setStars);
    setForm({
      ...form,
      requiredWarning: false
    });
    setFormData({
      ...formData,
      grade: star + 1
    });
  };

  const handleChanges = event => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    console.log(formData);
  };

  const handleSubmit = () => {
    if (retro?.id) {
      setFormData({
        ...formData,
        student_id: students[retro.student_id - 1].id,
        assignment_id: retro.assignment_id,
        teamlead_id: user.id,
        retro_id: retro.id
      });
    } else {
      setFormData({
        ...formData,
        teamlead_id: user.id,
        retro_id: 0 //need to set backend to allow nulls?
      });
    }

    if (!formData.grade) {
      setForm({
        ...form,
        requiredWarning: true
      });
    } else {
      setForm({
        ...form,
        buttonDisable: true
      });
      console.log("submitting");
    }
    console.log(formData);
  };

  return (
    <div>
      {students.length && (
        <form className="review" method="dialog" onSubmit={handleSubmit}>
          <div className="review__container">
            <div>
              <p>Module Review</p>
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
                  onChange={handleChanges}
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
                Module:
              </label>
              {retro?.id ? (
                <div className="review__container__smallcontainer--selected">
                  {currentAssignment.name}
                </div>
              ) : (
                <select
                  className="review__container__smallcontainer--item"
                  name="assignment_id"
                  onChange={handleChanges}
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
              <label htmlFor="review__container__smallcontainer--item">
                {form.requiredWarning ? (
                  <span style={{ color: "red" }}>Grade required!</span>
                ) : (
                  <span>Grade:</span>
                )}
              </label>
              <div className="stars">
                <span
                  className={`star-${stars[0]}`}
                  onClick={e => handleStars(e, 0)}
                >
                  {"\u2605"}
                </span>
                <span
                  className={`star-${stars[1]}`}
                  onClick={e => handleStars(e, 1)}
                >
                  {"\u2605"}
                </span>
                <span
                  className={`star-${stars[2]}`}
                  onClick={e => handleStars(e, 2)}
                >
                  {"\u2605"}
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
                placeholder="Why did you give the score that you did?"
                onChange={handleChanges}
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
      )}
    </div>
  );
};

export default Review;
