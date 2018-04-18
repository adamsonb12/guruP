import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

// Components
import Login from './landing/Login';
import Schedule from './schedule/Schedule';
import FindJobs from './appointments/FindJobs';
import CreateAppointment from './appointments/CreateAppointment';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/findjobs" component={FindJobs} />
            <Route exact path="/findjobs/createappointment" component={CreateAppointment} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
