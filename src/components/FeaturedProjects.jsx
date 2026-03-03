import { NavLink } from "react-router-dom";

export default function FeaturedProjects({projects}) {
    return(
        <>
            <h4 
                className='mt-[50px] xs:w-[100%] mx-auto text-lg mb-4 text-zinc-900 font-[700] '
                >featured projects</h4>
                <section className="flex gap-8 w-fit " >
                    { projects.map( project => project.featured && (
                        <span key={ project.name } className="item flex-1 flex-col  text-sm w-1/2 md:w-[100%] mb-2 mx-auto md:mx-0 " >
                            <img src={project.img} className="aspect-video object-cover w-[150px] rounded-xl shadow " />
                            <a href={project.link} target="_blank" className="flex flex-col text-left mt-4 gap-1" >
                                <h4 className="text-zinc-800 font-[600] item-hover:underline" >{project.name}</h4>
                                <p className="truncate-ellipsis font-light text-[13px] " >{project.description}</p>
                                </a> 
                        </span>
                    ))}
                </section>
            </>
    )
}