import React from 'react';
import SquareContainer from '../containers/SquareContainer';

const Board = () => {
  
  const renderAllSquares = () => {
    const matrixSize = Math.sqrt(25);
    const board = Array(matrixSize).fill(null);
    var count = 0;
    for (let i = 0; i < matrixSize; i++) {
      const squares = Array(matrixSize).fill(null);
      for (let j = 0; j < matrixSize; j++) {
        var squareKey = i * matrixSize + j;
        squares.push(<span key={squareKey}>{renderSquare(squareKey)}</span>);
        count = count + 1;

      }
      board.push(<div key={i}>{squares}</div>);
    }
    return board;
};

const renderSquare = (i) =>  {
  
    // return <Square id={i} value={newestHistory[0].squares[i]}onClick = {() => addHistory(i,isNext,newestHistory[0])} />
      return <SquareContainer id={i}/>
  };
  
  
  return (
    <div className="game">
      <div>
        {renderAllSquares()}
      </div>
    </div>
  )
};



export default Board;