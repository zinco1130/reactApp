import React from "react";
import "../css/MusicReco.css";
import Side from "./side";
import SayeonRect from "./sayeonRect";
import Orange from "../orange.jpeg";
import { useNavigate } from "react-router-dom";

export default function MusicReco() {
  const movePage = useNavigate();

  function gowrite() {
    movePage("/writepage");
  }
  return (
    <div className="back1">
      <Side />
      <div className="left1">
        <div className="upperBar">사연과 관련된 음악 추천 라디오</div>
        <div className="main1">
          <div className="sayeon">
            <button onClick={gowrite}>사연 작성하기</button>
          </div>
          <div className="rect1">
            <SayeonRect picture={Orange} />
          </div>
          <div className="rect2">
            <SayeonRect picture={Orange} />
          </div>
          <div className="rect3">
            <SayeonRect picture={Orange} />
          </div>
          <div className="rect4">
            <SayeonRect picture={Orange} />
          </div>
        </div>
      </div>
    </div>
  );
}
