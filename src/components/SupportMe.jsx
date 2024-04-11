import React from 'react';
import { BadgeCent } from 'lucide-react';

export default function SupportMe() {
    return (
        <a 
        href='buymeacoffee.com/amewuholali3007' 
        target='_blank'
        className='fixed bottom-10 xs:right-3 md:right-10' >
            <BadgeCent 
            size={40} 
            strokeWidth={3} 
            fill='gold' 
            stroke='yellow'
            className='drop-shadow-lg'  />
        </a>
    )
}