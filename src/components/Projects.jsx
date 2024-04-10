import React, { useState } from 'react';
import projects from '../resources/projectsData';
import { Eye, Github, Globe } from 'lucide-react';

export default function Projects({pureColors}) {
 
    console.log(projects)
    return (
        projects.map(project => (           
                <div className = 'xs:w-[100%] border cursor-not-allowed border-teal-200 bg-teal-50 md:w-[90%] mx-auto rounded mr-1 min-w-[120px] h-fit flex flex-col p-3' >
                    <h1 className='text-[14px] text-teal-800 font-bold my-0  ' >{project.title} </h1>
                    <p className='text-[12px] font-["Inter"] font-[400] leading-tight my-2 ' >{project.description}</p>
                    <span className='flex gap-1 text-[12px] font-semibold bg-teal-100 px-2 py-1 rounded-full w-fit items-center' >
                        <Globe size={13} strokeWidth={2} />
                        <a className=' ' href='' >{project.siteLink}</a>
                    </span>
                </div>
        ))
        )
}