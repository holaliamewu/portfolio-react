import React from 'react'
import HomeButton from '../components/HomeButton'

export default function RandomsTwo() {
  return (
    <div className="mx-auto w-[90vw] max-w-[500px] text-sm font-[400] leading-[1.8] md:leading-[2] 
        text-zinc-500 min-h-[100vh] font-['manrope'] flex flex-col md:mt-16  "
        >
      <HomeButton/>
        <h1 className='flex gap-1 items-center font-[900] text-zinc-800 text-md text-left mt-[100px]' 
            >what we create, we are</h1>
        <div className='flex flex-col gap-6 text-sm leading-[1.8] md:leading-[2] md:mt-6  font-[400] 
        leading-[1.5] text-justify hyphens-auto' 
        >
            <p >most people think their identity is in what they used to do, what they think they are,
                 or something they will achieve or attain after a big feat. </p>
            <p >while this isn't entirely false, this isn't true as well.</p>
            <p >what we are is found in what we create or do [repeatedly].</p>
            <p > we are what we do on a daily. every decision we take, shapes our identity.</p> 
            <p >an athlete is who they are from the day they start training and not after they win a medal. 
                this applies to everyone.</p>
            <p >you become what you do, repeatedly. you're an engineer because you think problems through
                 and solve them. you're an artist because you create a piece of art everyday and not after a 
                 painting is done.
                </p>
            <p >aristotle beautifully captured it all when he said, <span className='italic bg-orange-50 rounded-md px-1' >"we are what we repeatedly do. excellence, then, is not an act but a habit".</span></p>
        </div>
    </div>
  )
}
