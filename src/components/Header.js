import React, { Component } from 'react'
import logo from '../assets/images/logo.svg';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
      </header>
    )
  }
}

export default Header