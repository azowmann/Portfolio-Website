import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: "-20%" },
  visible: { opacity: 1, scale: 1, y: "0%", transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, y: "-10%", transition: { duration: 0.2, ease: "easeIn" } },
};

export default function Modal({ isOpen, onClose, content }) {
  return (
    <AnimatePresence>
      {isOpen && content && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-gray-600 dark:text-white hover:text-black text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {content.title}
            </h2>
            {content.modalContent?.images?.map((imgSrc, idx) => (
              <div key={idx} className="mb-4 rounded overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={`modal-img-${idx}`}
                  width={200}
                  height={200}
                  className="rounded object-contain max-w-full h-auto"
                />
              </div>
            ))}
            <p className="text-gray-700 dark:text-white/90">
              {content.modalContent?.text}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
