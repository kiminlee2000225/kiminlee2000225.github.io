import React from 'react';
import "./Projects.css"
import { Overlay } from '@blueprintjs/core'; 
import { PoseGroup } from 'react-pose';
import { CSSTransition } from 'react-transition-group';
import Bento from "./myprojects/Bento.js";
import SFFTB from "./myprojects/SFFTB.js";
import LLB from "./myprojects/LLB.js";
import C4CWebsite from "./myprojects/C4CWebsite.js";
import LinGO from "./myprojects/LinGO.js";
import PersonalWebsite from "./myprojects/PersonalWebsite.js";
import ScrollAnimation from 'react-animate-on-scroll';

let rowSize = 3;
var mq = window.matchMedia(`(max-width: 812px)`);
if(mq.matches) {
  rowSize = 2;
} else {
  rowSize = 3;
}

const projects = [{image: '/assets/images/bento2.png', title: "Bento", description: "Recipe Builder Software", component: <Bento/>},
                  {image: '/assets/images/sfft.png', title: "Speak for the Trees Boston", description: "Tree Block Reservation System", component: <SFFTB/>},
                  {image: '/assets/images/llb.png', title: "Lucy's Love Bus", description: "Event Management System", component: <LLB/>},
                  {image: '/assets/images/c4c.png', title: "Code 4 Community Website", description: "Northeastern University Club Website", component: <C4CWebsite/>},
                  {image: '/assets/images/lingo.png', title: "LinGO", description: "Live Translator Service", component: <LinGO/>},
                  {image: '/assets/images/website.png', title: "Personal Portfolio Website", description: "This website!", component: <PersonalWebsite/>}];

function Projects() {
  const [drawer, setDrawer] = React.useState(null);
  return (
      <div className="projects" id="projects">
        <div className="projectsComponents">
          <div className="titleAlignProjects">
            <div className="projectsCenter">
              <div className="projectsWrapper">
                <div className="projectsText">
                <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={1}>
                  <div className="titleProjects"><span>Projects</span></div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300} duration={1} offset={450}>
                    <ProjectsGrid projects={projects} setDrawer={setDrawer}/>
                  </ScrollAnimation>
                </div>
                  <CSSTransition in={!!drawer} timeout={500} classNames="popup" unmountOnExit>
                  <Overlay className="overlayComponent" hasBackdrop={false} canOutsideClickClose={true} 
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
                                <Tile key={j} project={project} setDrawer={setDrawer} />)}
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
        <div className="tileInnerProject" onClick={() => setDrawer(project)}>
            <img className="tileImage" src={project.image} alt="project"/>
            <div className="tileTitle">{project.title}</div>
            <div className="tileDescription">{project.description}</div>
        </div>
      </div>
  )
}

export default Projects;