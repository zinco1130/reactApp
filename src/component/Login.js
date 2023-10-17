import { React, useState } from "react";
import "../css/Login.css";
import Side from "./side";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const login = () => {
    console.log(inputId);
    console.log(inputPw);
  };

  return (
    <div className="back4">
      <Side />
      <div className="left4">
        <div className="upperBar">사연과 관련된 음악 추천 라디오</div>
        <div className="main4">
          <div className="login-container">
            <h2>로그인</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">ID:</label>
                <input type="text" value={inputId} onChange={handleInputId}></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">PW:</label>
                <input type="password" value={inputPw} onChange={handleInputPw}></input>
              </div>
              <div className="form-group">
                <button onClick={login}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
