import React from "react";

//state는 동적데이터를 다룰때 사용하는 요소

// class App extends React.Component {
//   //상속을 받음
//   render() {
//     return <div>클래스 컴포넌트</div>;
//   }
// }

class App extends React.Component {
  state = {
    count: 0,
  };

  증가함수 = () => {
    console.log("증가함수 호출됨");
    //this.setState({ count: this.state.count + 54321 });
    //방법2
    this.setState(newState => {
      {
        return { count: newState.count + 1 };
      }
    });
  };
  감소함수 = () => {
    console.log("감소함수 호출됨");
    this.setState({ count: this.state.count - 1 });
    //방법2
  };
  render() {
    return (
      <div>
        <h1>카운터 : {this.state.count}</h1>
        <button onClick={this.증가함수}>__+1__</button>
        <button onClick={this.감소함수}>__-1__</button>
      </div>
    );
  }
}
export default App;
