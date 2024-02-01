import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";



export default function Layout() {
    return(
        <div className="w-screen h-screen box-border " >
            <div 
            className=" font-['Dosis'] text-teal-700 bg-[#fff] mx-auto md:w-[50%] xs:w-[90vw] " >
            <Navbar />
            <Outlet />
            </div>
        </div>
    )
}