import React from "react";

import Attendance from "../../Attendance/Attendance.js";
import AlertTile from './AlertTile';

import withContext, { Provider } from '../../../Context';

const AlertTileWithContext = withContext(AlertTile);

export default function TileContainer() {
    return (
        <div className="tile-container">
            <Tile title="Alerts">
                <AlertTileWithContext />
            </Tile>
            <Tile className="tile">
                List of students who have not submitted most recent retro
            </Tile>
            <div className="tile">
                <Attendance />
            </div>
            <div className="tile">Tile</div>
            <div className="tile">Tile</div>
            <div className="tile">Tile</div>
        </div>
    );
}

const Tile = ({ children, title }) => {
    return (
      <div className='tile'>
        {title ? (
          <div className='tile__header'>
            { title }
          </div>
        ) : (null)}
        <div className='tile__body'>
          {children}
        </div>
      </div>
    )
  }