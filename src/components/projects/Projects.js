import React, { Component } from 'react';
import "./Projects.css"
import { Overlay } from '@blueprintjs/core'; 
import posed, { PoseGroup } from 'react-pose';
import { CSSTransition } from 'react-transition-group';
import Bento from "./myprojects/Bento.js";
import SFFTB from "./myprojects/SFFTB.js";
import LLB from "./myprojects/LLB.js";
import C4CWebsite from "./myprojects/C4CWebsite.js";
import LinGO from "./myprojects/LinGO.js";

const rowSize = 3;

const projects = [{image: '/assets/images/bento2.png', title: "Bento", description: "Recipe Builder Software", component: <Bento/>},
                  {image: '/assets/images/sfft.png', title: "Speak for the Trees Boston", description: "Tree Block Reservation System", component: <SFFTB/>},
                  {image: '/assets/images/llb.png', title: "Lucy's Love Bus", description: "Event Management System", component: <LLB/>},
                  {image: '/assets/images/c4c.png', title: "Code 4 Community Website", description: "Northeastern University Club Website", component: <C4CWebsite/>},
                  {image: '/assets/images/lingo.png', title: "LinGO", description: "Live Translator Service", component: <LinGO/>},
                  {image: '/assets/images/MaysJourneyImage.png', title: "Personal Portfolio Website", description: "This website!", component: <Bento/>}];

function Projects() {
  const [drawer, setDrawer] = React.useState(null);
  return (
      <div className="projects" id="projects">
        <div className="projectsComponents">
          <div className="titleAlignProjects">
          <div className="titleProjects"><span>Projects</span></div>
            <div className="projectsCenter">
              <div className="projectsWrapper">
                  <ProjectsGrid projects={projects} setDrawer={setDrawer}/>
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

function ProjectsGrid({projects, setDrawer}) {
  const grid = formatGrid(projects);
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => projects.length > 0 ? setIsVisible(true) : setIsVisible(false), [projects, setIsVisible]);

  return (
      <div className="gridContainer">
          <div className="gridWrapper">
              <div className="gridContent">
                  <PoseGroup>
                  {grid.map((row, i) => 
                      <div className="gridTile" key={i}>
                          <PoseGroup flipMove={false}>
                              {isVisible && row.map((project, j) => 
                                <TileContainer i={i * rowSize + j} key={j}>
                                <Tile project={project} setDrawer={setDrawer} /></TileContainer>)}
                          </PoseGroup>
                      </div>)}
                  </PoseGroup>
              </div>
          </div>
      </div>
  )
}

function formatGrid(projects) {
  const res = [];
  let row = [];
  for (let i = 0; i < projects.length; i++) {
      row.push(projects[i]);
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

function Tile({project, setDrawer}) {
  return(
      <div className="tile">
        <div className="tileInner" onClick={() => setDrawer(project)}>
            <img className="tileImage" src={project.image}/>
            <div className="tileTitle">{project.title}</div>
            <div className="tileDescription">{project.description}</div>
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

export default Projects;