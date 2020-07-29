import React, { Component } from 'react';
import './Home.css'
import { Parallax } from 'react-parallax';
import scrollDownImage from './scrollDownImage.jpg';
import { Link } from "react-scroll";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };


class Home extends Component {
  render() {
    return (
        <div className="home" id="home">
          <div className="homeComponents">
          <div className="titleAlign">
              <div className="homeCenter">
                  <div className="homeWrapper">
                  <div className="scrollButton"> 
                  <Link
                              to="about" 
                              spy={true} 
                              smooth={true} 
                              duration={500} 
                              className="aboutLink"
                              activeClass="active">
                          </Link>
                <img className="scrollImage" src={scrollDownImage}></img>
              </div>
                    <div className="introText">
                      <h3>Hi, I'm</h3>
                      <h2><span style={{color: '#dac3a5'}}>Kimin</span> Lee.</h2>
                      <h1>I develop <span style={{color: '#dac3a5'}}>Software</span> and <span style={{color: '#dac3a5'}}>Games</span>.</h1>
                    </div>
                  </div>
                </div>
              </div>
            {/* <div className="introText">
                <h3>Hi, I'm</h3>
                <h2><span style={{color: '#ff5c4a'}}>Kimin</span> Lee.</h2>
                <h1>I develop <span style={{color: '#ff5c4a'}}>Software</span> and <span style={{color: '#ff5c4a'}}>Games</span>.</h1>
              </div> */}
          </div>
          
          {/* <div style={styles}> */}
    {/* <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500, width: 200 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2> */}
  {/* </div> */}
        </div>
    );
  }
}

export default Home;