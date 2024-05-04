import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Home from "./Home";
import "./App.css"
export default function Navbar() {
    return (

        <>

                <ul>
                    <li style={{listStyle:"none"}}>
                        <Link style={{visibility:'hidden'}} to={"/"} >Home</Link>

                    </li>
                    <li style={{listStyle:"none"}}>
                        <Link to={"/chat"} style={{visibility:'hidden'}} >chat</Link>

                    </li>
                </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Chat" element={<Chat />} />
            </Routes>



        </>
    )
}