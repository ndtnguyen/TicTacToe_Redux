import { connect } from 'react-redux'
import { ClickSquare } from '../actions/CaroActions';
import Square from '../components/Square'

const mapStateToProps = (state,ownProps) => {
  return {
    game : state.gameReducer,
    id : ownProps.id
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    addHistory: (newHistory,isNext) => {   
      let newSquare = newHistory.squares.slice();
      newSquare[ownProps.id] = isNext ? 'X' : 'O';  
        dispatch(ClickSquare(ownProps.id,newSquare))
    }
  }
}

const SquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Square)

export default SquareContainer