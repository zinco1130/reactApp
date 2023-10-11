import React from 'react';
import {Route,Link} from 'react-router-dom';
export default function SayeonRect({picture,text}) {
    return (
        <div className='d1'>
            <div className='d11'>
              <img src={picture}></img>
            </div>
            <div className='d111'>
              <button>음악 제목, 가수</button>
                <div className='d1111'>
                    <button>음악 공유하기</button>
                </div>
            </div>
        </div>
    );
}