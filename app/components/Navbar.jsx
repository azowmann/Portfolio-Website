import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
  ]

  return (
    <>
      {/* Background gradient blob — light mode only */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      <nav className={`w-full fixed top-0 left-0 right-0 px-[12%] py-4 flex items-center justify-between z-50
        transition-all duration-300
        ${isScroll
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href='#top'>
            <Image
                src={isDarkMode ? assets.alan_logo_white : assets.alan_logo}
                alt='Alan Zhou'
                className='w-24 cursor-pointer'
            />
        </a>

        {/* Desktop nav links */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className='text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900
                  dark:hover:text-white transition-colors duration-200'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className='flex items-center gap-4'>
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDarkMode(prev => !prev)}
            className='w-8 h-8 flex items-center justify-center rounded-full
              hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
            aria-label='Toggle dark mode'
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=''
              className='w-4'
            />
          </button>

          {/* CTA button — desktop only */}
          <a
            href='#footer'
            className='hidden lg:flex items-center gap-2 px-5 py-2 text-sm rounded-full
              border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300
              hover:border-gray-500 dark:hover:border-gray-400
              transition-colors duration-200'
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=''
              className='w-3'
            />
          </a>

          {/* Mobile hamburger */}
          <button
            className='block md:hidden'
            onClick={openMenu}
            aria-label='Open menu'
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=''
              className='w-5'
            />
          </button>
        </div>

        {/* Mobile side menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64
            z-50 h-screen bg-white dark:bg-gray-950 border-l border-gray-100 dark:border-gray-800
            transition-transform duration-500 translate-x-64'
        >
          {/* Close button */}
          <button
            className='absolute right-6 top-6'
            onClick={closeMenu}
            aria-label='Close menu'
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=''
              className='w-5'
            />
          </button>

          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className='text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900
                  dark:hover:text-white transition-colors duration-200'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar