import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';
import styles from './createappointment.css';
import AppointmentForm from './AppointmentForm';

class CreateAppointment extends Component {

  render() {
    return (
      <div className="scheduleContainer">
        <Navbar />
        <h1>Create a New Appointment</h1>
        <AppointmentForm />
      </div>
    );
  }
}

export default CreateAppointment;
