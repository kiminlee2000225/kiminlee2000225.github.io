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
                      <ScrollAnimation animateIn="fadeInDown" offset={-500} animateOnce={true} delay={300} >
                        <div className="contactMe">
                          <h1>Whether you have any questions, want to chat about your favorite game, or just want to say "hi", feel free to contact me!</h1>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" offset={-500} animateOnce={true} delay={400} >
                        <div className="searchTime">
                          <div className="resumeLink">
                            <h2>Psst! I’m looking for opportunities in between <a href={null}>May 2021 - August 2021!</a></h2>
                          </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" offset={-500} animateOnce={true} delay={400} >
                          <div className="email">
                            <h2>Check out my <a href="assets/files/Resume.pdf" target = "_blank">Resume!</a></h2>
                          </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" offset={-500} animateOnce={true} delay={400} >
                          <div className="icons">
                            <div className="icon">
                              <a href="https://www.linkedin.com/in/kiminlee/" rel="noopener noreferrer" target="_blank">
                                <img alt="Linkedin" className="iconImageLinkedin" src="/assets/images/linkedin.png"/>
                              </a>
                            </div>
                            <div className="icon">
                              <a href={"mailto:kiminlee2000225@gmail.com"} rel="noopener noreferrer" target="_blank">
                                <img alt="Email" className="iconImage" src="/assets/images/mail.png"/>
                              </a>
                            </div>
                            <div className="icon">
                              <a href="https://github.com/kiminlee2000225" rel="noopener noreferrer" target="_blank">
                                <img alt="GitHub" className="iconImage" src="/assets/images/github.png"/>
                              </a>
                            </div>
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