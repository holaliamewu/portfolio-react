import React, {useEffect, useRef} from 'react';
import {motion, useInView} from 'framer-motion';

export default function About({pureColors, setView}) {
    const ref = useRef(null);
    const aboutIsInView = useInView(ref ,{margin: '-50% 0% -50% 0%'})
    useEffect(() => {
        setView(aboutIsInView? true: false)  
    },[aboutIsInView])

    return(
        <div className='w-[80%] mx-auto py-[50px] ' 
            ref={ref}>
            <div className='font-[300]' >
                <h4 
                className='font-[500] text-[16px] py-2'
                style={pureColors}
                  
                  >01. Bits About Myself.</h4>
                <p className='text-[14px] tracking-wide '
                >After getting introduced to the computer and internet by my Uncle at a young age,
                I've always been intruiged by what's behind it. I guess this curiosity is what got me into coding late 2021.</p> <br/>
                <p className='text-[14px] tracking-wide ' >
                I recently graduated from <a className='font-[400] italic origin-left hover:underline' style={pureColors} href='https://scrimba.com/learn/frontend' target='_blank'>Scrimba's Frontend Developer Course</a> and I'm ready to share all I got with my surroundings.
                I live in Accra, Ghana. I'm currently pursuing a degree
                in computer Science at the Ghana Communication Technology University.</p><br/>
                <p className='text-[14px] tracking-wide'> I effortlessly love to build optimized and interactive web applications with readable and 
                maintainable code.</p><br/>
                <p className='text-[14px] tracking-wide'>When I don't have my hands on the keyboard I go to new places and I love watching soccer too.
                I think I have some passion for content creating too. I'll definitely hop on it some point in my career.</p>
        </div>
        <motion.a 
        className='group inline-block font-[500] text-[14px] my-4 ' 
        style={pureColors}
        href='https://rxresu.me/holali07/amewu-emmanuel-mensah' target='_blank' >
            <motion.h4  
            className='group-hover:underline origin-left inline-block'
            >View My Résumé</motion.h4>
            <motion.i
            class="fa-solid fa-arrow-right group-hover:translate-x-0.5 ml-1 duration-150">  </motion.i>
        </motion.a>
        </div>
    )
}