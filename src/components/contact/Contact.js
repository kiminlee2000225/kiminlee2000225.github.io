import React, { Component } from 'react';
import './Contact.css'
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
  render() {
    return (
        <div className="contact" id="contact">
          <div className="contactComponents">
            <div className="titleAlignContacts">
                <div className="contactCenter">
                    <div className="contactWrapper">
                      <div className="contactText">
                      <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={1} >
                      <div className="titleContacts"><span>Contact</span></div>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeInDown" offset={-500} animateOnce={true} delay={500} >
                        <div className="contactMe">
                          <h1>Whether you have any questions, want to chat about your favorite game, or just want to say hi, feel free to contact me!</h1>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" offset={-500} animateOnce={true} delay={800} >
                        <div className="searchTime">
                          <h2>Psst! I’m looking for opportunities in between May 2021 - August 2021!</h2>
                          <div className="resumeLink">
                          <h2>Check out my <a href="assets/files/resume.pdf" target = "_blank">Resume</a></h2>
                          </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" offset={-500} animateOnce={true} delay={800} >
                        <div className="email">
                          <a href={"mailto:kiminlee2000225@gmail.com"} target="_blank"><button className="emailButton">Email me</button></a>
                        </div>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default Contact;