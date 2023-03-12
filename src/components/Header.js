import React, { Component } from 'react'
import logo from '../assets/images/logo.svg';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <nav>
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
        </nav>
      </header>
    )
  }
}

export default Header