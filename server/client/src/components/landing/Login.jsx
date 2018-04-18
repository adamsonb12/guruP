import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './login.css';

class Login extends Component {
  state = {
    googlePressed: false,

  };

  componentDidUpdate() {
    console.log('running it');
    if (this.props.auth) {
      console.log('you are logged in', this.props.auth);
      window.location = '/schedule';
    }
  }

  login() {
    this.setState({
      googlePressed: true
    });
    window.location = '/auth/google';
  }

  renderGoogleButton() {
    if (this.state.googlePressed) {
      return (
        <img
          src={require('../../assets/images/btn_google_signin_light_pressed_web.png')}
          className="googlePressed"
        />
      );
    } else {
      return (
        <img
          src={require('../../assets/images/btn_google_signin_light_normal_web.png')}
          className="googleUnpressed"
          onClick={this.login.bind(this)}
        />
      );
    }
  }

  render() {
    console.log('all props', this.props);
    return (
    <div className="mainContainer">
      <div className="loginBox">
      <h1>Guru</h1>
      <h2>Login or Signup</h2>
        {this.renderGoogleButton()}
      </div>
    </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Login);
