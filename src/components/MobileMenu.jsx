import React, { useContext } from "react";
import { SeeMenuContext } from '../pages/Layout'
import navData from "../resources/navData";
import { NavLink } from "react-router-dom";

export default function MobileMenu() {
    const [seeMobileMenu, setSeeMobileMenu ] = useContext(SeeMenuContext);
    const mobileLinkButtons = navData.map( link => (
        <div>
            <NavLink 
                style={ 
                ({ isActive }) => {
                    return {
                        color: isActive ? '#222' : 'gray'
                    }}}
                    className='px-[20px] font-[500] text-[11px] text-center py-1 inline-block w-full '
                    key={ link.key} 
                    to={link.link} 
                    > {link.title} </NavLink> 
                    < hr className="  w-[90%] mx-auto " />
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