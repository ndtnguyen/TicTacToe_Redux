import React from 'react';
import '../index.css';


const Square =({ id, game, addHistory}) =>{
    let squareClass = 'square';
    let step = game.stepNumber;  
    let allHistory = game.history.slice();
    let newHistory = allHistory[step];
    if (game.winner !=null ) {
      if (game.winner.winnerLocation.indexOf(id) != -1) {
        squareClass+=' winner';
      }
    }
    return(
      <button className={squareClass}  onClick={()=> addHistory(newHistory,game.isNext)}>{newHistory.squares[id]}</button>
    );
  
};

export default Square;