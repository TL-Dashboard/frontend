import React from "react";

import Attendance from "../../Tiles/Attendance";
import AlertTile from "../../Tiles/AlertTile";
import MissingWork from "../../Tiles/MissingWork.js";

import AttendanceChart from '../../Tiles/AttendanceChart';
import GradesChart from '../../Tiles/GradesChart';

import withContext, { Provider } from "../../../Context";

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
            <Tile title='Tile6' className="tile">Tile</Tile>
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
