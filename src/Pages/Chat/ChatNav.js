import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthPro/AuthPro';

const ChatNav = () => {
    const { currentUser } = useContext(AuthContext)
    return (
        <div>
            <h1 className=' hover:bg-none bg-red-400 text-white items-center -m-4 h-16 text-md mb-8 p-4'><b> {currentUser.displayName}</b></h1>

        </div>
    );
};

export default ChatNav;