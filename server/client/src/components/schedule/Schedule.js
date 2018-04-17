import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';
import styles from './schedule.css';

class Schedule extends Component {
  render() {
    return (
      <div className="scheduleContainer">
        <Navbar />
        <h1>Schedule</h1>
      </div>
    );
  }
}

export default Schedule;
