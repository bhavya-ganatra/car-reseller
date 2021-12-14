import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import db from '../../Firebase';
import { useStateValue } from '../../StateProvider';

function Sidebar() {
    const [peers,setPeers] = useState([]);
    // const [{user},dispatch] = useStateValue();
    const user = JSON.parse(localStorage.curuser)
    // console.log('current user in sidebar: ',user)
    
    useEffect(()=>{
        // db.collection('rooms').onSnapshot(snapshot=>(
        //     setRooms(snapshot.docs.map(doc=>({
        //         id:doc.id,
        //         data:doc.data()
        //     })))
        // ))
        db.collection('users').onSnapshot(snapshot=>(
            setPeers(snapshot.docs.filter(doc=>doc.id!=user.uid)
            .map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        ))

    },[])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>

                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </div>

            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start a new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                {peers.map(peer=>(
                    <SidebarChat key={peer.id} id={peer.id} name={peer.data.displayName} 
                    />
                ))}
            </div>
        </div>
    )
}
export default Sidebar
