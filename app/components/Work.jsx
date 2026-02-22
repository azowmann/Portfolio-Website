import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

// ─── FILL IN YOUR PROJECT DATA HERE ───────────────────────────────────────────
const projectsData = [
  {
    title: 'Personal Portfolio Website',
    description: 'A centralized platform to present my work, experience, and evolving interests in a clear and accessible way..',
    tags: ['React', 'Next.js', 'Tailwind'],
    link: 'https://github.com/azowmann/Portfolio-Website',
    year: '2026',
  },
  {
    title: 'Stock Returns Tracker',
    description: 'An interactive app that visualizes live stock performance to make market trends clear and accessible.',
    tags: ['Python', 'Streamlit', 'Data Visualization'],
    link: 'https://github.com/azowmann',
    year: '2024',
  },
  {
    title: 'Celestial Classifier',
    description: 'A neural network that predicts exoplanet habitability from planetary and stellar data to guide future space exploration.',
    tags: ['PyTorch', 'Scikit-learn', 'Neural Networks', 'Machine Learning'],
    link: 'https://github.com/kennyzhao-code/Celestial-Classifier',
    year: '2023',
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const ArrowIcon = () => (
  <svg width='14' height='14' viewBox='0 0 14 14' fill='none' className='transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>
    <path d='M2 12L12 2M12 2H5M12 2V9' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <motion.div
      id='work'
      className='w-full px-[12%] py-24 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='flex items-center gap-3 justify-center mb-4'
            >
              <span className='h-px w-12 bg-gray-900 dark:bg-white' />
              <span className='text-xl uppercase tracking-[0.2em] text-gray-900 dark:text-white font-medium'>
                Projects
              </span>
              <span className='h-px w-12 bg-gray-900 dark:bg-white' />
            </motion.div>

      

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-sm text-gray-500 dark:text-gray-400 mb-16 max-w-md mx-auto'
      >
        A curated selection of projects spanning data, AI, and web development.
      </motion.p>

      {/* Project list */}
      <div className='max-w-3xl mx-auto'>
        {/* Table header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='grid grid-cols-[1fr_auto] sm:grid-cols-[auto_1fr_auto_auto] items-center
            gap-4 pb-3 mb-1 border-b border-gray-200 dark:border-gray-700
            text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500'
        >
          <span className='hidden sm:block w-10 text-center'>#</span>
          <span>Project</span>
          <span className='hidden sm:block'>Stack</span>
          <span>Link</span>
        </motion.div>

        {projectsData.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className='group grid grid-cols-[1fr_auto] sm:grid-cols-[auto_1fr_auto_auto]
              items-center gap-4 py-5 border-b border-gray-100 dark:border-gray-800
              hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 cursor-pointer'
          >
            {/* Index number */}
            <span className='hidden sm:block w-10 text-center text-xs text-gray-300 dark:text-gray-600 tabular-nums font-mono'>
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Title + description */}
            <div className='min-w-0'>
              <div className='flex items-center gap-2'>
                <h3 className={`text-sm font-medium transition-colors duration-200
                  ${hoveredIndex === index
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'}`}
                >
                  {project.title}
                </h3>
                <span className='hidden lg:block text-xs text-gray-300 dark:text-gray-600'>
                  {project.year}
                </span>
              </div>
              <p className='text-xs text-gray-400 dark:text-gray-500 mt-0.5 truncate max-w-xs lg:max-w-sm'>
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className='hidden sm:flex flex-wrap gap-1.5 max-w-[180px] justify-end'>
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className='text-xs px-2 py-0.5 bg-gray-100 dark:bg-white/[0.06]
                    text-gray-500 dark:text-gray-400 rounded'
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow link */}
            <div className={`flex items-center justify-center w-7 h-7 rounded-full border
              transition-all duration-200
              ${hoveredIndex === index
                ? 'border-gray-800 dark:border-white text-gray-800 dark:text-white'
                : 'border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'}`}
            >
              <ArrowIcon />
            </div>
          </motion.a>
        ))}
      </div>

      {/* View all link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='text-center mt-12'
      >
        <a
          href='https://github.com/azowmann'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400
            hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group'
        >
          View all on GitHub
          <ArrowIcon />
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Work