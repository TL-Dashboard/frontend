import React, { useState, useEffect } from "react";
import { getCurrentDate, starLogic, postGrade, getUser } from "../../utils";

const updateName = (students, retro, setCurrentName, setFormData) => {
  if (students.length > 0){
    // console.log('student id:', retro.student_id)
    const names = students.filter(student => student.id === retro.student_id)
    // console.log(names)
    setCurrentName({
      first_name: names[0]?.first_name,
      last_name: names[0]?.last_name
    })
    setFormData({
      date: getCurrentDate("-"),
      grade: null,
      notes: "",
      student_id: retro?.student_id,
      assignment_id: retro?.assignment_id,
      teamlead_id: getUser().id,
      retro_id: retro?.id || 0
    })
  }
}

const Review = props => {
    // console.log(props.context.retro);
  // console.log('render review')
  const { students, assignments, retro } = props.context;

  
  // console.log('retro', retro)

  const currentAssignment = assignments[retro.assignment_id - 1];

  const [currentName, setCurrentName] = useState({
    first_name: "",
    last_name: ""
  })

  const [form, setForm] = useState({
    requiredWarning: false,
    buttonDisable: false,
    loaded: false,
    student_id: retro.student_id || 0
  });

  const [formData, setFormData] = useState({
    date: getCurrentDate("-"),
    grade: null,
    notes: "",
    student_id: retro?.student_id,
    assignment_id: retro?.assignment_id,
    teamlead_id: getUser().id,
    retro_id: retro?.id || 0
  });

  // console.log(formData)

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

  const handleSubmit = () => {
    if (!formData.grade) {
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
      postGrade(formData, props.context.actions.updateState, () =>
        props.history.push("/dashboard/overview")
      );
    }
    // console.log(formData);
  };



  useEffect(() => {
    updateName(students, retro, setCurrentName, setFormData)
  }, [retro, students])

  // console.log('form', formData)

  return (
    <div>
      {students.length > 0 && (
        <form className="review" method="dialog" onSubmit={handleSubmit}>
          <div className="review__container">
            <div className="review__container__header">
              <p>Module Review</p>
            </div>
            <div className="review__container__smallcontainer">
              <label htmlFor="review__container__smallcontainer--item">
                Student Name:
              </label>
              {retro?.id ? (
                <div className="review__container__smallcontainer--selected">
                  {currentName.first_name}{" "}
                  {currentName.last_name}
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
