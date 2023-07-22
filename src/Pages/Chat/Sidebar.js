import React from 'react';
import ChatNav from './ChatNav';
import ChatSearch from './ChatSearch';
import Chats from './Chats';

const Sidebar = () => {
    return (
        <div>
            <ChatSearch></ChatSearch>
            <Chats></Chats>
        </div>
    );
};

export default Sidebar;