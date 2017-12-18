import { combineReducers } from 'redux'
import gameReducer from './gameReducer'

const tictactoeApp = combineReducers({
  gameReducer,
})

export default tictactoeApp