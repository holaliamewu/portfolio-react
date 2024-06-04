import React from 'react';
import projects from '../resources/projectsData';
import { Globe, Layers } from 'lucide-react';

export default function Projects() {
    return (
        projects.map(project => (           
                <div className = 'xs:w-[100%] relative border border-teal-200 bg-teal-50 md:w-[90%] mx-auto rounded mr-1 min-w-[180px] h-fit flex flex-col p-3 ' >
                    <h1 className='text-[14px] font-bold my-0  ' >{project.title} </h1>
                    <span className='group xs:hidden lg:block absolute right-4 ' >
                        <Layers className='text-gray-600 group-hover:text-black transition-all' size={14} />

                        <span className='absolute hidden bg-white border group-hover:flex flex-col gap-2 p-2 rounded shadow-sm' >
                            <h2 className='text-[11px] font-semibold ' >tools i used in this project:</h2>
                            <ul className=' flex flex-wrap gap-1 w-[200px] max-w-[200px]' >
                            {project.techStack.map( stack => (
                                <li className=' text-[11px] px-2 py-1 bg-teal-50 rounded max-h-fit  ' >{stack}</li>
                            ))}
                            </ul>
                        </span>
                        </span>
                    <p className='text-[11.5px] font-["Inter"] text-[gray] font-[500] leading-tight my-2 ' >{project.description}</p>
                    <span className='flex gap-1 text-[12px] cursor-not-allowed font-semibold bg-gray-200 text-gray-500 px-2 py-1 rounded-full w-fit items-center' >
                        <Globe size={16} strokeWidth={1.5} />
                        <a className='cursor-not-allowed ' href='' >{project.siteLink}</a>
                    </span>
                </div>
        ))
        )
}