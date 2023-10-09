import './App.css';
import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import SayeonRect from './component/SayeonRect';
import Orange from './orange.jpeg';

function App() {
  return (
    <div className="App">
      <div className='upperBar'>
        사연과 관련된 음악 추천 라디오
      </div>
      <div className='main'>
        <div className='sayeon'>
          <button>사연 작성하기</button>
        </div>
        <div className='compMain'>

        <SayeonRect picture={Orange} />
        <SayeonRect />
        <SayeonRect />
        <SayeonRect />

          {/* <div className='d2'>
            <div className='d22'>
              <img src={Orange}></img>
            </div>
            <div className='d222'>
              <button>음악 제목, 가수</button>
              <div className='d1111'>
                    <button>음악 공유하기</button>
                </div>
            </div>
          </div>

          <div className='d3'>
            <div className='d33'>
              <img src={Orange}></img>
            </div>
            <div className='d333'>
              <button>음악 제목, 가수</button>
              <div className='d1111'>
                    <button>음악 공유하기</button>
                </div>
            </div>
          </div>

          <div className='d4'>
            <div className='d44'>
              <img src={Orange}></img>
            </div>
            <div className='d444'>
              <button>음악 제목, 가수</button>
              <div className='d1111'>
                    <button>음악 공유하기</button>
                </div>
            </div>
          </div> */}
      
        </div>
      </div>

      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
