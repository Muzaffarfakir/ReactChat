import React from "react";
import ReactDom from "react-dom/client";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
let root = ReactDom.createRoot(document.getElementById("root"));
root.render(

    <>
        <BrowserRouter>
            <Navbar />

        </BrowserRouter>

    </>
) 