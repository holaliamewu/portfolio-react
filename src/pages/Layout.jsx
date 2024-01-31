import React, { useState, createContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const ThemeContext = createContext(); 
export default function Layout() {

    const [ theme, setTheme ] = useState('light');
    return(
    <ThemeContext.Provider value={[ theme, setTheme ]} >
        <div className=" font-['Dosis'] text-teal-700 bg-[#fff] mx-auto w-[50%] " >
            <Navbar />
            <Outlet />
        </div>
    </ThemeContext.Provider >
    )
}