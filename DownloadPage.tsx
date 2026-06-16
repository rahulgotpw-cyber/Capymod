import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowLeft, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DownloadPage: React.FC = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const DOWNLOAD_LINK = "https://cloud.modxda.com/Apps/CapCut-v18.1.0-MOD-OTR.apk"; 
  const FILE_SIZE = "316.46 MB";
  const FILE_NAME = "CapCut Mod apk latest version";

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="relative min-h-screen bg-transparent text-black dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col transition-colors duration-300 z-10">
      {/* Navigation */}
      <nav className="border-b border-gray-100 dark:border-gray-800 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-10 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            Back to Home
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            title="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </button>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-2xl shadow-black/5 dark:shadow-none transition-colors duration-300 mx-auto mt-8"
        >
        <div className="flex flex-col items-center text-center space-y-6">

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{FILE_NAME}</h1>
            <div className="flex items-center justify-center gap-2 mt-2 text-sm text-green-600 dark:text-green-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified & Safe</span>
            </div>
          </div>

          <div className="w-full border-t border-gray-100 dark:border-gray-800 pt-6">
            {countdown > 0 ? (
              <div className="flex flex-col space-y-4 w-full py-4">
                <div className="flex justify-between text-sm font-medium w-full px-1">
                  <span className="text-gray-500 dark:text-gray-400 animate-pulse">Generating secure link...</span>
                </div>
                <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    className="h-full bg-black dark:bg-white rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: `${((10 - countdown) / 10) * 100}%` }}
                    transition={{ ease: "linear", duration: 1 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-black/20 to-transparent skew-x-12"
                      initial={{ x: "-200%" }}
                      animate={{ x: "200%" }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full space-y-4"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex justify-between items-center border border-gray-100 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">File Size</span>
                  <span className="font-bold dark:text-white">{FILE_SIZE}</span>
                </div>
                <a
                  href={DOWNLOAD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200 transition-all active:scale-[0.98] py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg shadow-black/10 dark:shadow-white/10"
                >
                  Download Now
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* SEO Content Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-4xl mt-16 text-left space-y-12 pb-12 px-4"
      >
        <div className="flex flex-col gap-10 bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              CapCut Pro Mod APK Details
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Before you begin your <strong className="text-black dark:text-white">Free Download</strong>, make sure you have enough storage space. The <strong className="text-black dark:text-white">CapCut Latest Version</strong> file size is approximately <strong className="text-black dark:text-white">316.46 MB</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Enjoy full access to premium tools including <strong className="text-black dark:text-white">No Watermark</strong> exports, <strong className="text-black dark:text-white">Chroma Key</strong> (Green Screen), advanced animations, and high-resolution <strong className="text-black dark:text-white">4K Export</strong> capabilities to make your videos stand out on platforms like TikTok, Instagram, and YouTube.
            </p>
          </div>
        </div>
      </motion.div>
      </main>
    </div>
  );
};

