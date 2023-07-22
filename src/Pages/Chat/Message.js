import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Context/AuthPro/AuthPro";
import { ChatContext } from "../../Context/AuthPro/ChatContext";

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (

        <div
            ref={ref}
            className={` ${message.senderId === currentUser.uid && " chat chat-end  "}`}
        >


            <div className="chat chat-start   ">
                <div className="chat-image avatar">
                    <div className="w-5 rounded-full">
                        <img src={
                            message.senderId === currentUser.uid
                                ? currentUser.photoURL
                                : data.user.photoURL
                        } />
                    </div>
                </div>
                {/* 
                <div className=" bg-gray-300 rounded-xl rounded-br-none text-black my-5 p-3 min-w-fit">{message.text}</div> */}

                <div className={`bg-gray-300 rounded-xl rounded-bl-none text-black my-5 p-3 min-w-fit ${message.senderId === currentUser.uid && " rounded-br-none rounded-bl-xl  "}`}>
                    {message.text}
                    <div >
                        {message.img && <img className=" w-32 hover:w-96" src={message.img} alt="" />}
                    </div>
                </div>

            </div>






        </div>

    );
};

export default Message;
