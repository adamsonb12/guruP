import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Navbar from '../navbar/Navbar';
import AppointmentField from './AppointmentField';

class AppointmentForm extends Component {

  renderFields() {
    return(
      <div>
        <Field type="text" name="customerName" component={AppointmentField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Appointment Form</h3>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'appointmentForm'
})(AppointmentForm);

// customerName,
//       _guru: req.user.id,
//       startTime,
//       dateScheduled: Date.now(),
//       prive,
//       locationAddress,
//       rooms: rooms.map(room => ({ roomName, roomType, whiteGlove, notes }))
