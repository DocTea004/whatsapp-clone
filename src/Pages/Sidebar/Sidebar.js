import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "../../Components/SidebarChat/SidebarChat";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar 
                    src="https://scontent.facc1-1.fna.fbcdn.net/v/t1.0-9/p960x960/115777468_986566715119361_8887545611461379807_o.jpg?_nc_cat=101&ccb=2&_nc_sid=21694d&_nc_eui2=AeF6yDfpZVxKQMFB6d48Fy6zK-JiOR1J7zgr4mI5HUnvOHU0DY_6IdU7ILyg82NSKFZyDTZRiXPV-8O0PttP7lfQ&_nc_ohc=YUcZvcJECIYAX9neki2&_nc_ht=scontent.facc1-1.fna&tp=6&oh=53987d64b1070231bbf722f40b80d9da&oe=5FC33451"
                />
               <div className="sidebar__headerRight" >
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>

                <IconButton>
                    <ChatIcon   />
                </IconButton>

                <IconButton>
                    <MoreVertIcon   />
                </IconButton>
               </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start new chat" type="text"   />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat    />
                <SidebarChat    />
                <SidebarChat    />
                <SidebarChat    />
                <SidebarChat    />
            </div>
        </div>
    )
}

export default Sidebar
