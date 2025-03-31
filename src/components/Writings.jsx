import React from "react";
import { NavLink } from "react-router-dom";

export default function Writings({blog}) {
    return(
        <>
            <h4 
                className='mt-[50px] xs:w-[100%] mx-auto text-md mb-4 text-zinc-900 font-semibold '
                >
                <span className="hover:underline" >writings</span> and <span className="hover:underline">randoms</span>.</h4>
                { blog.map( blogpost => (
                    <span key={ blogpost.link } className="flex justify-between  text-sm hover:text-zinc-800 w-[100%] mb-2 mx-auto md:mx-0 " >
                        <NavLink to={`${ blogpost.isRandom ? 'randoms' : 'blog'}${blogpost.link}`} className=" " >{blogpost.title}</NavLink> 
                        <h6 className="text-right">{blogpost.releaseDate}</h6>  
                    </span>
                ))}
            </>
    )
}