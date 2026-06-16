import React from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <motion.div
          animate={{
            x: ['0vw', '10vw', '-10vw', '0vw'],
            y: ['0vh', '-10vh', '10vh', '0vh'],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-purple-200 dark:bg-purple-900/50 rounded-full blur-[100px] md:blur-[140px]"
        />
        <motion.div
          animate={{
            x: ['0vw', '-10vw', '10vw', '0vw'],
            y: ['0vh', '10vh', '-10vh', '0vh'],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-200 dark:bg-indigo-900/50 rounded-full blur-[100px] md:blur-[140px]"
        />
        <motion.div
          animate={{
            x: ['0vw', '15vw', '-15vw', '0vw'],
            y: ['0vh', '-15vh', '15vh', '0vh'],
          }}
          transition={{ repeat: Infinity, duration: 30, ease: 'easeInOut' }}
          className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[70vw] bg-blue-200 dark:bg-blue-900/50 rounded-full blur-[100px] md:blur-[140px]"
        />
      </div>
    </div>
  );
};
