import React from "react";
import styled from "styled-components";

const Wrapper1 = styled.div`
    .missing-work {
        background-color: black;
        color: white;
        margin-top: 0px;
        margin-bottom: 5px;
        padding: 15px;
        box-shadow: 0 8px 6px -6px gray;
    }
    .missing-work-text {
        text-align: center;
        color: black;
    }
    .missing-work-students {
        color: black;
    }
`;

const MissingWork = () => {
    return(
    <Wrapper1>
        
        <p className="missing-work-text">These students have missing modules/retros</p>
        <ul className="missing-work-students">

            <li>John Smith</li>

            <li>Eric Widget</li>
            <li>Fig Nelson</li>
            <li>Hans Down</li>

            <li>Guy Mann</li>
        </ul>
    </Wrapper1>
    )
}

export default MissingWork;