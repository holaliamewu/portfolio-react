import React, { useState, createContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const SeeMenuContext = createContext();


export default function Layout() {
    const [ seeMobileMenu, setSeeMobileMenu ] = useState(false);

    return(
        <SeeMenuContext.Provider value={[seeMobileMenu, setSeeMobileMenu ]}>
            <div className="w-full  " >
                <div 
                className=" font-['manrope'] text-[#222]   bg-[#fff] mx-auto w-[90vw] md:w-[60vw] lg:w-[50vw] 2xl:w-[30vw] " >
                <Navbar />
                <Outlet />
                </div>
            </div>
        </SeeMenuContext.Provider>
    )
}