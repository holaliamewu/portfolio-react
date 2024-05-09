import React, { useState, useContext } from 'react';
import Header from './Header'
import { NavLink } from 'react-router-dom'
import navData from '../resources/navData'
import { Menu, SunDim, Twitter, X } from 'lucide-react';
import { SeeMenuContext } from '../pages/Layout';
import MobileMenu from './MobileMenu';

export default function Navbar() {

  const [ seeMobileMenu, setSeeMobileMenu ] = useContext(SeeMenuContext);

  const linkButtons = navData.map( link => (
    <NavLink
    className='px-[8px] xs:hidden text-[gray] hover:text-[#222] md:block py-[2px] font-[500] text-[13px]   '
    key={ link.key} 
    to={link.link} 
    > {link.title} </NavLink> 
  ))

    return ( 
      <nav 
      className=' flex justify-between items-center mt-3 mx-auto '>
        <Header />

        <span className='flex gap-1'>
          { linkButtons }
        </span>

        <span className='flex items-center' >
        <a 
        href="https://x.com/amewuholali_/" 
        target="_blank" >
           <Twitter strokeWidth={1.3} size={18} />
        </a>
          <span 
            onClick={() => { setSeeMobileMenu(prev => !prev)}}
            className='p-1 ml-1 md:hidden rounded '>{
              seeMobileMenu ? 
              <span className='text-[gray] hover:text-[#222]' >
                <X strokeWidth={1.5} size={20} /> 
              </span>:
              <span className='text-[gray] hover:text-[#222]' >
                <Menu strokeWidth={1.5} size={20} /> 
              </span>
            }
            </span>
          <MobileMenu />
          </span>
      </nav>
    )
}