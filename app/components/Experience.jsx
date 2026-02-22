import React from 'react'
import { motion } from "motion/react"

// ─── FILL IN YOUR JOB DATA HERE ───────────────────────────────────────────────
const experienceData = [
  {
    role: 'Software Developer',
    company: 'RBC Borealis',
    period: 'Jan 2026 - Present',
    location: 'Toronto, ON',
    type: 'Internship',
    bullets: [
      'Build automation tools and validation pipelines to support enterprise data systems.',
      'Develop internal testing frameworks and CI/CD workflows for production applications.',
    ],
    tags: ['MCPs', 'CI/CD Pipelines', 'Data Validation'],
  },
  {
    role: 'Software Engineer',
    company: 'DataVisor',
    period: 'Jun 2025 — Aug 2025',
    location: 'Remote — Mountain View, CA',
    type: 'Internship',
    bullets: [
      'Created automated UI and API tests to improve software reliability.',
      'Collaborated with cross-functional teams to support product quality and delivery.',
    ],
    tags: ['Automation', 'UI/UX', 'Java'],
  },
  {
    role: 'Lead Assistant Teacher',
    company: 'Spirit of Math Schools',
    period: 'Aug 2019 — Jun 2022',
    location: 'Mississauga, ON',
    type: 'Part-time',
    bullets: [
      'Mentored students and supported individualized learning.',
      'Trained staff and fostered a collaborative learning environment.',
    ],
    tags: ['Team Leadership', 'Communication', 'Teamwork'],
  },
]
// ──────────────────────────────────────────────────────────────────────────────

const Experience = () => {
  return (
    <motion.div
      id='experience'
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
          Experience
        </span>
        <span className='h-px w-12 bg-gray-900 dark:bg-white' />
      </motion.div>

      {/* Timeline */}
      <div className='relative max-w-3xl mx-auto'>

        {/* Vertical line */}
        <div className='absolute left-0 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700' />

        <div className='flex flex-col gap-0'>
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className='relative pl-10 pb-14 group'
            >
              {/* Timeline dot */}
              <div className='absolute left-0 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full
                bg-white dark:bg-gray-900 border-2 border-gray-400 dark:border-gray-500
                group-hover:border-gray-800 dark:group-hover:border-white transition-colors duration-300' />

              {/* Header row */}
              <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3'>
                <div>
                  <h3 className='text-base font-semibold text-gray-900 dark:text-white leading-snug'>
                    {job.role}
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    {job.company} &nbsp;·&nbsp; {job.location}
                  </p>
                </div>
                <div className='flex flex-col sm:items-end gap-1 flex-shrink-0'>
                  <span className='text-xs text-gray-400 dark:text-gray-500 tabular-nums'>
                    {job.period}
                  </span>
                  <span className='text-xs px-2 py-0.5 rounded-full border border-gray-200
                    dark:border-gray-700 text-gray-500 dark:text-gray-400 w-fit'>
                    {job.type}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className='mb-4 space-y-1.5'>
                {job.bullets.map((point, i) => (
                  <li key={i} className='flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300'>
                    <span className='mt-2 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0' />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className='flex flex-wrap gap-2'>
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='text-xs px-2.5 py-1 bg-gray-100 dark:bg-white/[0.06]
                      text-gray-600 dark:text-gray-400 rounded-md'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Experience