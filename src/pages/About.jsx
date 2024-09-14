import React from 'react';
import { ArrowRight, BookHeart } from 'lucide-react'

export default function About() {
    return(
        <div className=' mx-auto pb-[50px] pt-[10px]  text-md' >
            <div className='font-[400] ' >
            <h4 
            className='flex gap-1 items-center font-[900] md:text-xl xs:text-[19px] mb-8 text-center md:text-left mt-[100px]'
            >
                <BookHeart size={20} strokeWidth={1} color='gray' /> 
                  bits about myself.</h4>
                <p className='text-md tracking-wide leading-[1.5] font-[500] text-justify hyphens-auto md:w-[80%]'
                >akwaaba! [means welcome in Twi]. i'm holali, a software eng with a growing eye for aesthetics.
                i recently graduated from <a className=' hover:underline' 
                href='https://scrimba.com/learn/frontend' 
                target='_blank'>scrimba's frontend developer course</a> and i'm ready to share all i've got.
                i'm currently pursuing a degree in computer science at the ghana communication technology university.</p><br/>
                <p className='text-md tracking-wide font-[500] leading-[1.5] text-justify hyphens-auto md:w-[80%]'> i effortlessly love 
                to build optimized and interactive web and mobile applications that are accessible. when i don't have my hands on the keyboard, i'm definitely reading, watching soccer or the <a 
                href="https://www.youtube.com/@sidemenreacts" className="underline " target="_blank" >sidemen</a> [or the <a 
                href="https://youtube.com/@betasquad/" className="underline " target="_blank" >beta squad</a>].
                i think i have some passion for content creating too. i'll definitely hop on it some point in my career.</p>
                <p className='text-md tracking-wide font-[500] leading-[1.5] text-justify hyphens-auto md:w-[80%] mt-5' >and lately i've been playing among us a lot. -- thought you should know:)</p>
        </div>
        <a 
        target='_blank'
        href="https://www.canva.com/design/DAF5xEI6U-k/fb3_M-Fm-EKhVcw8d0u6eA/view?utm_content=DAF5xEI6U-k&utm_campaign=designshare&utm_medium=link&utm_source=editor" 
        className='w-fit tracking-wider px-4 py-2 rounded-md cursor-pointer mt-10 hover:bg-teal-800 active:bg-teal-600 bg-teal-600 
        text-white flex items-center font-[500] text-[14px]  '  >
            <h4  
            className=' origin-left inline-block text-[16px] '
            >view my résumé</h4>
            <span 
            className=" ml-2 "> 
                <ArrowRight size={13} />
            </span>
          </a>
        </div>
    )
}