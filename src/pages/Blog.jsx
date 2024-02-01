import React from "react";
import { Scroll } from "lucide-react";

export default function Blog() {
    return (
        <div 
        className="flex flex-col items-center justify-center min-h-[80vh] ">
            <span className=" mt-[20px] mb-[50px]">
                <Scroll size={60} strokeWidth={0.5} />
            </span>
            <h1 className=" text-2xl tracking-wider font-semibold text-center ">Going live in a bit.<br/> Stay tuned</h1>
        </div> )
}