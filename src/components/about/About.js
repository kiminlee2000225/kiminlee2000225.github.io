import React, { Component } from 'react';
import "./About.css"
import PortraitImage from './portrait.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
  render() {
    return (
        <div className="about" id="about">
          <div className="aboutComponents">
            <div className="titleAlignAbout">
              <div className="aboutCenter">
                <div className="aboutWrapper">
                  <div className="aboutText">
                  <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={1}>
                    <div className="titleAbout"><span>About</span></div>
                  </ScrollAnimation>
                     <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={700} offset={250}>
                      <h2>Hi! I’m Kimin, a user-focused software engineer and a player-minded 
                        game developer. I’m currently pursuing a Bachelor of Science degree in
                         <a href="https://www.c4cneu.com" className="highlightedText"> Computer Science & Game Development </a> 
                        at Northeastern University. I’m 
                        passionate about building innovative software and developing breath-taking 
                        and immersive games.</h2>
                      <h2>Currently, I am a software engineer for cloud services co-op at 
                        <a href="https://www.motorolasolutions.com/en_us.html" rel="noopener noreferrer" target="_blank" className="highlightedText"> Motorola Solutions</a>, working as a 
                        full-stack developer.</h2>
                      <h2>Alongside that, I am a Software Engineer/Developer at <a href="https://www.c4cneu.com" className="highlightedText"> Code 4 Community</a>, a Sponsorship member 
                        of <a href="https://hackbeanpot.com" className="highlightedText"> HackBeanpot</a>, and a programmer/game developer for <a className="highlightedText"> Peach Beach Studios</a>.
                      </h2>
                      <h2>When I’m not coding or building games, I’m either jamming to J-Pop/Korean R&B, learning new songs on the guitar,
                        immersing myself in the breathtaking world of video games, or relaxing in Japanese-style 
                        hot springs. Some of my favorite games are Kid Icarus Uprising, League of Legends, Overwatch, FIFA, Disney Villainous, Secret Hitler, and of course, 
                        the Super Smash Bros. series (Incineroar main). 
                      </h2>
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={700} offset={350}>
                    <div className="imageDiv">
                      <img className="portrait" src={PortraitImage}></img>
                  </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;