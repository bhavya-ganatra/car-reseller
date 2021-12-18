import React from "react";
import { Router,Route } from "@reach/router";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import Sell from "./Pages/Sell";
import Detail from "./Pages/Detail";
import MyAccount from "./Pages/MyAccount";
import Login from "./Pages/Login";
import City from "./Pages/City";
// import Chat from "./Pages/ChatPages/Chat"
// import Sidebar from "./Pages/ChatPages/Sidebar"
import MainChat from "./Pages/ChatPages/MainChat";

export default function Routes(){
    return(
        <>
        <Router>
            <Home path="/" />
            <Cars path="/cars" />
            <Sell path="/sell" />
            <MyAccount path="/myaccount/:id"/>
            <Detail path="/detail/:id" />
            <Login path="/login" />
            {/* <Sidebar path="/peers/:peerId" />
            <Chat path="/peers/:peerId" /> */}
            <MainChat path='/peers'/>
            <City path="/cars/:city"/>
        </Router>
        </>
    );
}