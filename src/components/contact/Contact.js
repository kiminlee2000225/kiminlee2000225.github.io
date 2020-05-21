import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
  render() {
    return (
        <div className="contact" id="contact">
          <div className="contactComponents">
            <div className="titleAlign">
              <div className="title"><span>Contact</span></div>
                <div className="contactCenter">
                    <div className="contactWrapper">
                      <div className="contactText">
                        <div className="contactMe">
                          <h1>Whether you have any questions, want to chat about your favorite game, or just want to say hi, feel free to contact me!</h1>
                        </div>
                        <div className="searchTime">
                          <h2>Psst! I’m looking for opportunities in between May 2021 - August 2021!</h2>
                        </div>
                        <div className="email">
                          <a href={"mailto:kiminlee2000225@gmail.com"}><button className="emailButton">Email me!</button></a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
{/* 
            <div className="title"><span>Contact</span></div>
            <div className="contactText">
              <div className="contactMe">
                <h1>Whether you have any questions, want to chat about your favorite game, or just want to say hi, feel free to contact me!</h1>
              </div>
              <div className="searchTime">
                <h2>Psst! I’m looking for opportunities in between May 2021 - August 2021!</h2>
              </div>
              <div className="email">
                <a href={"mailto:kiminlee2000225@gmail.com"}><button>Email me!</button></a>
              </div>
            </div> */}
          </div>
        </div>
    );
  }
}

export default Contact;