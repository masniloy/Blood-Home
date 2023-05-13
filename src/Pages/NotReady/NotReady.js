import React from 'react';
import inbuild from '../../New folder/image/In Build.gif'
const NotReady = () => {
    return (
        <div>
            <div className='flex h-fit  w-full justify-center items-center'>
                <img src={inbuild} className="max-w-sm rounded-lg " /><br />

            </div>
            <h1 className='text-2xl font-bold'>This page is not ready yet !</h1>
        </div>
    );
};

export default NotReady;