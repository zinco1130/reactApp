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
      
        </div>
      </div>

      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
