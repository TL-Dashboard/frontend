import React from "react";

import Attendance from "./Attendance.js";
import AlertTile from "./AlertTile.js";
import MissingWork from "./MissingWork.js";

import withContext, { Provider } from "../../Context";
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
            <Tile className="tile">Tile</Tile>
            <Tile className="tile">Tile</Tile>
            <Tile className="tile" title="Recent Submissions">
                <RecentSubmissions/>
            </Tile>
        </div>
    );
}

const Tile = ({ children, title }) => {
    return (
        <div className="tile">
            {title ? <div className="tile__header">{title}</div> : null}
            <div className="tile__body">{children}</div>
        </div>
    );
};