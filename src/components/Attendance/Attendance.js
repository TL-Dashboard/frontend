import React from "react";
import styled from "styled-components";

/* CSS goes here */
const Wrapper = styled.div` 

    /*alerts box header*/
    .attendance-text {
        background-color: black;
        height: 40px;
        color: white;
        margin-top: 0px;
        margin-bottom: 5px;
        padding: 10px 15px;
        /* box-shadow: 0 8px 6px -6px gray; */
    }
    /*attendance form border, and it's boxes */
    .attendance-container, .smaller-containers {
        text-align: center;
        align-items: center;
        margin: 5px;
        padding: 5px;
    }
    /*individual boxes color*/
    .smaller-containers {
        border: 1px solid lightgray;
        box-shadow: 0 8px 6px -6px gray;
        background-color: #FCFCFC;
    } 
    /*font styling*/
    .attendanceForm {
        color: #7B7B7B;
    }
    /*curving edges for form selects, input, button */
    #dateSelect, #moduleSelect, #studentSelect, #notesInput, #submit-btn {
        border-radius: 5px;
        background-color: #F0F8FF;
    }
    #startInput, #standInput, #presentInput {
        cursor: pointer;
    }
    /*button styling */
    #submit-btn {
        background-color: #00BFFF;
        width: 60%;
        margin-top: 3px;
        padding-top: 3px;
        padding-bottom: 3px;
        color: black;
        border: 1px solid lightgray;
        cursor: pointer;
    }
    /*button hover styling */
    #submit-btn:hover {
        background-color: #80D3FF;
        width: 60%;
        color: #7B7B7B;
    }
`;

const Attendance = () => {
/*other functions */

    /* HTML goes here */
    return(
        <Wrapper>
        <p class="attendance-text">Attendance</p>
        <form class="attendanceForm">
            <div class="attendance-container">
                <div class="smaller-containers">
                    <label for="dateSelect">Date </label>
                        <select id="dateSelect" name="date">
                            <option value='1'>Today</option>
                            <option value='2'>Tomorrow</option>
                            <option value='3'>Yesterday</option>
                        </select>
                </div>
                <div class="smaller-containers">
                    <label for="moduleSelect">Module </label>
                        <select id="moduleSelect" name="module">
                            <option value='1'>WEB30</option>
                            <option value='2'>WEB30</option>
                            <option value='3'>WEB30</option>
                        </select>
                </div>
                <div class="smaller-containers">
                    <label for="startInput">Start of Class</label>
                        <input type='checkbox' id="startInput" name="startClass" defaultChecked />
                    <br/>
                    <label for="standInput">Stand Up</label>
                        <input type='checkbox' id="standInput" name="standUp" defaultChecked />
                    
                </div>
                <div class="smaller-containers">
                    <label for="studentSelect">Student </label>
                        <select id="studentSelect" name="student">
                            <option value='student1'>Jane Doe</option>
                            <option value='student2'>John Smith</option>
                            <option value='student3'>Eleanor Fant</option>
                            <option value='student4'>Eric Widget</option>
                            <option value='student5'>Fig Nelson</option>
                            <option value='student6'>Hans Down</option>
                            <option value='student7'>Theodore Handle</option>
                            <option value='student8'>Guy Mann</option>
                        </select><br/>
                    <label for="presentInput">Present</label>
                        <input type='checkbox' id="presentInput" name="present" defaultChecked />
                    <label>Notes </label>
                        <input type='text' id="notesInput" name="notes" maxLength="35" size="5" />
                </div>
                <div>
                    <input id="submit-btn" type="submit" />
                </div>
            </div>
        </form>
        </Wrapper>
    )
}

export default Attendance;