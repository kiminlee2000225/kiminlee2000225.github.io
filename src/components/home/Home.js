import React, { Component } from 'react';
import './Home.css'
import scrollDownImage from './scrollDownImage.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

class Home extends Component {
  render() {
    return (
        <div className="home" id="home">
          <div className="homeComponents">
          <div className="titleAlign">
              <div className="homeCenter">
                  <div className="homeWrapper">
                    <div className="scrollButton"> 
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={5900} offset={60}>
                      <ScrollAnimation animateIn="bounce" animateOnce={true} delay={5910} offset={60}>
                        <img className="scrollImage" alt="Scroll Down Image" src={scrollDownImage}/>
                      </ScrollAnimation>
                    </ScrollAnimation>
                    </div>
                    <div className="introText">
                    <h1 className="ml11">
                      <span className="text-wrapper">
                        <span className="line line1"></span>
                        <span className="letters">Hi  I'm</span>
                      </span>
                    </h1>
                    <h1 className="ml12">
                      <span className="text-wrapper">
                        <span className="line_1 line1"></span>
                        <span className="letters3">Kimin</span>
                        <span className="letters2"> Lee.</span>
                      </span>
                    </h1>
                    <h1 className="ml13">
                      <span className="text-wrapper">
                        <span className="line_2 line1"></span>
                        <span className="letters4">I develop</span>
                        <span className="letters5"> Software</span>
                        <span className="letters6"> and</span>
                        <span className="letters7"> Games</span>
                        <span className="letters8">.</span>
                      </span>
                    </h1>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    );
  }
}

export default Home;