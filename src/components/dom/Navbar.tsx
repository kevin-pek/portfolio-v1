import { useState } from "react"
import Image from 'next/image'
import menu from '/public/icons/menu.svg'
import github from '../../../public/icons/github.png'
import linkedin from '../../../public/icons/linkedin.svg'

const navLinks = ['About', 'Work', 'Contact']

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav className='fixed top-0 z-50 mx-auto flex h-16 w-full flex-row items-center justify-between bg-transparent p-8 text-gray-100'>
        <ul className='mx-auto hidden list-none flex-row gap-10 sm:flex'>
          {navLinks.map((nav, i) => 
            <li key={i}>{nav}</li>
          )}
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
        <a href='https://github.com/kevin-pek' target="_blank">
          <Image src={github} alt='github' className='h-8 w-8 object-contain' />
        </a>
        <a href='https://www.linkedin.com/in/kevin-pek-yt' target="_blank">
          <Image src={linkedin} alt='linkedin' className='h-8 w-8 object-contain' />
        </a>
      </nav>
    </>
  )
}
