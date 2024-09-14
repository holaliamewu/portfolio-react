import { Undo2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeButton (){
    return(
        <Link to='/' className='flex gap-1 absolute p-1 rounded shadow font-medium hover:border hover:border-zinc-400 text-zinc-400 hover:text-zinc-700 text-xs'><Undo2 size='12' />home</Link>
    )
}