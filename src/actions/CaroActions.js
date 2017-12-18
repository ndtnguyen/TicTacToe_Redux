import * as actionType from '../constants/actionType';

export const ClickSquare= (moveLocation,squares) => {
  return {
    type: actionType.CLICK_SQUARE,
    moveLocation,
    squares
  }
}

export const Init = () => {
  return {
    type: "INIT"
  }
}

export const ChangeStep = (step) => {
  return {
    type: actionType.CHANGE_STEP,
    step
  }
}

export const ReverseList = () => {
  return {
    type: actionType.REVERSE,
  }
}