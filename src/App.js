import './App.css';
import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import SayeonRect from './component/SayeonRect';
import Footer from './component/Footer';
import Orange from './orange.jpeg';
import Radio from './radio.jpeg';
import { BrowserRouter,Route, Link, Routes } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className='upperBar'>
        사연과 관련된 음악 추천 라디오
        </div>
        <div className='main'>
          <div className='sayeon'>
            <button>사연 작성하기</button>
          </div>
          <div className='compMain'>

            <Link to="/header">헤더</Link><br/>
            <Link to="/main">메인</Link><br/>
            <Link to="/sayeonReact">사연리엑트</Link><br/>
            <Link to="/footer">푸터</Link><br/>
            <Routes>
              <Route exact path="/header" element={<Header/>}/>
              <Route path="/main" element={<Main/>}/>
              <Route path="/sayeonReact" element={<SayeonRect/>}/>
              <Route path="/footer" element={<Footer/>}/>

            </Routes>
        
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
