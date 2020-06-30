import React, { Component } from 'react';
import "./About.css"
import PortraitImage from './portrait.jpg';

class About extends Component {
  render() {
    return (
        <div className="about" id="about">
          <div className="aboutComponents">
            <div className="titleAlignAbout">
              <div className="aboutCenter">
                <div className="aboutWrapper">
                  <div className="aboutText">
                    <div className="titleAbout"><span>About</span></div>
                      <h2>Hi! I’m Kimin, a user-focused software engineer and a player-minded 
                        game developer. I’m currently pursuing a Bachelor of Science degree in 
                        Computer Science and Game Development at Northeastern University. I’m 
                        passionate about building innovative software and developing breath-taking 
                        and immersive games with a motivated team. </h2>
                      <h2>I’m currently a software engineer (cloud services) ROLE at Avigilon, 
                        a Motorola Solutions Company for. I did this blah blah blah with blah blah blah. 
                        I gained blah blah blah skills for blah blah blah. Additional sentence goes here
                        for temporary extra space on the page.</h2>
                      <h2>Alongside, I am a Testing & Security member at C4C, a Sponsorship member 
                        of HackBeanpot, and an Undergraduate Research Assistant for May’s Journey as
                         a game designer/programmer. 
                      </h2>
                      <h2>When I’m not coding or building games, I’m either BOPPING to J-Pop/Korean R&B, 
                        immersing myself in the breathtaking world of video games, or relaxing in Japanese-style 
                        hot springs. Some of my favorite games are Kid Icarus Uprising, League of Legends, Secret Hitler, and of course, 
                        the Super Smash Bros. series (smth main). 
                      </h2>
                    </div>
                    <div className="imageDiv">
                      <img className="portrait" src={PortraitImage}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;