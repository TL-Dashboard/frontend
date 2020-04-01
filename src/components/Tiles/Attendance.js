import React from "react";
import styled from "styled-components";



const Attendance = () => {

    /* HTML goes here */
    return(
        <div>
        <form className="tile__attendance">
            <div className="tile__attendance__container">
                <div className="tile__attendance__container__smallcontainer">
                    <label for="tile__attendance__container__smallcontainer--item">Date </label>
                        <select className="tile__attendance__container__smallcontainer--item" name="date">
                            <option value='1'>Today</option>
                            <option value='2'>Tomorrow</option>
                            <option value='3'>Yesterday</option>
                        </select>
                </div>
                <div className="tile__attendance__container__smallcontainer">
                    <label for="tile__attendance__container__smallcontainer--item">Module </label>
                        <select className="tile__attendance__container__smallcontainer--item" name="module">
                            <option value='1'>WEB30</option>
                            <option value='2'>WEB30</option>
                            <option value='3'>WEB30</option>
                        </select>
                </div>
                <div className="tile__attendance__container__smallcontainer">
                    <label for="tile__attendance__container__smallcontainer--item">Start of Class</label>
                        <input type='checkbox' className="tile__attendance__container__smallcontainer--item" name="startClass" defaultChecked />
                    <br/>
                    <label for="tile__attendance__container__smallcontainer--item">Stand Up</label>
                        <input type='checkbox' className="tile__attendance__container__smallcontainer--item" name="standUp" defaultChecked />
                    
                </div>
                <div className="tile__attendance__container__smallcontainer">
                    <label for="tile__attendance__container__smallcontainer--item">Student </label>
                        <select className="tile__attendance__container__smallcontainer--item" name="student">
                            <option value='student1'>Jane Doe</option>
                            <option value='student2'>John Smith</option>
                            <option value='student3'>Eleanor Fant</option>
                            <option value='student4'>Eric Widget</option>
                            <option value='student5'>Fig Nelson</option>
                            <option value='student6'>Hans Down</option>
                            <option value='student7'>Theodore Handle</option>
                            <option value='student8'>Guy Mann</option>
                        </select><br/>
                    <label for="tile__attendance__container__smallcontainer--item">Present</label>
                        <input type='checkbox' className="tile__attendance__container__smallcontainer--item" name="present" defaultChecked />
                    <label>Notes </label>
                        <input type='text' className="tile__attendance__container__smallcontainer--item" name="notes" maxLength="35" size="5" />
                </div>
                <div className="tile__attendance__container__smallcontainer">
                    <input className="tile__attendance__container__smallcontainer__submitBtn" type="submit" />
                </div>
            </div>
        </form>
        </div>
    )
}

export default Attendance;