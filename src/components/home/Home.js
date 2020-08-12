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
                    <h1 class="ml11">
                      <span class="text-wrapper">
                        <span class="line line1"></span>
                        <span class="letters">Hi  I'm</span>
                      </span>
                    </h1>
                    <h1 class="ml12">
                      <span class="text-wrapper">
                        <span class="line_1 line1"></span>
                        <span class="letters3">Kimin</span>
                        <span class="letters2"> Lee.</span>
                      </span>
                    </h1>
                    <h1 class="ml13">
                      <span class="text-wrapper">
                        <span class="line_2 line1"></span>
                        <span class="letters4">I develop</span>
                        <span class="letters5"> Software</span>
                        <span class="letters6"> and</span>
                        <span class="letters7"> Games</span>
                        <span class="letters8">.</span>
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