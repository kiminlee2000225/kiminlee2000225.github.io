import React, { Component } from 'react';
import "./GameInfo.css"

class NarcolepticNummiesGame extends Component {
  render() {
    return (
          <div className="gameContext">
           <div className="gameInfoWrapper">
            <div className="gameTitle">Narcoleptic Nummies</div>
            <img className="gameImage"/>
            <h2>What is Narcoleptic Nummies?</h2>
            <h3>	Narcoleptic Nummies is a 2D platformer puzzle game that reflects the uncontrollable sleep schedule that a person with a narcoleptic
               disorder experiences. This game was created within 48 hours for the 2020 GMTK Game Jam. The theme was "out of control." The world can 
               phase between the dreaming and waking worlds at any time! Narcoleptic Nummies was in the top 15.8% of the ratings for the game jam overall.</h3>
            <h3>Nelson is a narcoleptic with a sweet tooth, on the hunt for his cookies. Sleep hits him uncontrollably. Collect the cookies and watch out for 
              vegetables. But beware! When he’s dreaming, the lovable nummies aren’t what they seem to be anymore… </h3>
            <h3>This project was done as a part of Peach Beach Studios. Peach Beach Studios is a small game developing company made up of seven intrepid
                members. Our mission is to create relaxing but dynamic games with twists on classic tropes. We're based in the heart of Boston and are doing 
                our best to deliver great gaming content.</h3>
            <h2><a href="https://www.youtube.com/watch?v=Z2xOnwZBpgk&feature=youtu.be" target="_blank" className="gameLink">Trailer</a></h2>
            <div className="youtubeVideo" >
              <iframe className="iFrame" src="https://www.youtube.com/embed/Z2xOnwZBpgk" frameBorder="0"/>
            </div>
            <h2><a href="https://github.com/levikap/GMTK-GameJam-2020/tree/dev" target="_blank" className="gameLink">GitHub</a></h2>
            <h2><a href="https://kimin.itch.io/narcoleptic-nummies" target="_blank" className="gameLink">itch.io Game Link</a></h2>
            <h2>Tools used</h2>
            <h3>Unity, C#, itch.io, Notion</h3>
            <h2>What I did</h2>
            <h3>I worked on a team of 6 to create this game within 2 days. I was the only other programmer, so communication and teamwork was key to create 
              a game in such a fast paced environment. Our team had constant and effective communication since we were working on call for most of our time.
               This allowed for a quick back and forth communication on questions, clarifications, and suggestions. For example, I was constantly communicating
                with the arts team to make sure the sizes/pixels were right for the sprites. Our team also used Notion to organize our workflow by labelling 
                tasks as ‘next up’, ‘in progress’, ‘can improve later’, and ‘completed’. We also used Notion to organize our brainstorming ideas and add notes of
                 encouragement to teammates to boost team morale, which was very successful. The encouragements showed appreciation towards each other and
                  celebrated accomplishments throughout the jam. Additionally, we wrote a draft for our game design document on Notion. </h3>
            <h3>For this game jam, we utilized Unity to build the game and GitHub for source control. I worked on player movement, collectable behavior (Cookies/Stars),
               enemy behavior (including movements and position placements for when they swap back to collectables), GameState (progression through levels,
                win/lost state), MainMenu functionality, Pause menu functionality and general bug fixes. Working on these was a fun challenge as every time I was able
                 to complete one component, I was excited to share with the team on what our game is capable of. Similarly, I was eccentric to see the art team’s 
                 updates, which motivated me to complete programming Narcoleptic Nummies in such a time restricted environment. </h3>
            <h2>Challenges / Improvements</h2>
            <h3>There were many challenges that arose during development. First of all, I felt like Narcoleptic Nummies didn’t reach their potential due to the restricted 
              time. Although this game was created during a game jam and the time restriction is just a part of the challenge, I felt like the game could have been 
              made more ‘fun’ if we had more time to iterate on the game. By the time we were ready for playtesting the completed and polished levels, we didn’t have
               enough times to make all the changes we wanted to, such as giving better cues to the players to help progress through the game. Players found it difficult 
               to play at times since the sudden changes of platform made them fall off stage. I was trying to implement a mechanic where the incoming changes to the 
               platform will be shown in a less opacity a second before the change, but I did not have enough time to execute this mechanic. Therefore, in a future game
                jam, I would like to start brainstorming before the game jam begins, even if the game jam is supposed to have a theme. I feel like our team spent a bit too
                 much time on brainstorming, which resulted in us rushing at the end of development. I believe our team can think of a general game idea beforehand, and
                  apply the game jam’s theme into our game. I would like to get a brief idea of a game and even possibly make a prototype to see if the idea is ‘fun’. </h3>
            <h3>I spent a lot of time debugging, which caused me to have an even shorter time for development. There were some big issues with the player colliders, where 
              the player would get stuck on a wall, not be able to jump at times, etc. In the future, I would like to use a CharacterController to avoid some extra codes 
              and procedures to apply the isGrounded field, which determines if the player is landed on a ground. I can also fix collision issues by using the colliders for
               collision, instead of triggers. </h3>
            <h3 className="lastParagraph">Additionally, I would want to think of more unique ideas that make the game more fun and interesting. The game was pretty basic,
             with simple gameplay of collecting materials by moving and jumping around platforms. A possible way to make the game more interesting is by adding unique 
             player movement mechanics, which can allow players to get creative on maneuvering around the stage and avoid sudden appearances of monsters and/or beets, which 
             are considered the enemies of the game. </h3>
            </div>
          </div>
    )
  }
}

export default NarcolepticNummiesGame;