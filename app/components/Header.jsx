import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center
      px-[12%] py-32 text-center'>

      {/* Portrait */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
        className='mb-8'
      >
        <Image
          src={assets.alan_portrait}
          alt='Alan Zhou'
          className='rounded-full w-36 h-36 object-cover grayscale border-2 border-gray-200 dark:border-gray-700'
        />
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex items-center gap-2 text-base text-gray-500 dark:text-gray-400 mb-4 tracking-wide'
      >
        Hi, I'm Alan
        <Image src={assets.hand_icon} alt='' className='w-4' />
      </motion.p>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className='text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]
          dark:text-white mb-6 max-w-3xl'
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        CS student @ McMaster
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className='text-sm text-gray-500 dark:text-gray-400 max-w-md leading-relaxed mb-10'
      >
        Automation, data pipelines, and machine learning systems.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className='flex flex-col sm:flex-row items-center gap-3'
      >
        <a
          href='#footer'
          className='px-8 py-3 text-sm rounded-full bg-gray-900 dark:bg-white
            text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-100
            transition-colors duration-200 flex items-center gap-2'
        >
          Get in touch
          <Image src={assets.right_arrow_white} alt='' className='w-3.5 dark:invert' />
        </a>
        <a
          href='/AlanResumeSoftware.pdf'
          download
          className='px-8 py-3 text-sm rounded-full border border-gray-300 dark:border-gray-600
            text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-400
            transition-colors duration-200 flex items-center gap-2'
        >
          Download CV
          <Image src={assets.download_icon} alt='' className='w-3.5 dark:invert' />
        </a>
      </motion.div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
      >
        <span className='text-xs text-gray-300 dark:text-gray-600 uppercase tracking-widest'>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className='w-px h-8 bg-gray-300 dark:bg-gray-600'
        />
      </motion.div>
    </div>
  );
};

export default Header;