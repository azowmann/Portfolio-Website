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
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg w-full relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-gray-600 dark:text-white hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {content.title}
            </h2>
            {content.images?.map((src, idx) => (
              <img key={idx} src={src} alt={`modal-img-${idx}`} className="mb-4 rounded" />
            ))}
            <p className="text-gray-700 dark:text-white/90">
              {content.text}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}