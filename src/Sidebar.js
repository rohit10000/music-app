// JavaScript source code
// ?. => to prevent it from null, 

import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className='sidebar__logo'
                src="https://i.pinimg.com/originals/ae/2e/56/ae2e5651b74a00d5d31b8c6453fa3ebb.png"
                alt="" />

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="YourLibrary" />

            <br />

            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            
            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
    )
}

export default Sidebar;
