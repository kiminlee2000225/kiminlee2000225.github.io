import React, { Component } from 'react';
import "./About.css"
import PortraitImage from './portrait.jpg';

class About extends Component {
  render() {
    return (
        <div className="about" id="about">
          <div className="aboutComponents">
            <div className="title"><span>About</span></div>
          <div className="imageDiv">
              <img className="portrait" src={PortraitImage}></img>
          </div>
          <h2>Do you see how we left that first useState argument blank? We won’t actually be using that value because we will be grabbing the scrollTop directly. In addition, we will pass our function a callback so that it can return the scroll data back to th
2. A
Our function wi
Our functik function, passing back the previous and current scroll values to our  component so that it can update its dynamic classNames:</h2>
          </div>
        </div>
    );
  }
}

export default About;