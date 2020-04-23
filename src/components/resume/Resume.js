import React, { Component } from 'react';
import "./Resume.css"

class Resume extends Component {
  render() {
    return (
        <div className="resume" id="resume">
          <div className="title"><span>Resume</span></div>
          <h2>Create the external utility hook responsible for triggering scroll updates
This is the most exciting part! We already have our Header’s basic structure coded. Now let’s build a function that will be responsible for setting the scroll listener and for triggering the necessary updates to our previous useState values.
This function will have two main purposes: 1) Register the initial window scroll listener on component mount via a useEffect hook, and 2) Track the exact scroll position of the document’s scrollTop. It will be extracted to its own file so that it is more extensible and can be used in other components if needed. Let’s do this in three steps:
1. Create the function and its scroll hook foundation</h2>
        </div>
    );
  }
}

export default Resume;