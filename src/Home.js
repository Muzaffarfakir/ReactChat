import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom"
import Chat from "./Chat";
export default function Home() {
    let nav = useNavigate();
    function move() {
        nav("/chat")
    }
    return (
        <>
             


                <h3 className="text-center my-3 ">
                    Welcome To MUJUTV Chat App
                </h3>
                <div style={{ display: "flex", margin: "auto", textAlign: "center", width: "290px", height: "350px", border: "1px solid black", marginTop: "50px" }} className=" card  text-center">
                    <h6 className="p-3 m-3">
                        MUJUTV is a free online chat website that pairs two random users together in a   video chat. Users can add topics they wish to discuss to find users with common interests. MUJUTV is anonymous to use, with no account registration or age verification. Omegle's terms of service state that users must be 18 or older to use the site, or 13 with parental permission and supervision. However, TODAY Parents found no age verification in place prior to chatting

                    </h6>

                </div>
                <button onClick={move} className="btn btn-primary text-center m-auto d-flex my-3">Start Chat</button>

        </>
    )
}