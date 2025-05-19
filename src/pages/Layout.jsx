import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return(
            <div className="w-full  " >
                <div 
                className=" font-['onest'] text-[#222]   bg-[#fff]  " >
                <Outlet />
                </div>
            </div>
    )
}