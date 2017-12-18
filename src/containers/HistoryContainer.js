import { connect } from 'react-redux'
import { ChangeStep,ReverseList } from '../actions/CaroActions';
import History from '../components/History'

const mapStateToProps = (state) => {
  return {
    history : state.gameReducer,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      changeStep : step => dispatch(ChangeStep(step)),
      reverseHistory : () => dispatch(ReverseList())
    }
  }


const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(History)

export default HistoryContainer