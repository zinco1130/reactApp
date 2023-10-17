import React from "react";
import "../css/MusicLink.css";
import Side from "./side";
import SayeonRect from "./sayeonRect";
import Poison from "../poison.jpeg";
import Pic1 from "../pic1.jpeg";
import Pic2 from "../pic2.jpeg";
import Pic3 from "../pic3.jpeg";

function MusicLink() {
  return (
    <div className="back3">
      <Side />
      <div className="left3">
        <div className="upperBar">사연과 관련된 음악 추천 라디오</div>
        <div className="main3">
          <div className="rect111">
            <SayeonRect picture={Poison} />
          </div>
          <div className="rect222">
            <SayeonRect picture={Pic1} />
          </div>
          <div className="rect333">
            <SayeonRect picture={Pic2} />
          </div>
          <div className="rect444">
            <SayeonRect picture={Pic3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicLink;
