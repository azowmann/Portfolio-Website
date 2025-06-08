import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { useState } from 'react'

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content ) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl text-gray-700 dark:text-white hover:text-black"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{content.title}</h3>
        {content.modalContent?.images?.map((src, idx) => (
          <Image key={idx} src={src} alt={`modal-img-${idx}`} className="rounded mb-4" />
        ))}
        <p className="text-gray-700 dark:text-white/90">{content.modalContent?.text}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="experience" className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay:0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'>
          What I offer</motion.h4>
        <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay:0.3, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'>
          My Experience</motion.h2>

        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay:0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          I am currently a Quality Assurance Engineer working remotely for DataVisor. Below are
          some of my other work experiences and passions.
        </motion.p>

        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay:0.9, duration: 0.6 }}
        className='grid grid-cols-auto gap-6 my-10'>
            {serviceData.map(({icon, title, description, link, modalContent}, index)=>(
              <motion.div 
              whileHover={{scale: 1.05}}
              key={index}
              onClick={() => openModal({icon, title, description, link, modalContent})}
              className='border border-gray-400 rounded-lg px-8 py-12
              hover:shadow-black cursor-pointer hover:bg-lightHover
              hover:-translate-y-1 duration-500 dark:hover:bg-darkHover:dark:hover:shadow-white'>
                  <Image src={icon} alt='' className='w-10'/>
                  <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                  <p className='text-sm text-gray-600 leading-5 dark:text-white/80'> 
                      {description}
                  </p>
                  <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                      Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                  </a>
              </motion.div>
            ))}
        </motion.div>
        
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} content={selectedCard} />
    </motion.div>
  )
}

export default Experience