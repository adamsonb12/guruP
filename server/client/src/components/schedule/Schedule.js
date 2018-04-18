import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';
import styles from './schedule.css';

class Schedule extends Component {

  state = {
    selectedDate: Date.now()
  }

  render() {
    console.log(this.state.selectedDate);
    return (
      <div className="scheduleContainer">
        <Navbar />
        <h1>Schedule</h1>
      </div>
    );
  }
}

export default Schedule;
