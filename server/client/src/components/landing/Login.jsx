import React, { Component } from 'react';

import styles from './login.css';

class Login extends Component {

  state = {
    googlePressed: false
  }

  login() {
    this.setState({
      googlePressed: true
    });
    window.location="/auth/google";
  }

  renderGoogleButton() {
    if(this.state.googlePressed) {
      return (
        <img src={require('../../assets/images/btn_google_signin_light_pressed_web.png')} className="googlePressed" />
      );
    }
    else {
      return (
        <img src={require('../../assets/images/btn_google_signin_light_normal_web.png')} className="googleUnpressed" onClick={this.login.bind(this)} />
      );
    }
  }

  render() {
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

export default Login;
