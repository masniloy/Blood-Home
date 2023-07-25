import React, { useContext, useState } from "react";
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
} from "firebase/firestore";
import { db } from "../../Firebase/firebase.init";
import { AuthContext } from "../../Context/AuthPro/AuthPro";
const ChatSearch = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
    console.log(user);

    const { currentUser } = useContext(AuthContext);

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        );

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setErr(true);
        }
    };

    // const handleKey = (e) => {
    //     e.code === "Enter" && handleSearch();
    // };

    const handleSelect = async () => {
        //check whether the group(chats in firestore) exists, if not create
        const combinedId =
            currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedId), { messages: [] });

                //create user chats
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        } catch (err) { }

        setUser(null);
        setUsername("")
    };
    return (
        <div className=" border-b border-white rounded-xl">
            <div className="">

                <input onKeyDown={handleSearch}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text" placeholder="Find a user" className="input input-sm  w-full max-w-full   " />
            </div>
            {err && <span>User not found!</span>}
            {user && (
                <div onClick={handleSelect} className='flex gap-2 items-center  p-2 border-gray-500  rounded-md  my-1 hover:font-bold'>

                    <div className="avatar ">
                        <div className="w-9 h-9 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    <li>{user.displayName}</li>

                </div>

            )}
        </div>
    );
};

export default ChatSearch;
