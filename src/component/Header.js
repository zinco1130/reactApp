import React from 'react';
import {Route,Link} from 'react-router-dom';

export default function Header({picture,text}) {
    return (
        <div className='d2'>
            <div className='d22'>
              <img src={picture}></img>
            </div>
            <div className='d222'>
              <button>음악 제목, 가수</button>
                <div className='d2222'>
                    <button>음악 공유하기</button>
                </div>
            </div>
        </div>

    );
}