import React, { Component } from 'react';
import "./GameInfo.css"

class MaysJourneyGame extends Component {
  render() {
    return (
          <div className="gameContext">
           <div className="gameInfoWrapper">
            <div className="gameTitle">May's Journey</div>
            <img className="gameImage"/>
            <h2>What is May's Journey?</h2>
            <h3>May’s Journey is a 3D educational puzzle game that teaches the basics of computer science through puzzle solving 
              and storytelling. The hero, a girl named May, finds herself trapped in a broken game world. There is only one way 
              for May to escape; coding. The player must code in order to interact with objects, solve puzzles, and navigate an
               environmental maze. May’s Journey aims to interest middle to high school students in computer science by teaching 
               them the basics of programming through a unique puzzle-programming gameplay. </h3>
            <h3>May’s Journey has shown great success by winning awards such as the Grand Prize and the Serious Game Category at the 
            MassDiGi Pitch Contest in 2017. I am working with a team of talented game developers who share the same goal of creating
             a game that serves  as an entertainment and an educational tool to support students learn how to code through a fun puzzle 
             game experience. 
            </h3>
            <h2>Tools used</h2>
            <h3>Unity, C#, Python, Maximo</h3>
            <h2><a href="https://maysjourney.com/index.html" style={{textDecoration: 'none', color: "#222626"}}>Game Link</a></h2>
            <h2>What I did</h2>
            <h3>I’ve worked on various aspects of creating this game, ranging from level design/programming, NPC animations, player program 
              interface, and data science. First of all, I designed and programmed several advanced puzzle levels. For example, I built a level
               that requires the players to write a program with a while loop, to teach about the relationship between indefinite iterations and 
               conditional statements. The player must write and modify their program so that a fire-breathing statue will pause at a specific 
               specific location, lighting up a torch for the player to progress through the game. LEVEL_5_1I’ve also worked on the syntax 
               highlighting for the player’s coding interface, making the compiler recognize specific inputs and color coding them, just like how
                any IDEs utilize syntax highlighting. This was done by splitting the player input into keys such as brackets or boolean expressions
                 while temporarily storing the inputted data for inputs that are longer than one character (not separated by any whitespace). 
                 Alongside, I have been a big part of creating the village for May’s Journey. Ive designed and built the interior of various village
                  buildings, while also designing and animating the NPCs using Maximo. Additionally, I have utilized Markov Chain with the game’s 
                  playtest data to predict the most common errors made by the players while programming. This data was collected for both research 
                  on educational games and creating a help tool for the players to utilize when they were stuck on a puzzle. Utilizing pickle, 
                  numpy, and the scikit-learn library, I split the data into predicting and testing data frames for a valid prediction. 
            </h3>
            <h3>Not only did I learn numerous skills regarding game development, I also learned how to work with a team. Communicating mostly 
              through Slack offline and having weekly meetings, our team was able to stay on top of what everyone was working on. Our team utilized
               GitHub as our source control for Unity, allowing us to maintain our large amount of files and data in a structured format. </h3>
            </div>
          </div>
    )
  }
}

export default MaysJourneyGame;