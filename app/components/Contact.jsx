import { assets } from "@/assets/assets"
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("")
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus("sending")
    setResult("")
    const formData = new FormData(event.target)
    formData.append("access_key", "82102a6b-6d62-404c-9cba-c85ef32a7eca")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setStatus("success")
        setResult("Message sent — I'll be in touch soon.")
        event.target.reset()
      } else {
        setStatus("error")
        setResult(data.message || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setResult("Network error. Please try again.")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id='contact'
      className='w-full px-[12%] py-24 scroll-mt-20'
    >
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex items-center gap-3 justify-center mb-4'
      >
        <span className='h-px w-8 bg-gray-400 dark:bg-gray-500' />
        <span className='text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-medium'>
          Contact
        </span>
        <span className='h-px w-8 bg-gray-400 dark:bg-gray-500' />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-center text-4xl sm:text-5xl font-light tracking-tight mb-4 dark:text-white'
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center max-w-md mx-auto text-sm text-gray-500 dark:text-gray-400 mb-16'
      >
        Have a question, opportunity, or just want to say hello? I'd love to hear from you.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        onSubmit={onSubmit}
        className='max-w-xl mx-auto flex flex-col gap-4'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input
            type="text"
            placeholder='Your name'
            required
            name='name'
            className='w-full px-4 py-3 text-sm border border-gray-200 dark:border-gray-700
              rounded-lg bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:border-gray-400 dark:focus:border-gray-500
              transition-colors duration-200'
          />
          <input
            type="email"
            placeholder='Your email'
            required
            name='email'
            className='w-full px-4 py-3 text-sm border border-gray-200 dark:border-gray-700
              rounded-lg bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:border-gray-400 dark:focus:border-gray-500
              transition-colors duration-200'
          />
        </div>

        <textarea
          rows='6'
          placeholder='Your message'
          required
          name='message'
          className='w-full px-4 py-3 text-sm border border-gray-200 dark:border-gray-700
            rounded-lg bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-500 resize-none
            focus:outline-none focus:border-gray-400 dark:focus:border-gray-500
            transition-colors duration-200'
        />

        <div className='flex items-center justify-between'>
          {result && (
            <p className={`text-sm ${status === 'success' ? 'text-gray-600 dark:text-gray-400' : 'text-red-500'}`}>
              {result}
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type='submit'
            disabled={status === 'sending'}
            className='ml-auto flex items-center gap-2 px-8 py-3 text-sm
              bg-gray-900 dark:bg-white text-white dark:text-gray-900
              rounded-full hover:bg-black dark:hover:bg-gray-100
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors duration-200'
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
            {status !== 'sending' && (
              <Image src={assets.right_arrow_white} alt='' className='w-3.5 dark:invert' />
            )}
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default Contact