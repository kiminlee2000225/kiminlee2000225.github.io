import React, { Component } from 'react';
import "./ProjectInfo.css"

class LinGO extends Component {
  render() {
    return (
          <div className="projectContext">
           <div className="projectInfoWrapper">
            <div className="projectTitle">LinGO</div>
            <h2>What is LinGO?</h2>
            <h3>LinGO is an on-demand translator service, connecting live translators with people who require translations in high 
                stake environments such as the doctor’s appointment. Services like Google Translate help us a lot in our basic 
                translation needs, such as understanding song lyrics or translating a phrase to impress your foreign friend. But we have yet to
                 develop technology sophisticated enough to truly replace a human translator.</h3>
            <h3>The goal of this project was to build an on-demand translator app. The inspiration for this app arose from one of our 
                group members sharing about how their parents once had to stay on call for several hours while their grandparents
                 were in the hospital seeing a doctor, so that they could act as a translator. We saw this project as something that 
                 could be extremely beneficial for users.</h3>
            <h2><a href="https://www.youtube.com/watch?v=a8f7xlpFCr0" rel="noopener noreferrer" target="_blank" className="projectLink">linGO Demo</a></h2>
            <div className="youtubeVideo" >
              <iframe className="iFrame" title="LinGO Demo Video" src="https://www.youtube.com/embed/a8f7xlpFCr0" frameBorder="0"/>
            </div>
            <h2><a href="https://github.com/kiminlee2000225/linGO" rel="noopener noreferrer" target="_blank" className="projectLink">GitHub</a></h2>
            <h2>Tools used</h2>
            <h3>Wix, Wix Code, JavaScript, HTML, CSS, Adobe Photoshop, Adobe Illustrator</h3>
            <h2>What I did</h2>
            <h3>LinGO was built over a weekend during HackHarvard 2018. As one of the event sponsors was Wix, they wanted us to use Wix Code as our 
                development platform. So, we decided to take on this challenge and create our software and website using Wix. First of all, the
                 developers and the designers had very different reactions to the platform. The designers found it to be so much easier than coding 
                 a page from scratch. Their drag and drop interface works extremely well and it's very easy to get things to work the way you want. 
                 On the other hand, the developers were continually frustrated with the limitations that Wix Code had. I was mainly part of the design
                  team, but also participated in the development of LinGO. We had restrictions on libraries and packages that we could use, we found 
                  the database to be overly difficult to utilize, the user system was also confusing and some of the user libraries seemed to outright
                   not work (Wix Code was still in Beta at this point). Thus we had to build the user and session token system from scratch. </h3>
            <h3>Being mainly in the design team, I had a fun time designing the website. Like mentioned before, the easy UI/UX structure of Wix made 
                it easy to implement unique designs to the website. However, the development side was a little more challenging. Instead of jumping 
                into development, we had to do a lot of research first about how the platform worked and dive into it's documentation. After that, we 
                found a huge limitation to be the lack of ability to work on the same project altogether. We spent a good deal of time trying to figure
                out the best way to do user authentication with Wix Code because there was a built in user engine but we didn't like everything it 
                provided and also felt it was missing some functionality. </h3>
            <h3>Wix Code had restrictions on libraries and packages that we could use, we found the database to be overly difficult to utilize, the 
                user system was also confusing and some of the user libraries seemed to outright not work as Wix Code was still in Beta during this
                 time. Thus we had to build the user and session token system from scratch. </h3>
            <h3>Working with Wix forced our team to think outside the box and lower our reliability on packages and libraries. We implemented an in-browser 
                peer to peer calling system using WebRTC. This was really interesting to build but again constantly ran into roadblocks with Wix Code.
                 Firstly, we needed to have custom HTML added to our page. Wix Code doesn't allow any interactions with their generated HTML. Instead,
                  we had to embed this code into an IFrame that can't interact with any outside code, which initially should've been fine. However, Chrome 
                  now does not allow IFrames to be given access to things like the microphone or audio without that permission being given in the IFrame.
                   Sadly, Wix Code didn't allow usme to interact with the IFrame. To get around this, we needed to add some JavaScript to the main page that 
                   would add the properties to the IFrame on load. Wix Code doesn't provide any of that kind of functionality. Instead, we found that behind
                    a paid subscription, we could get it to run custom code on the HTML (originally for data collection purposes). With this our team was 
                    able to write a quick script that would add the permission parameters to the IFrame whenever it was added to the DOM.</h3>
            <h2>Challenges / Improvements</h2>
            <h3 className="lastParagraph">Our design-work looked really nice, but we let it pull too much focus from our project. Our user authentication 
            service was both a time drain, and unnecessary. We should've prototyped the important features of our app first, and had the extra information
             put somewhere else. Our app first and foremost should've connected users searching for a translator to find someone who could translate for 
             them. This is what's important for a presentation. The extra information would be helpful for potential users, but that shouldn't have been 
             something we were worried about in this first build. The user system was also unnecessary bulk because it just distracted from what our true 
             purpose is supposed to be, though it was pretty cool to work on. Lessons I will take with me going forward.</h3>
            </div>
          </div>
    )
  }
}

export default LinGO;