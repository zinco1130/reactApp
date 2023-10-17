import "./App.css";
import React, { Component } from "react";
import Side from "./component/side";

class App extends Component {
  render() {
    return (
      <div className="back">
        <Side />
        <div className="left">
          <div className="upperBar">사연과 관련된 음악 추천 라디오</div>
          <div className="main">
            <div className="sayeon">
              <button>사연 작성하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
