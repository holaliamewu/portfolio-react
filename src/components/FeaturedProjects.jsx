import React from "react";
import { NavLink } from "react-router-dom";

export default function FeaturedProjects({projects}) {
    return(
        <>
            <h4 
                className='mt-[50px] xs:w-[100%] mx-auto text-md mb-4 text-zinc-900 font-semibold '
                >featured projects</h4>
                <section className="flex gap-8 w-fit " >
                    { projects.map( project => (
                        <span key={ project.name } className="item flex flex-col  text-sm w-1/2 md:w-[100%] mb-2 mx-auto md:mx-0 " >
                            <img src={project.img} className="aspect-video object-cover w-[150px] rounded-xl shadow " />
                            <NavLink to={project.link} className="flex flex-col text-left mt-4 gap-1" >
                                <h4 className="text-zinc-800 font-semibold item-hover:underline" >{project.name}</h4>
                                <p className="truncate-ellipsis" >{project.description}</p>
                                </NavLink> 
                        </span>
                    ))}
                </section>
            </>
    )
}