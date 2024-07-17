import React, { useContext } from "react";
import { SeeMenuContext } from '../pages/Layout'
import navData from "../resources/navData";
import { NavLink } from "react-router-dom";
import { Dot } from 'lucide-react'

export default function MobileMenu() {
    const [seeMobileMenu, setSeeMobileMenu ] = useContext(SeeMenuContext);
    const mobileLinkButtons = navData.map( link => (
        <div key={link.key} className="relative">
            <NavLink 
                style={ 
                ({ isActive }) => {
                    return {
                        color: isActive ? '#222' : 'gray'
                    }}}
                    className='px-[30px] font-[500] text-[12px] text-center py-3 inline-block w-full '
                    key={ link.key} 
                    to={link.link} 
                    > {link.title} </NavLink> 
                    < hr className="  w-[90%] mx-auto " />
                    { link.isSpecial && <Dot color='orange' size={50} className='absolute right-1 -top-3' />}
                </div>
      ))

    return(
        <>
        { seeMobileMenu && <div 
            className=" absolute bg-[rgba(0,0,0,0.05)] backdrop-blur top-12 rounded-md right-7 " >
            {mobileLinkButtons}  
            </div>}
            </>)
            }