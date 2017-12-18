import React from 'react';
import Board from '../containers/Board';
import HistoryContainer from './HistoryContainer';
import { connect } from 'react-redux';
import { Init } from '../actions/CaroActions';
import '../index.css';
const Game = ({ dispatch, game }) => {
    return (
      <div className="Game">
        <div>
        <button onClick={e => dispatch(Init())}>Restart</button>
        {game.winner ? <div>The winner is {game.winner.winnerPlayer}</div> : null}
        </div>
        <br/>
        <div>
          <Board/>
        </div>
        <br/>
        <div>
        <HistoryContainer />
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    game : state.gameReducer,
    
  }
}

export default connect(mapStateToProps)(Game);
