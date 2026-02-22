import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-24 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className='max-w-5xl mx-auto'>

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex items-center gap-3 justify-center mb-4'
        >
          <span className='h-px w-12 bg-gray-900 dark:bg-white' />
          <span className='text-xl uppercase tracking-[0.2em] text-gray-900 dark:text-white font-medium'>
            About
          </span>
          <span className='h-px w-12 bg-gray-900 dark:bg-white' />
        </motion.div>

        {/* Two-column editorial layout */}
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-12 lg:gap-16 items-start'>

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-8'
          >
            <div>
              <p className='text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-3'>
                Background
              </p>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-[0.95rem]'>
                4th year Honours Computer Science student at McMaster University. I'm passionate about data, artificial intelligence,
                and building things that are both functional and thoughtfully designed.
              </p>
            </div>

            <div>
              <p className='text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-3'>
                Currently
              </p>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-[0.95rem]'>
                Working as a Software Developer at RBC Borealis, I focus on building automation and validation pipelines 
                — developing MCP tools, designing data workflows, and strengthening the reliability of large-scale enterprise systems.
              </p>
            </div>
          </motion.div>

          {/* Vertical divider — desktop only */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='hidden lg:block w-px bg-gray-200 dark:bg-gray-700 self-stretch origin-top'
          />

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className='space-y-8'
          >
            <div>
              <p className='text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-3'>
                Interests
              </p>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-[0.95rem]'>
                I’m motivated by the challenge of turning data into insight 
                — applying statistical reasoning, building machine learning systems, 
                and exploring how intelligent models behave under real-world constraints.
              </p>
            </div>

            <div>
              <p className='text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-3'>
                Outside of work
              </p>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-[0.95rem]'>
                I enjoy building financial literacy and learning new languages. 
                I’m also a casual poker player, drawn to the game’s mix of probability, psychology, and risk. 
                I’m always looking to connect with like-minded people — feel free to reach out.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom facts strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='mt-16 pt-10 border-t border-gray-100 dark:border-gray-800
            grid grid-cols-2 sm:grid-cols-4 gap-8'
        >
          {[
            { label: 'Degree',    value: 'BASc Computer Science' },
            { label: 'University', value: 'McMaster University' },
            { label: 'Based in',  value: 'Mississauga, ON' },
            { label: 'Status',    value: '@ RBC Borealis - April 2026' },
          ].map(({ label, value }, i) => (
            <div key={i}>
              <p className='text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-1'>
                {label}
              </p>
              <p className='text-sm text-gray-700 dark:text-gray-300 leading-snug'>
                {value}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  )
}

export default About