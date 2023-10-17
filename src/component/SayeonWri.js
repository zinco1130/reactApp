import React from "react";
import "../css/SayeonWri.css";
import Side from "./side";
import SayeonRect from "./sayeonRect";
import Orange from "../orange.jpeg";

function SayeonWri() {
  return (
    <div className="back2">
      <Side />
      <div className="left2">
        <div className="upperBar">사연과 관련된 음악 추천 라디오</div>
        <div className="main2">
          <div className="sayeon">
            <button>사연 작성하기</button>
          </div>
          <div className="rect11">
            <SayeonRect picture={Orange} />
          </div>
          <div className="rect22">
            <SayeonRect picture={Orange} />
          </div>
          <div className="rect33">
            <SayeonRect picture={Orange} />
          </div>
          <div className="rect44">
            <SayeonRect picture={Orange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SayeonWri;
