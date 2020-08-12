import React, { Component } from 'react';
import "./ProjectInfo.css"

class SFFTB extends Component {
  render() {
    return (
          <div className="projectContext">
           <div className="projectInfoWrapper">
            <div className="projectTitle">Speak for the Trees Boston</div>
            <h2>What is Speak for the Trees Boston?</h2>
            <h3>Speak for the Trees Boston (SFFTB) aims to improve the size and health of the urban forest in the greater Boston area,
                 with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data)
                  trees, plant trees, and educate those about trees. Their mission is to improve the size and health of the urban tree
                   canopy in Boston, with a focus on under-resourced and under-canopied neighborhoods.</h3>
            <h2>Partnership with Code 4 Community</h2>
            <h3>Code 4 Community (C4C) built a block reservation system, allowing their volunteers to reserve blocks of trees
                 that they will be able to inventory and then mark them as complete when they are finished collecting the required
                  data. This is a huge step up from their previous tree tracking system, where they had thousands of lines of rows and 
                  columns to identify trees and their locations to assign to workers/volunteers. </h3>
            <div className="youtubeVideo" >
              <iframe className="iFrame" title="Speak for the Trees Demo Video" src="https://www.youtube.com/embed/wUnngAqSp7g" frameBorder="0"/>
            </div>
            <h2><a href="https://www.sfttbos.org/" rel="noopener noreferrer" target="_blank" className="projectLink">Speak for the Trees Boston</a></h2>
            <h2><a href="http://app.sfttbos.org/" rel="noopener noreferrer" target="_blank" className="projectLink">Created Software</a></h2>
            <h2>Tools used</h2>
            <h3>Vue, JavaScript, HTML, CSS, Java, JUnit, PostgreSQL, Apache Maven, Travis CI</h3>
            <h2>What I did</h2>
            <h3>For this project, I worked as a front end developer and as a QA tester. For the front end, I programmed and designed functionalities 
                of the sign up page. I communicated with the design team to apply the design team’s envisioned layout and composition to the software.
                 For the backend, I created JUnit tests to make sure the backend was running smoothly with no errors. Whenever I found errors, I
                  notified the team through Slack and asked for changes. I had a google document that was filled with bugs that I detected, and 
                  suggested possible fixes. I was able to effectively communicate with my team through Slack and utilize GitHub as source control. </h3>
            <h3>C4C has weekly standups, where everyone shares what they have been working on for the past week, and what they will be working on the
                 next week. Weekly stand ups were very helpful as it gave everyone a sense of what the project is looking like at the current stage.
                  It also gives an opportunity for people to ask any questions. C4C runs an agile work environment where we create sprints for the month. 
                  When we are reviewing the sprint, we go over what went well and what we could have done better to better our work environment and 
                  process. We utilize retro to share our thuoghts anonymously to encourage as much feedback as possible. C4C has been functioning 
                  remotely even before the COVID-19 pandemic, which gave us a smooth transition into the strictly 
                  remote environment. </h3>
            <h2>Challenges / Improvements</h2>
            <h3 className="lastParagraph">A big challenge for me was figuring out how to utilize Mockito to test the backend for SFFTB. I had to learn how to mock classes 
                and utilize a class created to mock the database in order to test methods. This took me a lot of time to get used to as I was only 
                familiar with the basic form of unit tests, which were tests using assert equals. Luckily, I had a very supportive team to guide me 
                throughout the process. I learned various testing skills that I will be able to utilize to further strengthen the quality of software
                 programs. </h3>
            </div>
          </div>
    )
  }
}

export default SFFTB;