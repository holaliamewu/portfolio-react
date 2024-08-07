import React from 'react'
import { Link } from 'react-router-dom'

export default function Randoms() {
  return (
    <div>
        <h1 className='flex gap-1 items-center font-[700] md:text-[18px] xs:text-[19px]  text-center md:text-left mt-[100px]' >"i love whatever you're doing. keep up."</h1>
        <div className='flex flex-col gap-6 text-sm mt-6 tracking-wide font-[400] leading-[1.8] text-justify hyphens-auto' >
            <p className='' >imagine your interviewer telling you this at the end of a seemingly successful interview and so you keep refreshing your mail every minute 
            to see what you think should happen in your perfect world.
            </p>
            <p >so you spend the next 14-21 days waiting for your good news only to see a "we can't proceed with your 
            application at this time". you can feel the pain right? yes that's what i felt. but fortunately for me, i had just finished reading <span className='italic' >the subtle art of not giving a f*ck</span> so
            yeah took like a monday morning class.</p>
            <p className='' >the thing here is: rejections of all sorts will come -- and i actually mean bigger ones. it's your responsibility to respond how you'll respond.  </p>
            <p className='' >so the way forward?</p> 
            <p className='' >since the outcome of the interview means: you're not good enough, i'm going to do 2x of the work i've been doing and hopefully expect something better.</p>
        </div>
    </div>
  )
}
