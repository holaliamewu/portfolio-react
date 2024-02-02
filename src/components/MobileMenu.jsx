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
                        backgroundColor: isActive ? '#99f6e4' : 'rgba(204,251,241,0.46)',
                    }}}
                    className='px-[6px] font-[700] text-center py-2 text-teal-600 inline-block w-full '
                    key={ link.key} 
                    to={link.link} 
                    > {link.title} </NavLink> 
                    < hr className=" bg-teal-800 w-[90%] mx-auto " />
                </div>
      ))

    return(
        <>
        { seeMobileMenu && <div 
            className=" absolute backdrop-blur top-12 w-[30vw] rounded-md right-7 " >
            {mobileLinkButtons}
            </div>}
            </>)
            }