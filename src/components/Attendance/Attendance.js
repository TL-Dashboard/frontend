import React from "react";
import styled from "styled-components";

/* CSS goes here */
const Wrapper = styled.div` 

    div {
        margin: 5px;
        padding: 3px;
    } 
    .attendanceForm, p {
            font-family: 'Roboto', sans-serif;
            font-size: 1.3rem;
    }
`;

const Attendance = () => {
/*other functions */

    /* HTML goes here */
    return(
        <Wrapper>
        <p><strong>Attendance</strong></p>

        <form class="attendanceForm">
            <div>
                <label for="dateSelect">Date</label>
                    <select id="dateSelect" name="date">
                        <option value='1'>Today</option>
                        <option value='2'>Tomorrow</option>
                        <option value='3'>Yesterday</option>
                    </select>
            </div>
            <div>
                <label for="presentInput">Present
                <input type='checkbox' id="presentInput" name="present" /></label>
            </div>
            <div>
                <label>Notes
                <input type='text' id="notesInput" name="notes" maxLength="20" /></label>
            </div>
            <div>
                <label>Name</label>
            </div>

            <div>
                <input type="submit" />
            </div>
        </form>
        </Wrapper>
    )
}

export default Attendance;