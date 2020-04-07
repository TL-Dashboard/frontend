import React from "react";

import AttendanceForm from "./AttendanceForm.js";
import AlertTile from "./AlertTile.js";
import MissingWork from "./MissingWork.js";

import AttendanceTracker from './AttendanceTracker.js';
import GradeTracker from './GradeTracker.js';

// import withContext from "../../Context";
import RecentSubmissions from "./RecentSubmissions.js";

// const AlertTileWithContext = withContext(AlertTile);

export default function TileContainer(props) {
    
    return (
        <div className="main-container">
            <Tile title="Tickets">
                <AlertTile {...props} />
            </Tile>
            <Tile className="tile" title="Missing Retros">
                <MissingWork {...props}/>
            </Tile>
            <Tile className="tile" title="Attendance">
                <AttendanceForm {...props} />
            </Tile>
            <Tile className="tile" title='Attendance Tracker'>
                <AttendanceTracker {...props} />
            </Tile>
            <Tile className="tile" title='Grade Tracker'>
                <GradeTracker {...props} />
            </Tile>
            <Tile className="tile" title="Recent Submissions">
                <RecentSubmissions {...props}/>
            </Tile>
        </div>
    );
}

const Tile = ({ children, title, ...rest }) => {
    return (
        <div className="tile">
            {title ? <div className="tile__header">{title}</div> : null}
            <div className="tile__body">{children}</div>
        </div>
    );
};
