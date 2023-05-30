import React from 'react';
import loading from '../../src/New folder/image/loding1.gif'
const Loading = () => {
    return (
        <div className='hero min-h-full min-h-screen -mt-24'>
            <div className=' hero-content items-center'>
                <img src={loading} className="max-w-xs rounded-full" /><br />

            </div>
        </div>
    );
};

export default Loading;