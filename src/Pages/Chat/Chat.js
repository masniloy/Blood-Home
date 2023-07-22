import React, { useContext } from 'react';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from "../../Context/AuthPro/ChatContext";
import { AuthContext } from "../../Context/AuthPro/AuthPro";

const Chat = () => {
    const { data } = useContext(ChatContext);


    return (
        <div>
            <div className='flex items-center py-1'>
                <div className="avatar">
                    <div className="w-11 h-11 rounded-full">
                        <img src={data.user?.photoURL} />
                    </div>
                </div>
                <h1 className=' hover:bg-none  text-lg p-3'><b>{data.user?.displayName}</b></h1>
            </div>
            <div className=' h-[640px] my-2 overflow-auto '>
                <div >
                    <Messages></Messages>
                </div>
            </div>

            <Input></Input>
        </div>

    );
};

export default Chat;