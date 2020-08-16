import React, { Component } from 'react';
import "./GameInfo.css"

class HostageEscapeRoomGame extends Component {
  render() {
    return (
          <div className="gameContext">
           <div className="gameInfoWrapper">
            <div className="gameTitle">Hostage Escape Room</div>
            <h2>What is Hostage Escape Room?</h2>
            <h3>Hostage Escape Room is a 3D first person hostage-themed escape room game where the player must solve puzzles to escape 
              a room that they have no memory of being in. As the player gets further through their puzzle-solving experience, they 
              gain more clues and info as to how they got themselves into this situation in the first place. Hostage Escape Room is a 
              slow-paced mystery-puzzle-style game that challenges your problem solving skills while having a mafia related storyline.</h3>
            <h2><a href="https://www.youtube.com/watch?v=wHCugdP42j8&feature=youtu.be" rel="noopener noreferrer" target="_blank" className="gameLink">Trailer</a></h2>
            <div className="youtubeVideo" >
              <iframe className="iFrame" title="Hostage Escape Room Trailer Video" src="https://www.youtube.com/embed/wHCugdP42j8" frameBorder="0"/>
            </div>
            <h2><a href="https://www.youtube.com/watch?v=-Hxooc_hbaU&feature=youtu.be" rel="noopener noreferrer" target="_blank" className="gameLink">Gameplay</a></h2>
            <div className="youtubeVideo" >
              <iframe className="iFrame" title="Hostage Escape Room Gameplay Video" src="https://www.youtube.com/embed/-Hxooc_hbaU" frameBorder="0"/>
            </div>
            <h2><a href="https://github.com/kiminlee2000225/EscapeRoom" rel="noopener noreferrer" target="_blank" className="gameLink">GitHub</a></h2>
            <h2><a href="https://developer.cloud.unity3d.com/webgl/webgl.html?shareId=ZJuxmKgvnB" rel="noopener noreferrer" target="_blank" className="gameLink">WebGL Game Link</a></h2>
            <h2><a href="https://docs.google.com/document/d/1uL_qWyUNHGhI39YhLwI79Ei1rQ7-STzm8JgdoEwxMGI/edit?usp=sharing" rel="noopener noreferrer" target="_blank" className="gameLink">Game Design Document</a></h2>
            <h2>Tools used</h2>
            <h3>Unity, C#</h3>
            <h2>What I did</h2>
            <h3>For this game, I initially programmed the player movement, or walking functionality. The player movement was coded with 
              the usage of the CharacterController in Unity. I also programmed the wooden box to break if it comes into contact with the player.
               This was added to act as a surprise or fear factor, to match the mysterious theme of the game. AddExplosionForce was used to 
               create a mini explosion, sending the broken wood pieces flying. Additionally, I implemented the key mechanic where the player 
               can escape from a room when holding a key. This was done through distance calculations and setting the parent of the key object
                to be the player when picked up. Sound effects were added to engage the hearing senses of the players, which also created 
                feedback from the actions made in the game. This enhances the sensation of players feeling like they are inside of the game world.</h3>
            <h2>Challenges / Improvements</h2>
            <h3 className="lastParagraph">I hope to expand this game into a VR setting, where the player can feel like they are actually trapped
             in a room. Auditory cues can be also used as a puzzle. For example, a sound effect with 4 music notes can be the 4 letter code for
              an encrypting puzzle. Incorporating this game into VR will amplify the sensation of being inside of the game world, where the player’s
               head and hand movements will be transferred to the game world, causing greater feedback. The game can be developed into a horror game
                as well, both in and out of VR, with simple additions such as jump scares and time limited puzzles.</h3>
            </div>
          </div>
    )
  }
}

export default HostageEscapeRoomGame;