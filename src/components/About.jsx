import { useState } from 'react';
import { AlertTriangle, BookHeart, Download } from 'lucide-react'

export default function About({pureColors}) {
    const [ showDownloadMessage, setShowDownloadMessage ] = useState(false);
    return(
        <div className='w-full mx-auto pb-[50px] pt-[50px] bg-[#0A1928] px-[10vw] md:px-[24vw]' >
            { showDownloadMessage && <h4 className='flex gap-2 w-fit px-4 py-3 rounded-md bg-white text-[#0A1928] mx-auto text-[14px] shadow-xl fixed top-5 left-[33%]' > 
            <span> 
                <AlertTriangle color= 'green'/>
            </span> 
            Great! Now check your downloads for the Resume. </h4>}
           <span className='block mx-auto w-fit mb-[100px] '> 
                <BookHeart size={48} strokeWidth={0.25} /> 
           </span>
            <div className='font-[300] ' >
                <h4 
                className='font-[700] text-[17px] py-2 text-center md:text-left'
                style={pureColors}
                  >01. Bits About Myself.</h4>
                <p className='text-[14px] tracking-wider leading-[1.8] font-[200] text-justify hyphens-auto'
                >Hola!. I'm Holali, a dev with a growing eye for aesthetics.
                I recently graduated from <a className='font-[400] origin-left hover:underline' 
                style={pureColors} 
                href='https://scrimba.com/learn/frontend' 
                target='_blank'>Scrimba's Frontend Developer Course</a> and I'm ready to share all I've got.
                I'm currently pursuing a degree in computer Science at the Ghana Communication Technology University.</p><br/>
                <p className='text-[14px] tracking-wider font-[200] leading-[1.8] text-justify hyphens-auto'> I effortlessly love 
                to build optimized and interactive web applications with readable and 
                maintainable code. When I don't have my hands on the keyboard I go to new places and I love watching soccer too.
                I think I have some passion for content creating too. I'll definitely hop on it some point in my career.</p>
        </div>
        <a 
        href="/my-resume.pdf" 
        download
        className='w-fit px-4 py-2 rounded-md cursor-pointer hover:bg-[#030613b7] active:bg-[#030613] bg-[#030613] flex items-center font-[500] text-[14px] my-4 ' 
        style={pureColors} >
            <h4  
            className=' origin-left inline-block '
            onClick={() => {
                setShowDownloadMessage(prev => !prev)
                setTimeout(() => {
                    setShowDownloadMessage(false);
                }, 5000);
            }}
            >Download My Résumé</h4>
            <span 
            className=" ml-2 "> 
                <Download size={15} />
            </span>
          </a>
        </div>
    )
}