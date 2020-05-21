import React, { Component } from 'react';
import "./MaysJourneyGame.css"

class MaysJourneyGame extends Component {
  render() {
    return (
          <div className="gameContext">
           <div className="gameInfoWrapper">
            <div className="gameTitle">May's Journey</div>
            <img className="gameImage"/>
            <div className="gameDescription"></div>
              {/* <div style={{marginLeft:'40px', fontSize:'30px', fontWeight:'bold', color:'#9b9b9b'}}>May's Journey</div>
              <div style={{marginLeft:'40px', fontSize:'15px', color:'#9b9b9b'}}>Prep: a | Cook: b</div>
              <div style={{marginLeft:'40px', fontSize:'15px', letterSpacing:'0.8px', color:'#9b9b9b', fontWeight:'bold'}}>INGREDIENTS</div>
              <div style={{color:'#9b9b9b', marginRight:'40px', marginLeft:'40px'}}>info</div>
              <div style={{marginLeft:'40px', fontSize:'15px', letterSpacing:'0.8px', color:'#9b9b9b', fontWeight:'bold'}}>DIRECTIONS</div> */}
            </div>
          </div>
    )
  }
}

export default MaysJourneyGame;