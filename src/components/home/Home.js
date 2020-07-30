import React, { Component } from 'react';
import './Home.css'
import scrollDownImage from './scrollDownImage.jpg';
import { Link } from "react-scroll";

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
                    <h1 class="ml11">
                      <span class="text-wrapper">
                        <span class="line line1"></span>
                        <span class="letters">Hi  I'm</span>
                      </span>
                    </h1>
                    <h1 class="ml12">
                      <span class="text-wrapper">
                        <span class="line_1 line1"></span>
                        <span class="letters3">Kimin</span>
                        <span class="letters2"> Lee.</span>
                      </span>
                    </h1>
                    <h1 class="ml13">
                      <span class="text-wrapper">
                        <span class="line_2 line1"></span>
                        <span class="letters4">I develop</span>
                        <span class="letters5"> Software</span>
                        <span class="letters6"> and</span>
                        <span class="letters7"> Games</span>
                        <span class="letters8">.</span>
                      </span>
                    </h1>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    );
  }
}

// class Home extends Component {
//   render() {
//     return (
//         <div className="home" id="home">
//           <div className="homeComponents">
//           <div className="titleAlign">
//               <div className="homeCenter">
//                   <div className="homeWrapper">
//                   <div className="scrollButton"> 
//                   <Link
//                               to="about" 
//                               spy={true} 
//                               smooth={true} 
//                               duration={500} 
//                               className="aboutLink"
//                               activeClass="active">
//                           </Link>
//                 <img className="scrollImage" src={scrollDownImage}></img>
//               </div>
//                     <div className="introText">
//                       <h3>Hi, I'm</h3>
//                       <h2><span style={{color: '#dac3a5'}}>Kimin</span> Lee.</h2>
//                       <h1>I develop <span style={{color: '#dac3a5'}}>Software</span> and <span style={{color: '#dac3a5'}}>Games</span>.</h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//           </div>
//         </div>
//     );
//   }
// }

export default Home;