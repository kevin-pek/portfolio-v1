import { useState } from "react"
import Image from 'next/image'
import menu from '/public/icons/menu.svg'
import github from '../../../public/icons/github.png'
import linkedin from '../../../public/icons/linkedin.svg'
import './navbar.css'

const navLinks = ['About', 'Work', 'Contact']

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div id='bg' className='fixed top-0 z-40 hidden h-16 w-full sm:block' />
      <nav className='fixed top-0 z-50 mx-auto flex h-16 w-full flex-row items-center justify-between p-8'>
        <ul className='mx-auto hidden list-none flex-row gap-10 sm:flex'>
          {navLinks.map((nav, i) => 
            <li key={i} className='text-gray-300 duration-500 hover:text-white'>
              <button>{nav}</button>
            </li>
          )}
          <li className='flex flex-row gap-3'>
            <a href='https://github.com/kevin-pek' target="_blank">
              <Image src={github} alt='github' className='h-6 w-6 object-contain' />
            </a>
            <a href='https://www.linkedin.com/in/kevin-pek-yt' target="_blank">
              <Image src={linkedin} alt='linkedin' className='h-6 w-6 object-contain' />
            </a>
          </li>
        </ul>
        {/* mobile navbar */}
        <div className='flex items-center justify-end sm:hidden'>
          <Image src={menu} alt='menu' className='h-[28px] w-[28px] object-contain'
            onClick={() => setToggle(!toggle)} />
          <div className={`${toggle ? 'flex' : 'hidden'} absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl`}>
            <ul className='list-none flex-row gap-10 sm:flex'>
              {navLinks.map((nav, i) => 
                <li key={i}>{nav}</li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav className='bottom-4 right-4 flex w-fit flex-col items-center sm:fixed'>
      </nav>
    </>
  )
}
