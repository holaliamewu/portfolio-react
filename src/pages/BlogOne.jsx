import { CalendarDays } from 'lucide-react';
import React from 'react';
import SupportMe from '../components/SupportMe';
import HomeButton from '../components/HomeButton';

export default function BlogOne() {
    return (
      <div className="mx-auto w-[90vw] max-w-[500px] text-sm font-[400] leading-[1.8] md:leading-[2] text-zinc-500 min-h-[100vh] font-['manrope'] flex flex-col md:mt-16  ">
        <HomeButton />
        <SupportMe />
        <h1 className=" text-xl font-semibold text-zinc-800 mt-[50px] mb-1" >coding is not hard: they lied and this is why.</h1>
        <h4 className='flex items-center text-xs gap-1 mb-8' > <CalendarDays size={16} /> 5 april, 2024.</h4>
          <h3 className='p-3 border rounded-lg text-sm text-zinc-800 font-semibold mt-4 mb-12'>
          tl;dr: a good foundation in coding is a real game-changer if you want an easy and a fun ride. </h3>
        <p className='text-justify text-md' >
        i’m sure you’ve heard the cliché before: 'coding is hard.' almost every senior developer 
        i know says this at least once when giving advice to a newbie on how they can break into tech. 
        while there's a grain of truth in this cliché, i beg to differ. i know you're like "what?!" but i'll say it again
         and this is article explains why. </p>
        
        <h1 className=' text-md font-semibold text-zinc-800 mt-8 mb-2' >the masses' why</h1>
        <p className='text-justify ' >
        when i started coding some time ago, i was initially excited, knowing all the possibilities and superpowers
          i could unlock by enduring the challenge of learning difficult and mind-bending concepts that i was
          led to believe the computer understands. after a while, i realized the journey was getting rougher 
          and tougher by the day, and the concepts i had to learn to communicate with my computer were 
          becoming too demanding for my brain. now, i was left in a dilemma — whether to persevere or take 
          the easier route and give up.
        
        of course, i didn’t give up. i had gone watch some youtube videos that charged me up and instilled 
        in me the mindset that i needed this skill to become who i wanted to be — a process i'm still undergoing. 
        this experience led me to think that coding is hard and that to improve, one must strain their brain and 
        understand difficult concepts. however, after two years of tackling things the hard way, suddenly, coding is becoming easier.
        
        learning react after javascript is much easier, and learning next.js after understanding react.js is as easy 
        as saying 'php is…'—just by the way :) </p>
        
        <h1 className=' text-md font-semibold text-zinc-800 mt-8 mb-2' >the truth</h1>
        <p className='text-justify ' >
        the most naked truth about learning to code is that coding is like 
        learning any other skill: get the basics right and you're good for anything that comes afterwards. many people hear about what they can achieve,
         how lucrative it is, and how it can give its learners superhuman abilities, so they decide to get into it with the least knowledge of the basics as possible. the problem isn't 
          learning it at all costs; it's not learning it correctly! - grabbing the basics. they hear about a <span className='italic'>magician</span> tutor who promises to make 
          them break into tech in two months — three weeks in extreme cases — and secure a job the following month, so they enroll. after completing the course, they realize it was all a lie.</p>
        
        <h1 className=' text-md font-semibold text-zinc-800 mt-8 mb-2' >'what do i do' </h1> 
        <p className='text-justify ' >
        i'll be very straightforward with this one: learning to code is like building a structure — the foundation is crucial.
          if you want a stronger structure, you need to make the foundation stronger. go deeper into that course's basics and look at how it'll treat you for the rest of your coding journey. 
        
        <span className="block my-6 px-2 py-4 pr-6 rounded-lg text-zinc-800 font-semibold border-l-teal-400 border  border-l-4" >
          bonus: tall buildings have very deep and firm foundations. if you want to go higher in anything, you need deep roots. 
          depth will make you stand out.
        </span>
      
        <h1 className=' text-md font-semibold text-zinc-800 mt-8 mb-2' >last gold</h1>
        learning any new skill, like coding, may seem hard if the foundation isn't strong enough to accommodate advanced 
        concepts that follow basic ones. if you're learning how to code — in any language, framework, or any other skill outside 
        tech — take time to grasp the basics well, and i promise you'll find coding to be at least 'not hard,' even if it's not easy.
        </p>
        <h3 className='p-3 border rounded-lg font-semibold text-zinc-800 text-md mt-4 mb-12' >  tl;dr: a good foundation in coding is a real game-changer if you want an easy and a fun ride. </h3>
        
        </div>
    )
}
