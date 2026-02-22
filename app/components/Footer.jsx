import { assets } from "@/assets/assets"
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  const links = [
    { label: 'GitHub', href: 'https://github.com/azowmann' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alan-zhou-893481246/' },
    { label: 'Instagram', href: 'https://instagram.com/alan.zhou_34' },
  ]

  return (
    <footer id='footer' className='w-full px-[12%] py-12 border-t border-gray-100 dark:border-gray-800'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>

        {/* Logo + email */}
        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <Image
            src={assets.alan_logo}
            alt='Alan Zhou'
            className='w-20 dark:invert'
          />
          <span className='text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1.5'>
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt=''
              className='w-3.5'
            />
            alan.zhou431@gmail.com
          </span>
        </div>

        {/* Social links */}
        <ul className='flex items-center gap-6'>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs text-gray-400 dark:text-gray-500 hover:text-gray-800
                  dark:hover:text-white transition-colors duration-200'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className='text-xs text-gray-400 dark:text-gray-600'>
          © 2025 Alan Zhou
        </p>
      </div>
    </footer>
  )
}

export default Footer