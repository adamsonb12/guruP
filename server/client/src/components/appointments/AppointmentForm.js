import React, { Component } from 'react';
import { reduxForm, Field, FormSection } from 'redux-form';
import _ from 'lodash';

import Navbar from '../navbar/Navbar';
import AppointmentField from './AppointmentField';

const BASE_FIELDS = [
  { name: 'customerName', label: 'Customer Name', type: 'text' },
  { name: 'startTime', label: 'Start Date and Time', type: 'date' },
  { name: 'price', label: 'Price', type: 'text' }
];

const ADDRESS_FIELDS = [
  { name: 'lineOne', label: 'Address Line 1', type: 'text' },
  { name: 'lineTwo', label: 'Address Line 2', type: 'text' },
  { name: 'city', label: 'City', type: 'text' },
  { name: 'state', label: 'State', type: 'text' },
  { name: 'zip', label: 'Zipcode', type: 'text' }
]; 

class AppointmentForm extends Component {
  renderFields() {
    return (
      <div>
        {_.map(BASE_FIELDS, ({ label, name, type }) => {
          return (
            <Field
              key={name}
              component={AppointmentField}
              type={type}
              label={label}
              name={name}
            />
          );
        })}

        <FormSection name="address">
          {_.map(ADDRESS_FIELDS, ({ label, name, type }) => {
            return (
              <Field
                key={name}
                component={AppointmentField}
                type={type}
                label={label}
                name={name}
              />
            );
          })}
        </FormSection>
      </div>
    );
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit" className="btn btn-primary submit">
            Submit
          </button>
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
//       price,
//       locationAddress,
//       rooms: rooms.map(room => ({ roomName, roomType, whiteGlove, notes }))
