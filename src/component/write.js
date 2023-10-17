import React from "react";
import "../css/write.css";
import Side from "./side";

function Write() {
  return (
    <div className="back5">
      <Side />
      <div className="left5">
        <div className="upperBar">사연과 관련된 음악 추천 라디오</div>
        <div className="main5">
          <div className="writeBoard">
            <div className="artBoard">
              <div className="artScene"></div>
              <input type="file" />
              그림/사진 선택
            </div>
            <div className="textBoard">
              <div className="textScene"></div>
              <button>등록</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
