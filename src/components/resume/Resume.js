import React, { Component } from 'react';
import $ from 'jquery';
import "./Resume.css"

class Resume extends Component {
componentDidMount() {
  setTimeout(() => {
    const wrapper = $('#wrapper');
    wrapper.removeClass('is-loading');
    const body = $('body');
    body.removeClass('modal-active');
  }, 50);
}
  

  render() {
    return (
        <div className="resume" id="resume">
          <div className="resumeComponents">
            <div className="titleAlign">
              <div className="resumeCenter">
                <div className="resumeWrapper">
                  <div className="title"><span>Resume</span></div>
                    <div className="resumeDisplay">
                      <section className="resumePage" id="main">
                        <object data="assets/files/Resume.pdf#view=FitH" type="application/pdf" 
                          className="resumePdf">
                          <embed src="assets/files/Resume.pdf#view=FitH" type="application/pdf"
                          className="resume-pdf"/>
                        </object>
                      </section>
                    </div>
                  </div>
                </div>
              </div>


            {/* <div className="title"><span>Resume</span></div>
            <section className="resumePage" id="main">
              <object data="assets/files/Resume.pdf#view=FitH" type="application/pdf" 
                className="resumePdf">
                <embed src="assets/files/Resume.pdf#view=FitH" type="application/pdf"
                  className="resume-pdf"/>
              </object>
            </section> */}
          </div>
        </div>
    );
  }
}

export default Resume;