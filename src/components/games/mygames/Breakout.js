import React, { Component } from 'react';
import "./GameInfo.css"

class Breakout extends Component {
  render() {
    return (
          <div className="gameContext">
           <div className="gameInfoWrapper">
            <div className="gameTitle">Breakout</div>
            <h2>What is Breakout?</h2>
            <h3>Breakout is a 2D arcade game where the player's goal is to "break" all of the bricks on the screen by bouncing the ball
              from the paddle. Breakout is heavily influenced by the Atari arcade game Pong. 
            </h3>
            <h2><a href="https://github.com/Spring21BuildingGameEngines/monorepo-kiminlee2000225/tree/main/Assignment1_Breakout" rel="noopener noreferrer" target="_blank" className="gameLink">GitHub</a></h2>
            <h2><a href="/assets/links/breakout/annotated.html" rel="noopener noreferrer" target="_blank" className="gameLink">Documentation</a></h2>
            <h2><a href="https://drive.google.com/file/d/1P15fmbZgr8ezoeEdS90RRUQbnCCqQGtH/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="gameLink">Game Link for Mac</a></h2>
            <h2><a href="https://www.youtube.com/watch?v=YpIuLUxFhlg" rel="noopener noreferrer" target="_blank" className="gameLink">Gameplay</a></h2>
            <div className="youtubeVideo" >
              <iframe className="iFrame" title="Breakout Gameplay Video" src="https://www.youtube.com/embed/Lugiaxn9kvY" frameBorder="0"/>
            </div>
            <div className="imagesContainerMarble"> 
            <img className="breakoutImage" src="/assets/images/breakout1.png" alt="Breakout Screenshot"></img>
            <img className="breakoutImage" src="/assets/images/breakout2.png" alt="Breakout Screenshot 2"></img>
            <img className="breakoutImage" src="/assets/images/breakoutLanguage.png" alt="Breakout Language Prompt"></img>
          </div>
            <h2>Tools used</h2>
            <h3>SDL2, C++, Python</h3>
            <h2>What I did</h2>
            <h3>
            This game was created with SDL2 libraries in C++ with a Python build script. I started off the project by creating base class structures, including the Vector2D, Ball, Paddle, Brick,
            and Board class. I then created and implemented the general methods that were required for them. Then, I set up the game.cpp file that handles the main game loop and set up the frame 
            capping management. Next, I added functionalities for rendering the game elements utilizing SDL libraries. Whilst setting this up, I created manager classes for the texture, fonts, and audio
            assets that implemented a singleton class. This was to ensure that all of the assets were loaded only once for the program, avoiding constant reloading of the same assets everytime they were being 
            used. After setting up the general game functionality, I moved on to setting up the game so that it loads levels from a txt file with 1s and 0s. 1 representing a block and 0 representing an empty 
            space. Similarly, I wrote a program to read words and characters from a txt file to map localization languages. Finally, I fine tuned the gameplay by adjusting the speed of the ball/paddle, adjusting
            audio sound, and creating prompts for the player to select a language using the E key for English and D key for Dutch. 
            </h3>
            <h3>
              Generally I felt that this project helped me learn a lot about SDL libraries. With several trial and errors, I was able to set up SDL specific libraries such as SDL_mixer and SDL_ttf to render fonts
              and play audio in my SDL program. There were many things that I learned, but I felt that there are still much more to learn, including writing an SDL program to support the rendering of Asian language characters.
            </h3>
            <h2>Challenges / Improvements</h2>
            <h3 className="lastParagraph">
              There were several challenges that I faced during development. First of all, I ran into multiple issues with rendering Japanese characters when adding in a Japanese
              langauge option. This was due to the char* not supporting wide characters, thus I changed my character type for the langauge texts to be wide characters. 
              However, even after consideration of the wide characters, TTF_RenderUNICODE_Solid had issues with rendering the stored Japanese characters. 
              I believe the issue was with reading and storing the wide characters and converting the wide characters to a unicode in order to print the unique UNICODE characters. Another 
              consideration I had was downloading and utilizing ttf files that supported such Asian langauges, which I had done. Eventually, I decided to 
              support a langauge with only English alphabet (Roman/Latin alphabet) characters. However, I plan to add functionality to support Japanese (and other Asian lanauges) to
              the game. Another challenge I faced was with calculating the collision types for the ball. I needed to calculate the collision type, the direction of the collision, and 
              the offset of how much the ball has collided into the paddle, wall, or brick. I utilized a class Vec2 to store vector position variables to calculate the ball collision and 
              offset. There were a lot of visualization required to program collision detections, but the 2D environment made it so that I only had to worry about 2D components. Finally, 
              I ran into some issues when working with pointers and references, especially when I wanted to create a pointer to the instantiated 2D vector from the LevelLoader to the board
              class. After several trial and errors, I was able to set it up correctly to avoid any segmentation faults. 

              what i'll do differently
            </h3>
            </div>
          </div>
    )
  }
}

export default Breakout;