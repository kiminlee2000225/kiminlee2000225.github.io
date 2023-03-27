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
                     <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300} offset={250}>
                      <h2>Hi! I’m Kimin, a user-focused software engineer and a player-minded 
                        game developer. I’m currently a simulations software engineer at <a href="https://everydayrobots.com/" className="highlightedText"> Everyday Robots </a> at 
                        <a href="https://x.company/" className="highlightedText"> X, the Moonshot Factory</a> (previously called Google X). I’m 
                        passionate about building innovative software and developing breath-taking 
                        and immersive games.</h2>
                      <h2>I have experiences working as a full-stack cloud services software engineer at
                        <a href="https://www.motorolasolutions.com/en_us.html" rel="noopener noreferrer" target="_blank" className="highlightedText"> Motorola Solutions</a>, and a Software Engineer/Developer at <a href="https://www.c4cneu.com" className="highlightedText"> Code 4 Community</a>.</h2>
                      <h2>Alongside that, I was a game programmer for <a href="https://www.ricegames.net/" className="highlightedText"> Rice Games</a>, working on <a href="https://www.shujinkou.net/" className="highlightedText"> Shujinkou</a>.
                      </h2>
                      <h2>When I’m not coding or building games, I’m either jamming to J-Pop/Korean R&B, learning new songs on the guitar,
                        immersing myself in the vast world of video games, or relaxing in Japanese-style 
                        hot springs. Some of my favorite games are Kid Icarus Uprising, League of Legends, Overwatch, FIFA, Overcooked, Disney Villainous, Secret Hitler, and of course, 
                        the Super Smash Bros. series (Incineroar main). I've also recently been exploring VTubers!
                      </h2>
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300} offset={350}>
                    <div className="imageDiv">
                      <img alt="portrait" className="portrait" src={PortraitImage}></img>
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