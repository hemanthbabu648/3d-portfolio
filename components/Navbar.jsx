import React, { useState } from 'react'

import {styles} from '../styles/styles'
import { navLinks } from '@/constants'
import {logo, menu, close} from '../assets'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          href="#" 
          className='flex items-center gap-2'
          onClick={()=>{
            setActive("");
            window.scroll(0,0);
          }}
        >
          <Image
            src={logo}
            alt="Picture of the author"
            width={75}
            height={75}
            className='object-contain rounded-full'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer'>HEMANTH BABU SETTI</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id}
                className={`${
                  active === link.title ? "text-white underline" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image
            src={toggle ? close : menu}
            alt="MENU"
            width={30}
            height={30}
            className='object-contain cursor-pointer'
            onClick={()=> setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden'
          : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2
          min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex flex-col gap-4 justify-end items-start'>
              {navLinks.map((link)=>(
                <li key={link.id}
                  className={`${
                    active === link.title ? "text-white underline" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={()=> {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
             ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar