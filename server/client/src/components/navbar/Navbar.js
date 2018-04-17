import React, { Component } from 'react';

import styles from './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <div className="logoContainer">
          <h1 className="logo">Guru</h1>
        </div>
        <div className="submenusContainer">
          <h3 className="menuItem">Find Jobs</h3>
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
