import { useState } from 'react';
import { AlertTriangle, ArrowRight, BookHeart, Download } from 'lucide-react'

export default function About() {
    return(
        <div className=' mx-auto pb-[50px] pt-[10px]  text-[16px]' >
            <div className='font-[300] ' >
            <h4 
            className='flex gap-1 items-center font-[700] md:text-[18px] xs:text-[19px] mb-8 text-center md:text-left mt-[100px]'
            >
                <BookHeart size={20} strokeWidth={1} color='gray' /> 
                  Bits About Myself.</h4>
                <p className='text-[13px] tracking-wider leading-[1.8] font-[400] text-justify hyphens-auto md:w-[80%]'
                >Akwaaba! [ means Welcome in <span className='italic ' >Twi</span> ]. I'm Holali, a software eng with a growing eye for aesthetics.
                I recently graduated from <a className='font-[600] hover:underline' 
                href='https://scrimba.com/learn/frontend' 
                target='_blank'>Scrimba's Frontend Developer Course</a> and I'm ready to share all I've got.
                I'm currently pursuing a degree in computer Science at the Ghana Communication Technology University.</p><br/>
                <p className='text-[13px] tracking-wider font-[400] leading-[1.8] text-justify hyphens-auto md:w-[80%]'> I effortlessly love 
                to build optimized and interactive web and mobile applications that are accessible. When I don't have my hands on the keyboard, I'm definitely reading, watching soccer or the <a 
                href="https://www.youtube.com/@sidemenreacts" className="underline " target="_blank" >Sidemen</a> [ or the <a 
                href="https://youtube.com/@betasquad/" className="underline " target="_blank" >Beta Squad</a> ].
                I think I have some passion for content creating too. I'll definitely hop on it some point in my career.</p>
        </div>
        <a 
        target='_blank'
        href="https://www.canva.com/design/DAF5xEI6U-k/fb3_M-Fm-EKhVcw8d0u6eA/view?utm_content=DAF5xEI6U-k&utm_campaign=designshare&utm_medium=link&utm_source=editor" 
        className='w-fit tracking-wider px-4 py-2 rounded-md cursor-pointer mt-10 hover:bg-teal-800 active:bg-teal-600 bg-teal-600 
        text-white flex items-center font-[500] text-[14px]  '  >
            <h4  
            className=' origin-left inline-block text-[13px] '
            >View my Résumé</h4>
            <span 
            className=" ml-2 "> 
                <ArrowRight size={13} />
            </span>
          </a>
        </div>
    )
}