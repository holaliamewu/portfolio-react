import React, { useState } from 'react';
import projects from '../resources/projectsData';
import { Eye, Github } from 'lucide-react';

export default function Projects({pureColors}) {
 
    console.log(projects)
    return (
        projects.map(project => (

            <span 
            className="group flex md:flex-row relative flex-col justify-center border-[1px] border-teal-300 gap-[20px] my-[35px] p-8  rounded  md:w-[90%] w-[80vw] h-fit  mx-auto bg-teal-50" >
            <span className=' max-w-[100px] py-1 bg-teal-200 font-semibold px-[7px] absolute top-[-10px] left-[-7px] rounded-md  '
            id='img--container'>{project.status}</span>    
            <img  
                className = 'rounded md:w-[45%] w-full border-[1px]  ' 
                src = {project.projectImg}
                alt = "project image" 
                />  
                
                <div className = '' >
                    <span className='flex justify-between '>
                        <h1 className='text-[17px] text-teal-400 font-[700]' >{project.title} </h1>
                        <span className='group-hover:visible md:invisible'>
                            <a 
                            href={project.siteLink}
                            target='_blank'
                            className='cursor-pointer inline-block px-1'>
                                <Eye strokeWidth={1.5} size={20} />
                            </a>
                            <a 
                            href={project.githubLink}
                            target='_blank'
                            className='cursor-pointer inline-block px-1'>
                                <Github strokeWidth={1.5} size={20} />
                            </a>
                        </span>
                    </span>
                    <p className='text-[16px] font-[400] my-5' >{project.shortDescription}</p>
                    <ul>
                        {project.techStackUsed.map(stack => <li className='inline-block mr-2 text-[12px] px-2 my-1 py-1 text-[teal] bg-teal-100 rounded font-[600]' >{stack}</li>)}
                    </ul>
                </div>
            </span>
        ))
        )
}