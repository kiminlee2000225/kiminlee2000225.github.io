import React, { useState } from 'react';
import { Link } from "react-scroll";
import './NavBar.css';
import useDocumentScrollThrottled from '../utilities/useDocumentScrollThrottled.js';

function Navbar() {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
    const [docked, setDocked] = useState(false);
    const [initialHidden, setInitialHidden] = useState(true);
  
    const MINIMUM_SCROLL = 1;
    const TIMEOUT_DELAY = 1;
    
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
      setInitialHidden(shouldHideHeader);

      setShouldShowShadow(currentScrollTop > 2);
      setTimeout(() => {
          setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);

        if (docked) {
            setTimeout(() => {
                setShouldHideHeader(true);
                setShouldShowShadow(false);
                if (currentScrollTop > 2) {
                    setDocked(false);
                }
            }, 300)
        }
    });

    function handleSetActive() {
        setDocked(true);
    }
  
    const shadowStyle = shouldShowShadow && !docked ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader || docked || initialHidden ? 'hidden' : '';

    return (
        <nav id="navId" className={`navBar ${shadowStyle} ${hiddenStyle}`}>
                <ul className="navItem">
                    <li>
                        <Link
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="homeLink"
                            activeClass="active"
                            onClick={handleSetActive}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="aboutLink" 
                            activeClass="active"
                            onClick={handleSetActive}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="games" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="gamesLink" 
                            activeClass="active"
                            onClick={handleSetActive}>
                            Games
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="projectsLink" 
                            activeClass="active"
                            onClick={handleSetActive}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="resume" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="resumeLink" 
                            activeClass="active"
                            onClick={handleSetActive}>
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="contactLink" 
                            activeClass="active"
                            onClick={handleSetActive}>
                            Contacts
                        </Link>
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;