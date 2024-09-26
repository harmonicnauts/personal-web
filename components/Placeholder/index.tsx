import {FC} from 'react';
import { motion } from 'framer-motion';

export const Placeholder : FC = () => {
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row items-center justify-center text-center text-white md:text-right mt-20 p-8 bg-gray-800 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="./assets/under-catstruction.jpeg"
        alt="Placeholder"
        className="w-64 h-64 md:w-96 md:h-96 rounded-lg mb-4 md:mb-0 md:mr-6"
      />
      <p className="text-7xl font-semibold">Coming Soon!</p>
    </motion.div>
  )
}