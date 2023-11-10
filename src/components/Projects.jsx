import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projects from './projectsData';

export default function Projects({pureColors}) {
   const [ showModal1, setShowModal1 ] = useState(false);
   const [ showModal2, setShowModal2 ] = useState(false);
   const [ showMore, setShowMore ] = useState(false);
    console.log(projects)
    return (
        projects.map(project => (

            <span 
            className="group block my-[55px] p-3  rounded  w-[350px] h-fit relative mx-auto md:ml-0" >
                <img  
                className='rounded'
                src={project.projectImg} 
                alt="project--one--image" />                       
                <span 
                className='flex justify-between'>
                    <h4 
                    style={pureColors}
                    className="text-[14px] font-[600] py-1 ">{project.title}</h4>
                    <span 
                    className='text-[14.5px]'>
                        <a
                        href="https://github.com/holaliamewu/umo-react" target='_blank'>
                            <motion.i 
                            style={pureColors}
                            class="fa-brands fa-github hover:underline p-2 rounded-full active:bg-white hidden "
                            id="fa-github"
                            ></motion.i>
                        </a>
                        <a                             
                        target="_blank"
                        >
                        <motion.i 
                        style={pureColors}
                        class="fa-solid fa-link hover:underline p-1 rounded-full focus:bg-white  hidden"
                        ></motion.i>
                            <span 
                            className="text-[12px] p-1.5 bg-yellow-400 rounded absolute top-1.5 left-1.5">{project.status}</span>
                        </a>
                    </span>
                </span>
                <span 
                className="block  font-[400] text-[12.5px] py-2">{project.shortDescription}</span>
                
                <div 
                className=" " >
                    {project.techStackUsed.map(techStack =>     
                    <span 
                    className="text-[12px] px-1.5 py-1 border-b border-b-2 border-b-inherit  mr-1">{techStack}</span>
                        )}

                    </div>
            </span>
        ))
        )
}