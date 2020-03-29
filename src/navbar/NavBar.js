import React, { useState } from 'react';
import { Link } from "react-scroll";
import './NavBar.css';
import useDocumentScrollThrottled from '../utilities/useDocumentScrollThrottled.js';


function Navbar() {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
  
    const MINIMUM_SCROLL = 1;
    const TIMEOUT_DELAY = 1;
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
      setShouldShowShadow(currentScrollTop > 2);
  
      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });
  
    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';
  
    return (
        <nav className={`navBar ${shadowStyle} ${hiddenStyle}`}>
                <ul className="navItem">
                    <li>
                        <Link
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="home" 
                            activeClass="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="about" 
                            activeClass="active">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="resume" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="resume" 
                            activeClass="active">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="games" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="games" 
                            activeClass="active">
                            Games
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="projects" 
                            activeClass="active">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="contact" 
                            activeClass="active">
                            Contacts
                        </Link>
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;