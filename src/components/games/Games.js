import React from 'react';
import "./Games.css";
import { Overlay } from '@blueprintjs/core'; 
import { PoseGroup } from 'react-pose';
import { CSSTransition } from 'react-transition-group';
import MaysJourney from "./mygames/MaysJourneyGame.js";
import DefenseHorizon from "./mygames/DefenseHorizonGame.js";
import NarcolepticNummies from "./mygames/NarcolepticNummiesGame.js";
import Scoops from "./mygames/ScoopsGame.js";
import HostageEscapeRoom from "./mygames/HostageEscapeRoomGame.js";
import MarbleSolitaire from "./mygames/MarbleSolitaireGame.js";
import ScrollAnimation from 'react-animate-on-scroll';

let rowSize = 3;
var mq = window.matchMedia(`(max-width: 812px)`);
if(mq.matches) {
  rowSize = 2;
} else {
  rowSize = 3;
}


const games = [{image: '/assets/images/NN.png', title: "Narcoleptic Nummies", description: "2D Platformer", component: <NarcolepticNummies/>},
              {image: '/assets/images/MaysJourneyImage.png', title: "May's Journey", description: "3D Puzzle Programming Game", component: <MaysJourney/>},
               {image: '/assets/images/DefenseHorizonImage.png', title: "Defense Horizon", description: "FPS Turret Defense Game", component: <DefenseHorizon/>},
               {image: "/assets/images/ScoopsImage.png", title: "Scoops", description: "Mobile Bubble Popper Word Game", component: <Scoops/>},
               {image: "/assets/images/HostageEscapeRoomImage.png", title: "Hostage Escape Room", description: "First Person Digital Escape Room", component: <HostageEscapeRoom/>},
               {image: "/assets/images/MarbleSolitaireImage.png", title: "Marble Solitaire", description: "Peg Solitaire", component: <MarbleSolitaire/>}];

function Games() {
  const [drawer, setDrawer] = React.useState(null);
  return (
      <div className="games" id="games">
        <div className="gameComponents">
          <div className="titleAlignGames">
            <div className="gameCenter">
              <div className="gameWrapper">
                <div className="gameText">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="titleGames"><span>Games</span></div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300} duration={1} offset={450}>
                  <GamesGrid games={games} setDrawer={setDrawer}/>
                </ScrollAnimation>
                </div>
                  <CSSTransition in={!!drawer} timeout={500} classNames="popup" unmountOnExit>
                    <Overlay className={"overlayComponent"} hasBackdrop={false} canOutsideClickClose={true} 
                              usePortal={false} isOpen={!!drawer} onClose={() => setDrawer(null)}>
                      <button className="exitButton" onClick={() => setDrawer(null)}>x</button>
                      {drawer ? (drawer.component) : <></>}
                    </Overlay>
                  </CSSTransition>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

function GamesGrid({games, setDrawer}) {
  const grid = formatGrid(games);
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => games.length > 0 ? setIsVisible(true) : setIsVisible(false), [games, setIsVisible]);

  return (
      <div className="gridContainer">
          <div className="gridWrapper">
              <div className="gridContent">
                  <PoseGroup>
                  {grid.map((row, i) => 
                      <div className="gridTile" key={i}>
                          <PoseGroup flipMove={false}>
                              {isVisible && row.map((game, j) => 
                                <Tile key={j} game={game} setDrawer={setDrawer} />)}
                          </PoseGroup>
                      </div>)}
                  </PoseGroup>
              </div>
          </div>
      </div>
  )
}

function formatGrid(games) {
  const res = [];
  let row = [];
  for (let i = 0; i < games.length; i++) {
      row.push(games[i]);
      if ((i + 1) % rowSize === 0) {
          res.push(row);
          row = [];
      }
  }
  if (row.length > 0) {
      res.push(row);
  }
  return res;
}

function Tile({game, setDrawer}) {
  return(
      <div className="tile">
        <div className="tileInner" onClick={() => setDrawer(game)}>
            <img className="tileImage" alt="game image" src={game.image}/>
            <div className="tileTitle">{game.title}</div>
            <div className="tileDescription">{game.description}</div>
        </div>
      </div>
  )
}

export default Games;