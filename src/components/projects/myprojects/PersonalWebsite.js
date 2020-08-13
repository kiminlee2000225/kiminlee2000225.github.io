import React, { Component } from 'react';
import "./ProjectInfo.css"

class PerosnalWebsite extends Component {
  render() {
    return (
          <div className="projectContext">
           <div className="projectInfoWrapper">
            <div className="projectTitle">Personal Portfolio Website</div>
            <h2>What is my Personal Portfolio Website?</h2>
            <h3> This website is my personal portfolio website that showcases my past projects and games, created from scratch with React. 
              It is a scroll-based one page website that helps users better understand who I am, and my achievements. </h3>
            <h2><a href="https://github.com/kiminlee2000225/kiminlee2000225.github.io/tree/react-main" rel="noopener noreferrer" target="_blank" className="projectLink">GitHub</a></h2>
            <h2>Tools used</h2>
            <h3>React, JavaScript, HTML, CSS, GitHub</h3>
            <h2>What I did</h2>
            <h3>I decided to make my portfolio website scroll based for a few reasons. First of all, I wanted to minimize render time caused by jumping from one page 
            to another on a website. As a scroll based website, all components will be rendered in the beginning, then the user is free to view every aspect of the page 
            without having to wait for render time. Another reason I chose my website to be scroll-based is for the modern aesthetic, and the possibility of adding parallax 
            images. Currently, I don’t have any parallax images, but I may add parallax images that fit to the background, which will allow a smoother scrolling interaction 
            feel to the users. </h3>
            <h3>I started off by creating the main pages including Home, About, Projects, Games, Resume, and Contacts. I initially wanted to embed my resume as a pdf file onto 
            my website, but I decided to make it an external link due to the aesthetic challenges of my resume file being black and white. I then added text for each page such
             as the header to get the basic structure of the webpage. For the Projects and Games page, I implemented a grid tile system to display each project/game as its own 
             clickable element as a pop up. I utilized an overlay component for the pop-up effect, so that users can learn more about my projects/games including what I did,
              what tools I used, and challenges.</h3>
            <h3>For the finishing touches, I experimented with various designs with css. I experimented with various colors such as white/orange and black/pink, but ended up 
            choosing the black/light brown color scheme for its soft and casual feel. I finished up developing the webpage with applying css media queries for various mobile sizes. 
            I was able to purchase the domain “kiminlee.com” and host my website through GitHub.</h3>
            <h3>I really enjoyed creating my website because of the flexibility I had from creating this project from scratch by myself. I was able to create my website with my own vision, 
            and with only my developing abilities. I am thankful for my friends who were able to give me feedback for my website to improve the user experience. </h3>
            <h2>Challenges / Improvements</h2>
            <h3 className="lastParagraph"> had trouble setting up the navbar because I wanted it to be in a very specific way. Usually navbars lay on the top of the webpage, but I
             wanted my navbar to be very interactive, where it will appear when the user scrolls down, and disappear when the user scrolls up. For this, I utilized react hooks to 
             set different states of the scroll and determine if the user has scrolled up or not. With this, I was able to make a css class that changed its class name when the
              navbar is hidden or visible. Additionally, I programmed a throttle mechanism for the website to assist in determining the scrolls.</h3>
            </div>
          </div>
    )
  }
}

export default PerosnalWebsite;