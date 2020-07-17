import React, { Component } from 'react';
import "./GameInfo.css"

class MarbleSolitaireGame extends Component {
  render() {
    return (
      <div className="gameContext">
      <div className="gameInfoWrapper">
       <div className="gameTitle">Marble Solitaire</div>
       <img className="gameImage"/>
       <h2>What is Marble Solitaire?</h2>
       <h3>Marble solitaire, also known as peg solitaire, is a board game for one player involving movement of pegs on a board with holes.
          I created a marble solitaire game that supports the standard, triangular, and European shape using the model-view-controller 
          architecture in Java. Java unit tests were used to verify my code. The player is able to specify the shape and size of the solitaire.</h3>
       <h2><a href="https://github.com/kiminlee2000225/Marble-Solitaire" style={{textDecoration: 'none', color: "#222626"}}>GitHub</a></h2>
       <h2>Tools used</h2>
       <h3>Java, JUnit</h3>
       <h2>What I did</h2>
       <h3>I created a digital marble solitaire game using only Java. The player is able to the pegs with row and column inputs, and the
          visualization will be updated depending on each move. If the move is not allowed, it will throw an error message to the player. 
          Additionally, the state of the game is stated if the game is over. I utilized a model-view-controller architecture as new features
           were eventually added, such as the support for multiple shapes. Each shape has its own model, and they are tied to one controller.
            Each model extends an abstracted class that implements the general marble solitaire model. Each position is identified with an
             enumerator, where the spot can be an empty space with no marbles, contain a marble, or non-existent (for different shapes).
              Every public function was tested with JUnit tests, assuring the quality of the code. The player is able to specify the shape and 
              size of the solitaire by setting the configurations of the code.</h3>
       <h2>Challenges / Improvements</h2>
       <h3>A challenge I faced was implementing the triangular shaped marble solitaire. Unlike the general model and the European model, the
          triangular model does not allow for marble movement in a strict horizontal or vertical direction, but instead in a diagonal direction.
           This caused a tricky usage of nested loops and conditional statements to program the possible movements for the player by calculating
            the possible row and column movements.</h3>
       <h3 className="lastParagraph">For the future, I would like to transition this code to a game engine, that allows the user to actually play
        the game without having the numerically input moves. For example, I can tie this program with Unity to create a UI/UX for the players to 
        simply click on to move the marbles. </h3>
       </div>
     </div>
    )
  }
}

export default MarbleSolitaireGame;