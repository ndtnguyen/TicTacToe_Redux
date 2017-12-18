import React from 'react';

const History = ({ history, changeStep, reverseHistory}) => {
  const renderHistory = history => {
    let historyList =[];
    let returnList;
    for (let i=1; i < history.history.length; i++) {
      let moveLoc = history.history[i].moveLocation;
      let row = Math.floor(history.history[i].moveLocation/5)+1;
      let col = moveLoc % 5 + 1;
      let moveLocation = [Math.floor(moveLoc / 25) + 1, (moveLoc % 25)+1  ].join(", "); 
      historyList.push(<div key={i}><button className="btn btn-success" key={i} onClick={() => changeStep(i)} type="button">Col{col},Row{row}</button></div>);
    }
    returnList = historyList.slice();
    if (history.isReverse) {      
       returnList.reverse();
    }
    return returnList;
  }
  return (
      <div className="History">
          <button type="button" onClick={()=> reverseHistory()}>Reverse list</button>
          <div>{renderHistory(history)}</div>
      </div>
  )
};
export default History;