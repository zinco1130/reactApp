import React from 'react';

function Main({picture,text}) {
    return (
        <div className='d3'>
            <div className='d33'>
              <img src={picture}></img>
            </div>
            <div className='d333'>
              <button>음악 제목, 가수</button>
                <div className='d3333'>
                    <button>음악 공유하기</button>
                </div>
            </div>
        </div>

    );
}

export default Main;