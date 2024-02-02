import React, { useState, createContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const SeeMenuContext = createContext();


export default function Layout() {
    const [ seeMobileMenu, setSeeMobileMenu ] = useState(false);

    return(
        <SeeMenuContext.Provider value={[seeMobileMenu, setSeeMobileMenu ]}>
            <div className="w-screen box-border " >
                <div 
                className=" font-['Dosis'] text-teal-700 bg-[#fff] mx-auto md:w-[50%] xs:w-[90vw] " >
                <Navbar />
                <Outlet />
                </div>
            </div>
        </SeeMenuContext.Provider>
    )
}