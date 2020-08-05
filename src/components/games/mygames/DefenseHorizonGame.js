import React, { Component } from 'react';
import "./GameInfo.css"

class DefenseHorizonGame extends Component {
  render() {
    return (
      <div className="gameContext">
      <div className="gameInfoWrapper">
       <div className="gameTitle">Defense Horizon</div>
       <img className="gameImage"/>
       <h2>What is Defense Horizon?</h2>
       <h3>	Defense Horizon is an FPS game with the twist of a tower defense game mechanic. The player must protect The Horizon Tower, 
         a dignity token of the Northern Kingdom, against the waves of enemy’s attack from the Southern Kingdom through night and day. 
         The player is able to utilize and upgrade bows, bombs, and tower durability in the shop to fend off the Southern army. Demonstrate
          your skills and pride as a loyal soldier of the Northern Kingdom by tactically defending the Horizon Tower for glory!</h3>
       <h2><a href="https://youtu.be/PGXGQHrS2Fo" target="_blank" className="gameLink">Trailer</a></h2>
       <div className="youtubeVideo" >
              <iframe className="iFrame" src="https://www.youtube.com/embed/PGXGQHrS2Fo" frameBorder="0"/>
        </div>
       <h2><a href="https://github.com/kiminlee2000225/Defense-Horizon" target="_blank" className="gameLink">GitHub</a></h2>
       <h2><a href="https://developer.cloud.unity3d.com/share/share.html?shareId=WkpFChGqhB" target="_blank"
            className="gameLink">WebGL Game Link - Please set the size to 1920 x 1080</a></h2>
       <h2>Tools used</h2>
       <h3>Unity, C#, Python, Adobe Illustrator, Adobe Photoshop</h3>
       <h2>About</h2>
       <h3>	Defense Horizon was created as a unique mash between FPS games and tower defense games. Making a tower defense game to 3D opened 
         up multiple opportunities for the players. While still holding onto the core gameplay of tower defense games as tactically defending
          off enemies with your available resources for a given amount of time, Defense Horizon also allowed players to rely on their aiming
           skills and 360 degrees spacial awareness to identify shoot down enemies. The players are able to freely explore the open world to 
           find their most effective spot as an archer. </h3>
       <h3>Creating a game that mixes two unique game genres required multiple iterations and balancing that was both challenging and 
         exciting. The game development progress was split into 4 iterations. The prototype, alpha release, beta release, and the gold
          master release. </h3>
       <h2>What I did</h2>
       <h3>	I was in charge of creating and programming the wall functionality, enemy AI, shoot mechanic, player movements, and the slowdown
          weapon functionality. The enemy AI is implemented with a Finite-State Machine (FSM) where each state is attached to an animation 
          for the enemy model. I utilized the navigation mesh (NavMesh) in Unity for the enemies to activate pathfinding towards the tower 
          while avoiding obstacles. The wall functionality was implemented with the usage of MeshRenderers and triggers. Using these allowed
           one wall to be highlighted, which indicated the fact that the user may select the highlighted wall. The triggers acted to determine
            contact with the enemies, and allowed users to upgrade the walls for more health. I was able to program the shooting and moving 
            mechanic with vector mathematics with proper force behaviors. </h3>
       <h2>Challenges / Improvements</h2>
       <h3>One of the balancing issues we came across was the difficulty of the game. Playtesters deemed it was very difficult to beat the game 
         as the enemies seemed to be spawning too quickly. However, even after fixing the spawn rates, the players seemed to be having trouble 
         due to the enemies attacking different parts of the tower. This made it hard for the players to protect all locations of the tower since 
         when the player was defeating the enemies in time in one position of the tower, the other side of the tower was being damaged. To overcome
          this issue, a shop mechanic was implemented so that the players may upgrade their weapons, purchase new weapons, and strengthen the walls
           by increasing their health with gold they collect by defeating enemies. This new mechanic added variety in the player’s tactics, and 
           gave support to be able to defeat the enemies more quicker. We included unique items such as a slow bomb, which splatters pallets that 
           slows enemies when they are walking through them, and the poison arrow which damages the enemies for 5% of their health every second,
            until the enemy dies. </h3>
       <h3 className="lastParagraph">In the future, I would like to develop Defense Horizon into a VR game. Defense Horizon VR will have new mechanics that will let the 
         player immerse themselves into the game world even further. From being able to see the Northern Tower in real life size, having real 360
          degrees spatial and sound awareness that can be used to identify enemy location, and aiming with your hand motions. I envision Defense 
          Horizon VR to look something like the game <a href="https://www.youtube.com/watch?v=X8XPi1ioLlc" 
          style={{textDecoration: 'none', color: "#222626"}}>Castle Must Be Mine</a>, a VR tower defense game where the player views the world
           in a third person perspective. There are so many opportunities for Defense Horizon that I would love to see accomplished through 
           the world of VR. </h3>
       </div>
     </div>
    )
  }
}

export default DefenseHorizonGame;