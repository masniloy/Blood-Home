import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faImages } from '@fortawesome/free-solid-svg-icons'

const Myok = () => {
    return (
        <div className='stats w-full  h-[800px] mb-20 '>
            <div className=" bg-gray-100  flex mx-20 shadow-2xl ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                </div>
                <div className=" h-full">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 h-full bg-base-200 text-base-content bg-red-200 ">
                        <h1 className=' hover:bg-none bg-red-600 text-white items-center -m-4 h-16 text-xl mb-8 p-4'><b>CHATS</b></h1>
                        {/* Sidebar content here */}


                        <a href=''>
                            <div className='flex gap-2 items-center border-b p-2 border-gray-500  rounded-md  my-1'>

                                <div className="avatar">
                                    <div className="w-9 h-9 rounded-full">
                                        <img src="https://i.ibb.co/fG3XnFK/split-peas-1.jpg" />
                                    </div>
                                </div>
                                <li>M A SAIMUN NILOY</li>

                            </div>
                        </a>


                    </ul>

                </div>
                <div className='w-full'>
                    <div className=' bg-red-300 w-full h-16   px-5 '>
                        <div className='flex items-center py-1'>
                            <div className="avatar">
                                <div className="w-11 h-11 rounded-full">
                                    <img src="https://i.ibb.co/fG3XnFK/split-peas-1.jpg" />
                                </div>
                            </div>
                            <h1 className=' hover:bg-none  text-lg p-3'><b>M A SAIMUN NILOY</b></h1>
                        </div>




                        <div className=' h-[640px] my-2 '>
                            <div>
                                <div className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-5 rounded-full">
                                            <img src="https://i.ibb.co/fG3XnFK/split-peas-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        Obi-Wan Kenobi
                                        <time className="text-xs opacity-50">12:45</time>
                                    </div>
                                    <div className="chat-bubble">You were the Chosen One!</div>
                                    <div className="chat-footer opacity-50">
                                        Delivered
                                    </div>
                                </div>
                                <div className="chat chat-end">
                                    <div className="chat-image avatar">
                                        <div className="w-5 rounded-full">
                                            <img src="https://i.ibb.co/fG3XnFK/split-peas-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        Anakin
                                        <time className="text-xs opacity-50">12:46</time>
                                    </div>
                                    <div className="chat-bubble">I hate you!</div>
                                    <div className="chat-footer opacity-50">
                                        Seen at 12:46
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=' bg-gray-100 h-20 items-center  py-4 flex px-5  -mx-5' >
                            <input type="text" placeholder="Type here" className="input shadow-xl  w-full max-w-full   " />
                            <button className="btn shadow-xl bg-gray-100 hover:bg-gray-100 text-black border-gray-100 mx-2"><FontAwesomeIcon className='   ' icon={faImages} /></button>
                            <button className="btn  w-20 shadow-xl"><FontAwesomeIcon className='   ' icon={faPaperPlane} /></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Myok;