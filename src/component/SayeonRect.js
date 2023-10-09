import React from 'react';

function SayeonRect({picture,text}) {
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

export default SayeonRect;