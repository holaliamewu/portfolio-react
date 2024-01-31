import React, { useContext } from 'react';
import Header from './Header'
import { NavLink } from 'react-router-dom'
import navData from '../resources/navData'
import { Moon, SunDim, Twitter } from 'lucide-react';
import { ThemeContext } from '../pages/Layout';

export default function Navbar() {

  const [ theme, setTheme ] = useContext(ThemeContext);

  function themeSwitcher() {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  const linkButtons = navData.map( link => (
    <NavLink 
    style={ ({ isActive }) => {
      return {
        backgroundColor: isActive ? '#99f6e4' : 'rgba(204,251,241,0.46)',
        fontWeight: isActive ? '500' : '400',
      }
        }
        }
    className='px-[6px] py-[2px] rounded bg-[rgba(204,251,241,0.46)] 
    text-teal-600 '
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
          <span 
          className='flex mx-2  bg-[rgba(204,251,241,0.46)] text-teal-600 
          justify-center items-center px-1 rounded '>
            <Twitter strokeWidth={1.5} size={20} />
          </span>
          <span 
          onClick={ themeSwitcher }
          className='flex bg-[rgba(204,251,241,0.46)] text-teal-600 
          justify-center items-center px-1 rounded '>{
            theme == 'dark' ? <SunDim strokeWidth={2} size={22}  />
                            :  <Moon strokeWidth={1.5} size={20} />
          }
          </span>
        </span>
      </nav>
    )
}