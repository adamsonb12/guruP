import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';
import styles from './findJobs.css';

class FindJobs extends Component {

  goCreateNewAppointment() {
    window.location = '/findjobs/createappointment';
  }

  render() {
    return (
      <div className="scheduleContainer">
        <Navbar />
        <div className="centeredContainer findjobsContainer">
          <h1>Find Jobs</h1>
          <h3>We're sorry, this feature hasn't been implemented yet. In the meantime, create custom jobs to add them to your schedule.</h3>
          <button className="btn btn-success" onClick={this.goCreateNewAppointment.bind(this)}>Create Job</button>
        </div>
      </div>
    );
  }
}

export default FindJobs;
