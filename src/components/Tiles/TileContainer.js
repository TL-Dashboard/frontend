import React from "react";

import Attendance from "./Attendance.js";
import AlertTile from "./AlertTile.js";
import MissingWork from "./MissingWork.js";

import AttendanceChart from './AttendanceChart';
import GradesChart from './GradesChart';

import withContext from "../../Context";
import RecentSubmissions from "./RecentSubmissions.js";

const AlertTileWithContext = withContext(AlertTile);

export default function TileContainer() {
    return (
        <div className="main-container">
            <Tile title="Alerts">
                <AlertTileWithContext />
            </Tile>
            <Tile className="tile" title="Missing Work">
                <MissingWork />
            </Tile>
            <Tile className="tile" title="Attendance">
                <Attendance />
            </Tile>
            <Tile title='Student Attendance' className="tile">
                <AttendanceChart />
            </Tile>
            <Tile title='Student Grades' className="tile">
                <GradesChart />
            </Tile>
            <Tile className="tile" title="Recent Submissions">
                <RecentSubmissions/>
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
