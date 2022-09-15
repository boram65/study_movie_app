import React from "react";
import Food from "./Food";

const FavArr = ["김치", "치김", "전파"];

function App() {
  return (
    //함수안에 js문법을 반환하는것을 컴포넌트라 부른다.
    <React.Fragment>
      <h1 id="one">좋아하는 음식</h1>

      {FavArr.map(ele => (
        <Food fav={ele} />
      ))}
    </React.Fragment>
  );
}

export default App;
