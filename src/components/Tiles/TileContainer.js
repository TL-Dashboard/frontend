import React from "react";

import Attendance from "./Attendance.js";
import AlertTile from "./AlertTile.js";
import MissingWork from "./MissingWork.js";

import AttendanceTile from './AttendanceTile.js';
import GradesTile from './GradesTile.js';

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
                <Attendance {...props} />
            </Tile>
            <Tile className="tile" title='Student Attendance'>
                <AttendanceTile {...props} />
            </Tile>
            <Tile className="tile" title='Student Grades'>
                <GradesTile {...props} />
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
