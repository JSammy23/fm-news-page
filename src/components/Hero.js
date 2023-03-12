import React, { Component } from 'react'
import image from '../assets/images/image-web-3-desktop.jpg'

export class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className="leftCol">
            <img src={image} alt="blocks" />
            <div>
                <h1>The Bright Future of Web 3.0?</h1>
                <div>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. but is it really fulfilling its promise?</p>
                    <button className='btn'>Read More</button>
                </div>
            </div>
        </div>
        <div className="rightCol">

        </div>
      </div>
    )
  }
}

export default Hero