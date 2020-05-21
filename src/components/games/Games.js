import React from 'react';
import "./Games.css"
import { Overlay } from '@blueprintjs/core'; 
import posed, { PoseGroup } from 'react-pose';
import MaysJourney from "./mygames/MaysJourneyGame.js"
import DefenseHorizon from "./mygames/DefenseHorizonGame.js"
import { CSSTransition } from 'react-transition-group';

const rowSize = 3;

const games = [{image: '/assets/images/MaysJourneyImage.png', title: "May's Journey", description: "3D Puzzle Programming Game", component: <MaysJourney/>},
               {image: '/assets/images/DefenseHorizonImage.png', title: "Defense Horizon", description: "FPS Turret Defense Game", component: <DefenseHorizon/>},
               {image: "", title: "Scoops", description: "Mobile Bubble Popper Word Game", component: <DefenseHorizon/>},
               {image: "", title: "Hostage Escape Room", description: "First Person Digital Escape Room", component: <DefenseHorizon/>},
               {image: "", title: "Marble Solitaire", description: "Peg Solitaire", component: <DefenseHorizon/>}];

function Games() {
  const [drawer, setDrawer] = React.useState(null);
  return (
      <div className="games" id="games">
        <div className="gameComponents">
          <div className="titleAlign">
            <div className="title"><span>Games</span></div>
              <div className="gameCenter">
                <div className="gameWrapper">
                  <GamesGrid games={games} setDrawer={setDrawer}/>
                  <CSSTransition in={!!drawer} timeout={500} classNames="popup" unmountOnExit>
                    <Overlay className={"overlayComponent"} hasBackdrop={false} canOutsideClickClose={true} 
                              usePortal={false} isOpen={!!drawer} onClose={() => setDrawer(null)}>
                      {drawer ? (drawer.component) : <></>}
                      <button className="exitButton" onClick={() => setDrawer(null)}>x</button>
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
                                <TileContainer i={i * rowSize + j} key={j}>
                                <Tile game={game} setDrawer={setDrawer} /></TileContainer>)}
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
            <img className="tileImage" src={game.image}/>
            <div className="tileTitle">{game.title}</div>
            <div className="tileDescription">{game.description}</div>
        </div>
      </div>
  )
}

const TileContainer = posed.div({
  enter: {
      y: 0,
      opacity: 1,
      delay: ({ i }) => {
          return 300 + (i * 200);
      },
      transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
      } 
  },
  exit: {
      y: 20,
      opacity: 0,
  },
});

export default Games;