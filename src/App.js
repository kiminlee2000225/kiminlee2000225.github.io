import React, { Component} from 'react';
import { Element } from 'react-scroll';
import "./App.css";
import Navbar from './navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Games from './components/games/Games';
import Projects from './components/projects/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="elements" id="elements">
          <Element name="home">
            <Home/>
          </Element>
          <Element name="about">
            <About/>
          </Element>
          <Element name="projects">
            <Projects/>
          </Element>
          <Element name="games">
            <Games/>
          </Element>
          <Element name="contact">
            <Contact/>
          </Element>
        </div>
      </div>
    );
  }
}
export default App;