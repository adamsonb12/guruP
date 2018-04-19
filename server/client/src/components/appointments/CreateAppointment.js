import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';
import styles from './createappointment.css';
import AppointmentForm from './AppointmentForm';

class CreateAppointment extends Component {
  render() {
    return (
      <div className="scheduleContainer">
        <Navbar />
        <div className="formHolderContainer">
          <div className="createFormContainer">
            <h1>Create a New Appointment</h1>
            <AppointmentForm />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAppointment;
