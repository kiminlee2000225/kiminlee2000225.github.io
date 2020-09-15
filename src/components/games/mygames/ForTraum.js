import React, { Component } from 'react';
import "./GameInfo.css"

class ForTraum extends Component {
  render() {
    return (
          <div className="gameContext">
           <div className="gameInfoWrapper">
            <div className="gameTitle">For Traum</div>
            <h2>What is For Traum?</h2>
            <h3>For Traum Is a 2D platforming shooter game with a 2.5D art style with a split between the foreground (2D) and background (3D) with a parallax effect.
               The player will explore the city of Traum by following the story of Silica, an advanced, synthetic lifeform who looks anatomically identical
                to a human being. As Silica ventures through the mega-city of Traum, she begins to question the morality of the very organization she was 
                created to serve. There is an emphasis on the storyline of Silica exploring the vast world of Traum, which are conveyed through the visual
                 novel mechanic, cutscene animations, and breathtaking artworks. </h3>
            <h3>I am currently working with a team made up of students from USC (University of Southern California), Northeastern University, and CSULA 
              (California State University, Los Angeles). This game is currently in progress, aiming to be released in December 2020. I am working as a 
              programmer and a game developer/designer for the project. </h3>
            <h2>Tools used</h2>
            <h3>Unity, C#, GitKraken</h3>
            <div className="art">
              <h2>Concept Art & Illustrations</h2>
              <h2>Cutscenes & Sketches</h2>
              <div className="imagesContainer"> 
                <img className="industrialGif" src="/assets/images/ForTraum/industrial.gif" alt="industrial gif"/>
              </div>
              <h3>Joshua Lac</h3>
              <div className="imagesContainer"> 
                <img className="forTraumArt1" src="/assets/images/ForTraum/industrial_custscene_colorcomps.png" alt="industrial cutscene"/>
              </div>
              <h3>Annie Huang & Ada Lin</h3>
              <div className="imagesContainer"> 
                <img className="forTraumArt1" src="/assets/images/ForTraum/industrial_riot.png" alt="industrial riot"/>
              </div>
              <h3>Annie Huang</h3>
              <div className="imagesContainer">
              <img className="forTraumArt1" src="/assets/images/ForTraum/City_Landscape_01.jpg" alt="city landscape"/>
              </div>
              <h3>Joshua Lac</h3>
              <h2>Character Designs</h2>
              <div className="imagesContainer"> 
                <img className="forTraumArt3" src="/assets/images/ForTraum/SilicaF.jpg" alt="Silica sketch"/>
              </div>
              <h3>Jacob Yi</h3>
              <div className="imagesContainer"> 
                <img className="forTraumArt4" src="/assets/images/ForTraum/Silica_color_comps.jpg" alt="Silica colored sketch"/>
              </div>
              <h3>Jacob Yi</h3>
              <div className="imagesContainer"> 
                <img className="forTraumArt5" src="/assets/images/ForTraum/Ada_02_Gauntlet.png" alt="Silica guantlet sketch"/>
              </div>
              <h3>Ada Lin</h3>
              <div className="imagesContainer"> 
                <img className="forTraumArt6" src="/assets/images/ForTraum/silicamask_mockups.jpg" alt="Silica mask sketch"/>
              </div>
              <h3>Annie Huang</h3>
              <h2>In-Game</h2>
              <div className="imagesContainer"> 
                <img className="forTraumArt1" src="/assets/images/ForTraum/parallax.png" alt="parallax"/>
              </div>
              <div className="imagesContainer"> 
                <img className="forTraumArt1" src="/assets/images/ForTraum/controls.png" alt="controls"/>
              </div>
              <h2>City of Traum</h2>
              <div className="imagesContainer"> 
                <img className="forTraumArt1" src="/assets/images/ForTraum/Babel_01_01.jpg" alt="Traum 1"/>
              </div>
              <h3>Joshua Lac</h3>
              <div className="imagesContainer"> 
                <img className="forTraumArt1" src="/assets/images/ForTraum/Babel_02.jpg" alt="Traum 2"/>
              </div>
              <h3>Joshua Lac</h3>
              <h3 className="lastParagraph"/>
            </div>
            </div>
          </div>
    )
  }
}

export default ForTraum;