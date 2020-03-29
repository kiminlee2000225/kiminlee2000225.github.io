import React, { Component} from 'react';
import "./App.css";
import Navbar from './navbar/NavBar';
import {BrowserRouter} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Games from './components/Games';
import Projects from './components/Projects';
import { Element } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
        <Element name="home">
          <Home/>
        </Element>
        <Element name="about">
          <About/>
        </Element>
        <Element name="resume">
          <Resume/>
        </Element>
        <Element name="games">
          <Games/>
        </Element>
        <Element name="projects">
          <Projects/>
        </Element>
        <Element name="contact">
          <Contact/>
        </Element>
      </div>
    );
  }
}
export default App;