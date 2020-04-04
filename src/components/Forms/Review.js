import React, { useState } from "react";

const Review = ({ context }) => {
  //   console.log(context.retro.assignment_id);

  const [form, setForm] = useState({
    notes: '',
    buttonDisable: false
  });

  const [stars, setStars] = useState([
      false, false, false
  ]);

  const { assignments, retro, students } = context;

  const currentAssignment = assignments[retro.assignment_id - 1];

//   console.log(currentAssignment);

  const handleStars = (event, star) => {
      event.preventDefault()
      if (star === 0){
        if (stars[0]){
            setStars([
                stars[0] = true,
                stars[1] = false,
                stars[2] = false
            ])
        } else{
            setStars([
                stars[0] = true,
                stars[1] = false,
                stars[2] = false
            ])
        }
      } else if (star === 1){
        if (stars[1]){
            setStars([
                stars[0] = true,
                stars[1] = false,
                stars[2] = false
            ])
        } else{
            setStars([
                stars[0] = true,
                stars[1] = true,
                stars[2] = false
            ])
        }
      } else if (star === 2){
          if (stars[2]){
            setStars([
                stars[0] = true,
                stars[1] = true,
                stars[2] = false
            ])
        } else{
            setStars([
                stars[0] = true,
                stars[1] = true,
                stars[2] = true
            ])
        }
      }
  }

  const handleChanges = event => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    console.log(form.notes)
  };

  const handleSubmit = () => {
    console.log("submitting");
    setForm({
      ...form,
      buttonDisable: true
    });
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
                    {students[retro.student_id - 1].first_name} {students[retro.student_id - 1].last_name}
                </div>
            ):(
                <select
                className="review__container__smallcontainer--item"
                name="date"
                >
                    {
                        students.map((student, index) => {
                            return <option value={student.id} key={index}>{student.first_name} {student.last_name}</option>
                        })
                    }
                </select>
            )}
          </div>
          <div className="review__container__smallcontainer">
            <label htmlFor="review__container__smallcontainer--item">
              Module:
            </label>
            {!retro?.id ? (
                <div className="review__container__smallcontainer--selected">
                    {currentAssignment.name}
                </div>
            ):(
                <select
                className="review__container__smallcontainer--item"
                name="module"
                onChange={handleChanges}
                required
                >
                    <option disabled value='test'>Choose an assignment</option>
                    {
                        assignments.map((assignment, index) => {
                            return <option value={assignment.id} key={index}>{assignment.name}</option>
                        })
                    }
                </select>
            )}
          </div>
          <div className="review__container__smallcontainer">
            <label htmlFor="review__container__smallcontainer--item">
              Grade:
            </label>
            <div className='stars'>
                <span className={`star-${stars[0]}`} onClick={e => handleStars(e, 0)}>{"\u2605"}</span>
                <span className={`star-${stars[1]}`} onClick={e => handleStars(e, 1)}>{"\u2605"}</span>
                <span className={`star-${stars[2]}`} onClick={e => handleStars(e, 2)}>{"\u2605"}</span>
            </div>
          </div>

          <div className="review__container__smallcontainer">
            <label>Notes </label>
            <input
              type="text"
              className="review__container__smallcontainer--item"
              name="notes"
              maxLength="50"
              size="22"
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
