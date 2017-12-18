import * as actionType from '../constants/actionType';

const defaultState = {
  stepNumber: 0,
  winner: null,
  isNext : false,
  isReverse : false,
  history :[{moveLocation:'', squares: Array(25).fill(null)}]};

const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    
    case actionType.CLICK_SQUARE:
    if (state.history[state.stepNumber].squares[action.moveLocation] != null) {
      return {...state};
    }
    let oldHistory;
    if (state.stepNumber+1 === state.history.length) {
      oldHistory = state.history.slice();
    } else {
      oldHistory = state.history.slice(0,state.stepNumber);
    }
    let winner = calculateWinner(action.squares);
      
    return {stepNumber: state.stepNumber+1,
            winner : winner,
            isNext : !state.isNext,
            isReverse : state.isReverse,
            history:[...oldHistory, { moveLocation: action.moveLocation, squares : action.squares}]};
    
    case actionType.INIT:
      return {
        stepNumber: 0,
        winner : null,
        isNext: false,
        isReverse : false,
        history: [{ moveLocation: '', squares: Array(25).fill(null) }]
      };
    case actionType.CHANGE_STEP:
    return {
        stepNumber: action.step,
        winner : state.winner,
        isNext: state.isNext,
        isReverse : state.isReverse,
        history: [...state.history]
      };
    case actionType.REVERSE: 
      return {
        stepNumber: state.stepNumber,
        winner : state.winner,
        isNext: state.isNext,
        isReverse : !state.isReverse,
        history: [...state.history]
      }
    default:
      return state
  }
}

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [0, 6, 12, 18, 24],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [4, 8, 12, 16, 20],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
      return { 
        winnerLocation: [a,b,c,d,e],
        winnerPlayer: squares[a]
      };
    }
  }
  return null;
}
export default gameReducer;