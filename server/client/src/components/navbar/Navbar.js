import React, { Component } from 'react';

import styles from './navbar.css';

class Navbar extends Component {

  goHome() {
    window.location = ('/schedule');
  }

  render() {
    return (
      <div className="navbarContainer">
        <div className="logoContainer" onClick={this.goHome.bind(this)}>
          <h1 className="logo">Guru</h1>
        </div>
        <div className="submenusContainer">
          <a href="/findjobs">
            <h3 className="menuItem">Find Jobs</h3>
          </a>
          <a href="/schedule">
            <h3 className="menuItem">Calendar</h3>
          </a>
          <h3 className="menuItem">Profile</h3>
          <a href="/api/logout">
            <h3 className="menuItem">Logout</h3>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
