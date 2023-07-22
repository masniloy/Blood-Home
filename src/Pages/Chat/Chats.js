import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthPro/AuthPro";
import { ChatContext } from "../../Context/AuthPro/ChatContext";
import { db } from "../../Firebase/firebase.init";

const Chats = () => {
    const [chats, setChats] = useState([]);
    console.log(chats);
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    };


    return (
        <div className="chats ">

            {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
                <div
                    className="userChat"
                    key={chat[0]}
                    onClick={() => handleSelect(chat[1].userInfo)}
                >



                    <div className='flex items-center w-64 my-5'>
                        <div className="avatar">
                            <div className="w-11 h-11 rounded-full">
                                <img src={chat[1].userInfo.photoURL} />
                            </div>
                        </div>
                        <div className="w-52 mx-3">
                            <h1 className=' hover:bg-none  text-lg  text-left'><b>{chat[1].userInfo.displayName}</b></h1>
                            <p className=" text-left truncate text-sm">{chat[1].lastMessage?.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;
