import React, { useState } from "react";

function ClickCount(props) {
  let [timer, setTimer] = useState(0);
  let [timeID, setTimeID] = useState(0);

  const 타이머시작 = () => {
    const temp = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 100);

    setTimeID(temp);
  };

  const 타이머멈춤 = () => {
    clearInterval(timeID);
    setTimeID(0);
  };

  return (
    <>
      <div className="count">
        <h3>{props.title ? props.title : "기본"}timer</h3>
        <div>timer : {timer}</div>
        <div>타이머의 ID : {timeID}</div>
        <button onClick={타이머시작}> start </button>
        <button onClick={타이머멈춤}> stop </button>
      </div>
    </>
  );
}
export default ClickCount;
