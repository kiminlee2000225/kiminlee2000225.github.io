import React, { Component } from 'react';
import "./MaysJourneyGame.css"

class DefenseHorizonGame extends Component {
  render() {
    return (
          <div className="gameContext">
           <div style={{height: '300px', width:'80%', 
           //backgroundImage: `url(${recipe.image})`, 
           backgroundSize: 'cover', backgroundPosition: 'center', 
           margin: '30px', marginLeft: '40px', 
           //justifyContent: 'center', alignItems: 'center'
           }}>
          </div>
          <div>
              <div style={{marginLeft:'40px', marginTop: '15px', fontSize:'30px', fontWeight:'bold', color:'#9b9b9b'}}>Defense Horizon</div>
              <div style={{marginLeft:'40px', marginTop: '8px', fontSize:'15px', color:'#9b9b9b'}}>Prep: a | Cook: b</div>
              <div style={{marginLeft:'40px', marginTop: '20px', fontSize:'15px', letterSpacing:'0.8px', color:'#9b9b9b', fontWeight:'bold'}}>INGREDIENTS</div>
              <div style={{color:'#9b9b9b', marginRight:'40px', marginLeft:'40px', marginTop:'8px'}}>info</div>
              <div style={{marginLeft:'40px', marginTop: '20px', fontSize:'15px', letterSpacing:'0.8px', color:'#9b9b9b', fontWeight:'bold'}}>DIRECTIONS</div>
          </div>
      </div>
    )
  }
}

export default DefenseHorizonGame;