import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faImages } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../../Context/AuthPro/AuthPro";
import { ChatContext } from "../../Context/AuthPro/ChatContext";
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../Firebase/firebase.init";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Img from "../../New folder/image/img.png"

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async (e) => {
        e.preventDefault();
        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    //TODO:Handle Error
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");
        setImg(null);
    };
    return (
        <div className="input">

            <form onSubmit={handleSend} className=' bg-gray-100 h-20 items-center  py-4 flex px-5  -mx-5' >
                <input onChange={(e) => setText(e.target.value)}
                    value={text} type="text" placeholder="Type here" className="input shadow-xl  w-full max-w-full   " />
                <div className="flex">
                    <input
                        type="file"
                        style={{ display: "none" }}
                        id="file"
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                    <label htmlFor="file" className="w-12 p-2 mx-4">
                        <img src={Img} alt="" />
                    </label>

                    <button type="submit" className="btn  w-20 shadow-xl"><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>

            </form>
        </div>
    );
};

export default Input;
