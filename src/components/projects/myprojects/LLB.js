import React, { Component } from 'react';
import "./ProjectInfo.css"

class LLB extends Component {
  render() {
    return (
          <div className="projectContext">
           <div className="projectInfoWrapper">
            <div className="projectTitle">Lucy's Love Bus</div>
            <h2>What is Lucy's Love Bus?</h2>
            <h3>Lucy’s Love Bus (LLB) improves quality of life for children with cancer or other life-threatening illnesses with 
                integrative therapies like massage, meditation, acupuncture, music therapy, and therapeutic horseback riding. 
                Integrative therapies ease children’s pain and anxiety during and after traditional medical treatments. Their 
                mission is to improve quality of life for children with cancer and life-threatening illness, to support their 
                families, and to mobilize the next generation of cancer activists.</h3>
            <h2>Partnership with Code 4 Community</h2>
            <h3>Code 4 Community (C4C) created the event planning and ticket purchasing system for all the events hosted by 
                Lucy's Love Bus for the children and their families.</h3>
            <h2><a href="https://youtu.be/FwkpEpVPNPs" rel="noopener noreferrer" target="_blank" className="projectLink">Demo</a></h2>
            <div className="youtubeVideo" >
              <iframe className="iFrame" title="Lucy's Love Bus Demo" src="https://www.youtube.com/embed/wUnngAqSp7g" frameBorder="0"/>
            </div>
            <h2><a href="https://lucyslovebus.org" rel="noopener noreferrer" target="_blank" className="projectLink">Lucy's Love Bus</a></h2>
            <h2><a href="http://lovebusprograms.org/" rel="noopener noreferrer" target="_blank" className="projectLink">Created Software</a></h2>
            <h2>Tools used</h2>
            <h3>Vue, JavaScript, HTML, CSS, Java, JUnit, PostgreSQL, Apache Maven, Travis CI</h3>
            <h2>What I did</h2>
            <h3>For this project, I worked mostly a front-end developer and worked on designing the interfaces. I also made some JUnit tests 
                in the backend to make sure that the code was running correctly. I communicated with the design team to structure the software
                 in an aesthetically pleasing manner. </h3>
            <h3>C4C has weekly standups, where everyone shares what they have been working on for the past week, and what they will be working
                 on the next week. Weekly stand ups were very helpful as it gave everyone a sense of what the project is looking like at the
                  current stage. It also gives an opportunity for people to ask any questions. C4C runs an agile work environment where we create
                   sprints for the month. When we are reviewing the sprint, we go over what went well and what we could have done better to better
                    our work environment and process. We utilize retro to share our thuoghts anonymously to encourage as much feedback as possible. 
                    C4C has been functioning remotely even before the COVID-19 pandemic, which gave us a smooth 
                    transition into the strictly remote environment. </h3>
            <h2>Challenges / Improvements</h2>
            <h3 className="lastParagraph">An issue I came across while working on implementing the design of LLB was communication with the design 
            team. At one point, I misinterpreted the design team’s vision for the main page, and designed it in a way that the design team did not 
            want. I was notified of this when I was almost done working on the design feature, which caused me to almost redo the whole design process.
             I learned to make sure to constantly communicate with the team to make sure we are working towards the same goal. In the future, I will 
             communicate with the design team by sharing a screenshot of what the front-end design currently looks like every 3-4 days</h3>
            </div>
          </div>
    )
  }
}

export default LLB;