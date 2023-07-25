// import React from 'react';
// import DonateBlood from '../DonateBlood/DonateBlood';
// import { Link } from 'react-router-dom';


// const SingleDonor = ({ donors, setdonorContact }) => {

//     const { name, blood, district, status, phone, email } = donors;


//     return (
//         <div>
//             <td>
//                 <div className="flex items-center space-x-3">
//                     <div>
//                         <div className="font-bold w-80">{name}</div>
//                         <div className="text-sm opacity-50 w-80 text-red-600 font-bold ">{status}</div>
//                     </div>
//                 </div>
//             </td>
//             <td >
//                 <div className=' w-80 text-center'>
//                     {district}
//                 </div>

//             </td>
//             <td className='font-bold '>

//                 <div className=' text-center w-80'>
//                     {blood}
//                 </div>
//             </td>


//             <th>




//                 <label htmlFor="bookModal" className="btn  bg-red-600 btn-xs border-red-600 px-6" onClick={() => setdonorContact(donors)}>Contact</label>

//             </th>






//         </div>
//     );
// };

// export default SingleDonor;



import DonateBlood from '../DonateBlood/DonateBlood';
import { Link } from 'react-router-dom';
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

const SingleDonor = ({ donors, setdonorContact }) => {


    const { name, blood, district, status, phone, email } = donors;


    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
    console.log(user);

    const { currentUser } = useContext(AuthContext);

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", name)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setUser(doc.data());
        });
    };



    const handleSelect = async () => {
        // const agree = window.confirm(`Are you sure you want to contact: ${name}`)
        // if (agree) {

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

        // }
        //check whether the group(chats in firestore) exists, if not create


    };

    return (
        <div>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold w-80">{name}</div>
                        <div className="text-sm opacity-50 w-80 text-red-600 font-bold ">{status}</div>
                    </div>
                </div>
            </td>
            <td >
                <div className=' w-80 text-center'>
                    {district}
                </div>

            </td>
            <td className='font-bold '>

                <div className=' text-center w-80'>
                    {blood}
                </div>
            </td>


            <th>

                {/* <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">Click</label>

                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div> */}




                <div className=" dropdown dropdown-top dropdown-end border-b  border-white rounded-xl  ">

                    <label tabIndex={0} onClick={handleSearch} className="btn  bg-red-600 btn-xs border-red-600 px-6" >Contact</label>

                    {user && (

                        <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow  rounded-box bg-red-200 w-80 -mb-10">
                            <li >
                                <div className=' gap-2 items-center  p-2 hover:bg-red-200  rounded-xl  my-1 hover:font-bold'>

                                    <div className="avatar ">
                                        <div className="w-9 h-9 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                    <li className=' w-44' >{user.displayName}</li>
                                    <Link to='/Chat' onClick={handleSelect} className="btn  bg-red-600 btn-xs border-red-600 px-6" >ok</Link>
                                </div>
                            </li>

                        </ul>



                        // <div className="alert">
                        //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        //     <span>we use cookies for no reason.</span>
                        //     <div>
                        //         <button className="btn btn-sm">Deny</button>
                        //         <button onClick={handleSelect} className="btn btn-sm btn-primary">Accept</button>
                        //     </div>
                        // </div>

                    )}
                </div>

                {/* <label htmlFor="bookModal" className="btn  bg-red-600 btn-xs border-red-600 px-6" onClick={() => setdonorContact(donors)}>Contact</label> */}

            </th >






        </div >
    );
};

export default SingleDonor;




{/* <Link to="/Chat" htmlFor="bookModal" className="btn  bg-red-600 btn-xs border-red-600 px-6" >Contact</Link> */ }