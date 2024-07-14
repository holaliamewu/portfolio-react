import { Drama } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Randoms() {
  return (
    <div>
        <h1 className='flex gap-1 items-center font-[700] md:text-[18px] xs:text-[19px]  text-center md:text-left mt-[100px]' ><Drama size={20} strokeWidth={1.5}/> randoms</h1>
        <p className='text-[12px] text-gray-500 mb-[60px]' >just random thoughts. happy. sad. anything. hope you relate or something.</p>
        <Link to='/randoms/i-love-whatever-youre-doing-keep-up' className='flex items-center justify-between md:w-[70%]' >
        <h4 className='text-sm '>"i love whatever you're doing. keep up"</h4>
        <h4 className='text-sm ' >14. 07. 24</h4>
        </Link>
    </div>
  )
}
