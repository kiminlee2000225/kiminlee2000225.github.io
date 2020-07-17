import React, { Component } from 'react';
import "./GameInfo.css"

class ScoopsGame extends Component {
  render() {
    return (
          <div className="gameContext">
           <div className="gameInfoWrapper">
            <div className="gameTitle">Scoops</div>
            <img className="gameImage"/>
            <h2>What is Scoops?</h2>
            <h3>Scoops is a 2D puzzle bubble shooter game word game with an ice cream theme. The player must form words with the letter
               bubbles he/she/they shoot, to gain points based on a similar point-system to Scrabble. </h3>
            <h3>Shoot ice cream scoops to create words while the clock ticks down. You'll earn points for using more rare letters and 
              making longer words. How high can you score?</h3>
            <h3>This project was done as a part of Peach Beach Studios. Peach Beach Studios is a small game developing company made up 
              of seven intrepid members. Our mission is to create relaxing but dynamic games with twists on classic tropes. We're based
               in the heart of Boston and are doing our best to deliver great gaming content via smartphone.</h3>
            <h2><a href="https://youtu.be/PGXGQHrS2Fo" style={{textDecoration: 'none', color: "#222626"}}>Gameplay Video</a></h2>
            <div className="youtubeVideo" >
              <iframe className="iFrame" src="https://www.youtube.com/embed/uflovP2H-bM" frameBorder="0"/>
            </div>
            <h2><a href="https://github.com/kiminlee2000225/Scoops" style={{textDecoration: 'none', color: "#222626"}}>GitHub</a></h2>
            <h2>Tools used</h2>
            <h3>Unity, C#</h3>
            <h2>What I did</h2>
            <h3>I programmed the aiming and shooting of the bubble, including the functionality of the scoop (bullet) returning to t
              he shooting position when having contact with a bubble. This was done through colliders and vector forces. Because the game
               is in 2D, the main focus was with the 2D vectors, but the z-axis vector was utilized to avoid contact for some of the 
               bubbles, determining their depth. Since Scoops is a bubble popping game, I also had to implement the wall bounce mechanic.
                This was done through programming the reflecting vector and applying a force to the scoop (bullet) to change trajectory.
                 I also programmed an algorithm where it will calculate and add the points based on the word submitted. Each letter has
                  its unique point, similar to the scrabble letter point system. The point is programmed to be added to the player’s overall
                   score.</h3>
            <h3>Some other things I worked on is programming the grid layout for the bubbles, to be placed in a specific format to match the 
              ideal bubble popper layout. This was done through setting offsets on certain bubbles in a nested loop. Additionally, I worked 
              on the pause menu, utilizing the Time class.</h3>
            <h2>Challenges / Improvements</h2>
            <h3 className="lastParagraph">One of the challenges we faced was simply the fact that the game was not “fun”. The task of forming 
            words by aiming and selecting which letters to choose was interesting as it is tied with the player’s knowledge of existing words, 
            but the gameplay soon got stale. We believe this is because of the repetitive gameplay without any twist that makes the gameplay 
            unique and fun every time the game is played. We decided to implement ice cream orders, where the word that must be created with 
            the bubbles is given to the player. The orders are words that can be formed with the shootable bubbles and the player must form 
            these words by shooting the necessary bubbles. The orders are very similar to the ones in Overcooked!, where the player must cook 
            the dishes that are given as orders. We decided to make this another game mode, since the difficulty level drops as players are not 
            required to utilize their knowledge of words. This game mode is aimed more towards young players, who may still be in the developing 
            stage, to learn more words. The original mode is aimed towards players who want to challenge themselves by wanting to achieve the
             highest score. Another challenge we faced is that we ended up having to iterate our game several times during development. We 
             realized this was due to lack of iteration and prototype playtesting. In the future, we will have a clearer goal, with a physical 
             playable prototype to determine if the game idea is well suited for a fun game. </h3>
            </div>
          </div>
    )
  }
}

export default ScoopsGame;