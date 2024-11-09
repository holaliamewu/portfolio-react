import React from 'react';
import { getCurrentSong } from '../services/SpotifyServices';

export default function MusicStand (){

    const songData = getCurrentSong();
    console.log(songData)
    return(
        <div className='mt-[50px] bg-zinc-100 w-full p-[5px] rounded-lg ' >
            <span className='flex space-x-2 bg-white p-[5px] rounded-lg shadow ' >
                <span className='flex bg-zinc-200 h-[60px] aspect-square rounded-lg shadow' >img</span>
                    <span className='flex flex-col justify-center leading-[1.5]' >
                        <h3 className='text-zinc-700 font-semibold ' >anendlessocean</h3>
                        <h5 className='text-zinc-400' >love practitioner</h5>
                    </span>
                </span>
                <p className='flex items-center text-xs text-zinc-400 p-1' ><span className='flex bg-zinc-200 mr-1 h-[15px] aspect-square rounded-full' ></span>currently jamming</p>
            </div>
            )
        }