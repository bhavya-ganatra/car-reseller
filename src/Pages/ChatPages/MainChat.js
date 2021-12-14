import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import './MainChat.css'
function MainChat() {
    // redirection - Chat path route is not working
    // WORKED: Second solution with Routes
    return (
        <div className="app">
            <div className="app__body">
                {/* <Router> */}
                    {/* <Route path="/peers/" component={<Sidebar/>}/> */}
                    {/* <Route path="/peers/:peerId" component={<Chat/>}/> */}
                    {/* <Sidebar path="/peers/:peerId"/>
                    <Chat path="/peers/:peerId" /> */}
                {/* </Router> */}
                    
                <BrowserRouter>
                    <Routes>
                        <Route path="/peers/" element={<Sidebar/>}/>
                        <Route path="/peers/:peerId" element={<> <Sidebar/><Chat/> </>}/>
                        {/* <Sidebar path="/peers/:peerId"/>
                        <Chat path="/peers/:peerId" /> */}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default MainChat
