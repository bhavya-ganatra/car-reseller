// import React from "react";
// import { Router,Route } from "@reach/router";
// import Home from "./Pages/Home";
// import Cars from "./Pages/Cars";
// import Sell from "./Pages/Sell";
// import Detail from "./Pages/Detail";
// import MyAccount from "./Pages/MyAccount";
// import Login from "./Pages/Login";
// import City from "./Pages/City";
// // import Chat from "./Pages/ChatPages/Chat"
// // import Sidebar from "./Pages/ChatPages/Sidebar"
// import MainChat from "./Pages/ChatPages/MainChat";

// export default function Routes(){
//     return(
//         <>
//         <Router>
//             <Home path="/" />
//             <Cars path="/cars" />
//             <Sell path="/sell" />
//             <MyAccount path="/myaccount/:id"/>
//             <Detail path="/detail/:id" />
//             <Login path="/login" />
//             {/* <Sidebar path="/peers/:peerId" />
//             <Chat path="/peers/:peerId" /> */}
//             <MainChat path='/peers'/>
//             <City path="/cars/:city"/>
//         </Router>
//         </>
//     );
// }

import React from "react";
import {
    BrowserRouter,
    Routes as RoutesR,
    Route,
  } from "react-router-dom";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import Sell from "./Pages/Sell";
import Detail from "./Pages/Detail";
import MyAccount from "./Pages/MyAccount";
import Login from "./Pages/Login";
import City from "./Pages/City";
import Chat from "./Pages/ChatPages/Chat"
import Sidebar from "./Pages/ChatPages/Sidebar"
// import MainChat from "./Pages/ChatPages/MainChat";
import '../src/Pages/ChatPages/MainChat.css'
import Navbar from "./Components/Navbar";
export default function Routes(){
    return(
        <>
        <BrowserRouter>
            <RoutesR>
                    <Route path="/" element={<Home />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/sell" element={<Sell />} />
                    <Route path="/myaccount/:id" element={<MyAccount />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/login" element={<Login />} />
                    <Route exact path="peers" element={
                        <div className="app">
                            <Navbar />
                            <div className="app__body">
                                <Sidebar/>
                            </div>
                        </div>
                    }/>
                    <Route path="peers/:peerId" element={
                        <div className="app">
                            <Navbar />
                            <div className="app__body">
                                <Sidebar/>
                                <Chat />
                            </div>
                        </div>
                    }/>
                    
            </RoutesR>
        </BrowserRouter>
        </>
    );
}