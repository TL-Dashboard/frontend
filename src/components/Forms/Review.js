import React from "react";

const Review = props => {
  return (
    <div>
      <form className="review">
        <div className="review__container">
          <div>
            <p>TL Form</p>
          </div>

          <div className="review__container__smallcontainer">
            <label htmlFor="review__container__smallcontainer--item">
              Date{" "}
            </label>
            <select
              className="review__container__smallcontainer--item"
              name="date"
            >
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="yesterday">Yesterday</option>
            </select>
          </div>
          <div className="review__container__smallcontainer">
            <label htmlFor="review__container__smallcontainer--item">
              Grade{" "}
            </label>
            <select
              className="review__container__smallcontainer--item"
              name="date"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="review__container__smallcontainer">
            <label>Notes </label>
            <input
              type="text"
              className="review__container__smallcontainer--item"
              name="notes"
              maxLength="50"
              size="22"
            />
          </div>
          <div>
            <input
              className="review__container__smallcontainer__submitBtn"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Review;
