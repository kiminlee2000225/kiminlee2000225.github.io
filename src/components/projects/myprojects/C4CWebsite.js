import React, { Component } from 'react';
import "./ProjectInfo.css"

class C4CWebsite extends Component {
  render() {
    return (
          <div className="projectContext">
           <div className="projectInfoWrapper">
            <div className="projectTitle">Code 4 Community Website</div>
            <h2>What is Code 4 Community?</h2>
            <h3> Code 4 Community (C4C) is a student organization at Northeastern University focused on developing and maintaining software solutions
                 for non-profit organizations within Boston. I am a testing and security member at C4C. </h3>
            <h3>C4C's website was built as a foundational website for anyone to learn about C4C including what
                 C4C does, information on core members, and events hosted by C4C (in the past/future).</h3>
            <h2><a href="https://www.youtube.com/watch?v=o0ekVckdBJA" rel="noopener noreferrer" target="_blank" className="projectLink">Demo for New C4C Website</a></h2>
            <div className="youtubeVideo" >
              <iframe className="iFrame" title="C4C Website Demo Video" src="https://www.youtube.com/embed/o0ekVckdBJA" frameBorder="0"/>
            </div>
            <h2><a href="https://www.youtube.com/watch?v=NYqBBvkUqBk" rel="noopener noreferrer" target="_blank" className="projectLink">Demo for First C4C Website</a></h2>
            <div className="youtubeVideo" >
              <iframe className="iFrame" title="C4C Website Demo Video" src="https://www.youtube.com/embed/NYqBBvkUqBk" frameBorder="0"/>
            </div>
            <h2><a href="https://linktr.ee/c4cneu" rel="noopener noreferrer" target="_blank" className="projectLink">C4C linktree</a></h2>
            <h2><a href="https://www.c4cneu.com" rel="noopener noreferrer" target="_blank" className="projectLink">C4C Website Link</a></h2>
            <h2>Tools used</h2>
            <h3>First Website: Vue, JavaScript, CSS, HTML, Insomnia, PostgreSQL</h3>
            <h3>New Website: React, TypeScript, Figma, JavaScript, HTML, CSS</h3>
            <h2>What I did</h2>
            <h3>First Website:</h3>
            <h3>I worked mainly as a front end developer for this project. This project was done in Vue. I worked on various things such as inserting
                 images to act as parallax images throughout the website, program the core member information tile layout and functionality, creating
                  the navigation bar, and applying design using HTML and CSS. Most of these were simply editing the HTML and CSS files to make the
                   website look pleasing. The navigation bar was created using VueRouter, where the path to each component for the website was connected.
                    I was constantly communicating with the design team to implement their envisioned design for the website. Additionally, I worked 
                    on connecting the front end to the back end using Vuex.Store through Axios. I utilized getters, mutations, and actions to “get” data
                     from endpoints and set them to the proper components by “mutating” the data into the proper format. Alongside, I connected the 
                     database for the events hosted by C4C using Insomnia in a JSON data format. I manually posted the event data to the API using the 
                     Insomnia application. Insomnia served as a great tool since I only had a couple of events to insert into the database. I was also 
                     able to manipulate and change any data using Insomnia. </h3>
            <h3>C4C has weekly standups, where everyone shares what they have been working on for the past week, and what they will be working on the
                 next week. Weekly stand ups were very helpful as it gave everyone a sense of what the project is looking like at the current stage. 
                 It also gives an opportunity for people to ask any questions. C4C runs an agile work environment where we create sprints for the month.
                  When we are reviewing the sprint, we go over what went well and what we could have done better to better our work environment and process.
                  We utilize retro to share our thuoghts anonymously to encourage as much feedback as possible. C4C has been functioning remotely even before
                   the COVID-19 pandemic, which gave us a smooth transition into the strictly remote environment.</h3>
            <h3>New Website: </h3>
            <h3>For our new website, I worked both as a designer and a developer. I was able to design and plan the website structure with Figma, 
              a collaborative design tool. Our team decided to transition from Vue to React, since we wanted to utilize tools that are being used more often in 
              the industry, and to further define our React skills. Additionally, we used Typescript for a simplified JavaScript code, and a good compatibility 
              with Material UI. This was important especially because our goal was to complete this website within 2 weeks, so that people can use our website to 
              apply and be a part of C4C. Almost all of our design was created with Material-UI due to the flexibility of Material UI Cards. My main work was related 
              to the People page. It was important to be able to add and delete members easily and quickly since we were planning to add our new coming members to
               the page. I was able to structure the People page sotthat members can be added and deleted very easily with a “Member” component I created, which 
               requires only a member’s full name, position, email, linkedin, and image. I made the board page design based on polaroids, where each person represents
                a polaroid card. This was created with a high elevation of the card components for each member. The polaroid idea was not planned, but came naturally
                 while messing around with Material-UI. The polaroid design gained positive feedback, so I ended up going through with the design. Additionally, I 
                 created a css hover effect that animates a fade in for the email and linkedin information for each member. Other than the People page, I assisted 
                 with the navbar and the general layout of other pages such as the Home and Jumpstart page. </h3>
            <h2>Challenges / Improvements</h2>
            <h3 className="lastParagraph">The main challenge I faced during development was the fact that I didn’t know how to do most of the things I was implementing. I didn’t know 
                anything about Vue and front end development, so I spent a lot of time researching and asking questions to other members. It took me a lot of 
                time to get to a state where I understood what was going on. Similarly, I didn’t know anything about databases at that time. I also had to 
                research and ask many questions to understand what was going on. Fortunately, C4C is full of talented students who are willing to help others
                 learn. I was able to gain support from the members to grow as a programmer and apply my learnings to this project. I hope to be able to help 
                 other programmers who are in need of help using the knowledge and skills I attained. </h3>
            </div>
          </div>
    )
  }
}

export default C4CWebsite;