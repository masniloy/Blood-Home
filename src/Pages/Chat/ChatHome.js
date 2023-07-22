import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';

const ChatHome = () => {
    return (
        <div className='stats w-full  h-[800px] mb-20 '>
            <div className=" bg-gray-100  flex mx-20 shadow-2xl ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                </div>
                <div className=" h-full  ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className=" overflow-y-auto menu p-4 w-72 h-full bg-base-200 text-base-content bg-red-400 ">
                        <Sidebar></Sidebar>


                    </ul>

                </div>
                <div className='w-full'>
                    <div className=' bg-red-200 w-full h-16   px-5 '>

                        <Chat></Chat>


                    </div>
                </div>
            </div>
        </div>



    );
};

export default ChatHome;