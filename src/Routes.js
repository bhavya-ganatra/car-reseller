import React from "react";
import { Router } from "@reach/router";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import Sell from "./Pages/Sell";
import Detail from "./Pages/Detail";
import MyAccount from "./Pages/MyAccount";

export default function Routes(){
    return(
        <>
        <Router>
            <Home path="/" />
            <Cars path="/cars" />
            <Sell path="/sell" />
            <MyAccount path="/myaccount"/>
            <Detail path="/detail/:id" />
        </Router>
        </>
    );
}