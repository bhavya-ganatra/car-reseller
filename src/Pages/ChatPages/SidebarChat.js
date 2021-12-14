import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
import db from '../../Firebase';
import { Link } from 'react-router-dom';

function SidebarChat({id,name}) {
    const [seed,setSeed] = useState('')
    const [avatars,setAvatars] = useState("")
    // const [messages,setMessages] = useState("")
    
    useEffect(()=>{
        // setSeed(Math.floor(Math.random()*10000))
        db.collection('users').doc(id).get()
        .then(res=>{
            setAvatars(res.data().photoURL)
        })
    },[]);
    console.log("id and name: ",id,name)
    
    return(
        <Link to={`/peers/${id}`}>
            <div className="sidebarChat">
                <Avatar src={avatars} />
                {/* src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/> */}
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    {/* <p>{messages?(messages[0]?.message):"last seen at..."}</p> */}
                </div>
            </div>
        </Link> 
    )
}

export default SidebarChat
