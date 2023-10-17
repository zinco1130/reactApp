import { React, useState } from "react";
import CustomModal from "./Modal";

function SayeonRect({ picture, text }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const [inputMusic, setInputMusic] = useState("");

  const handleInputMusic = (e) => {
    setInputMusic(e.target.value);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="re">
      <div className="re2">
        <img className="picture" src={picture}></img>
      </div>
      <div className="re3">
        <button>음악 제목, 가수</button>
        <div className="re4">
          <button onClick={openModal}>음악 공유하기</button>
          <CustomModal isOpen={isModalOpen} closeModal={closeModal}>
            <input type="text" value={inputMusic} onChange={handleInputMusic}></input>
            <div>안녕하세요</div>
            <div>안녕하세요</div>
            <div>안녕하세요</div>
            <div>안녕하세요</div>
          </CustomModal>
        </div>
      </div>
    </div>
  );
}

export default SayeonRect;
