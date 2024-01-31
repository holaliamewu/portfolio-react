import React, { useState } from 'react';
import projects from '../resources/projectsData';
import { Eye, Github } from 'lucide-react';

export default function Projects({pureColors}) {
 
    console.log(projects)
    return (
        projects.map(project => (

            <span 
            className="group flex md:flex-row flex-col justify-center gap-[20px] my-[35px] p-8  rounded  md:w-[50vw] w-[80vw] h-fit relative mx-auto bg-[#0A1928]" >
            <span className='fixed hidden h-screen w-screen bg-[#2222227c] top-0 left-0 z-50 '
            id='img--container'>
            </span>    
            <img  
                className = 'rounded md:w-[45%] w-full ' 
                src = {project.projectImg}
                alt = "project image" 
                />  
                
                <div className = '' >
                    <span className='flex justify-between z-10'>
                        <h1 className='text-[17px] text-white font-[700]' >{project.title} </h1>
                        <span className='group-hover:visible md:invisible'>
                            <a 
                            href={project.siteLink}
                            target='_blank'
                            className='cursor-pointer inline-block px-1'>
                                <Eye />
                            </a>
                            <a 
                            href={project.githubLink}
                            target='_blank'
                            className='cursor-pointer inline-block px-1'>
                                <Github />
                            </a>
                        </span>
                    </span>
                    <p className='text-[14px] font-[300] my-5' >{project.shortDescription}</p>
                    <ul>
                        {project.techStackUsed.map(stack => <li className='inline-block mr-2 text-[12px] px-2 my-1 py-1 text-[teal] bg-[#213c5360] rounded font-[600]' >{stack}</li>)}
                    </ul>
                </div>
            </span>
        ))
        )
}