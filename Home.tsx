import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
  onOpenFeedback: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenFeedback }) => {
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

  const initiateDownload = () => {
    navigate('/download');
  };

  return (
    <div className="relative min-h-screen bg-transparent text-black dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col transition-colors duration-300 z-10">
      {/* Navigation */}
      <nav className="border-b border-gray-100 dark:border-gray-800 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-10 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight text-xl dark:text-white">CapyMod</span>
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
          <button 
            onClick={onOpenFeedback}
            className="text-sm font-medium border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Report Issue
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 flex flex-col items-center w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 border border-green-100 dark:border-green-800/50">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Virus Free Secure Download</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight dark:text-white">
            CapCut Mod APK <br />
            <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Premium Unlocked</span>
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mt-6 font-normal leading-relaxed transition-colors duration-300">
            Download the <strong className="dark:text-gray-200">CapCut Pro Mod APK</strong> with absolutely no watermark, all pro features unlocked, templates, and 4K export support. Get the ultimate premium video editing experience securely and efficiently.
          </h2>

          <div className="h-8"></div>

          <div className="relative w-full max-w-md mt-6 mx-auto">
            {/* Hand-drawn realistic arrow and text */}
            <div className="hidden md:flex absolute -left-44 top-[50%] transform -translate-y-1/2 flex-col items-center opacity-40 pointer-events-none">
              <span className="font-mono text-sm text-gray-600 dark:text-gray-400 rotate-[-15deg] mb-2 mr-6 text-opacity-80">
                Click here
              </span>
              <svg 
                 width="120" 
                 height="90" 
                 viewBox="0 0 120 90" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="1" 
                 strokeLinecap="round" 
                 strokeLinejoin="round" 
                 className="text-gray-600 dark:text-gray-400"
               >
                 {/* A natural hand-drawn curve looping/curving from the middle towards the button */}
                 <path d="M10,30 C 40,-10 70,70 30,60 C -10,50 40,10 100,70" />
                 {/* Arrowhead */}
                 <path d="M85,60 L100,70 L90,82" />
              </svg>
            </div>

            {/* Download Section */}
            <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-2xl shadow-black/5 dark:shadow-none relative overflow-hidden transition-colors duration-300">
               <div className="flex flex-col items-center gap-6 relative z-10">
                
                <div>
                  <h3 className="font-semibold text-xl tracking-tight text-gray-900 dark:text-white line-clamp-1 transition-colors duration-300">CapCut Mod apk latest version</h3>
                  <div className="flex items-center justify-center gap-3 mt-2 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    <span>316.46 MB</span>
                    <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300"></span>
                    <span>v18.1.0 Premium</span>
                  </div>
                </div>

                <div className="w-full mt-2">
                    <button
                      onClick={initiateDownload}
                      className="group w-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200 transition-all active:scale-[0.98] py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg shadow-black/10 dark:shadow-white/10"
                    >
                      Get Link
                    </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SEO Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mt-24 text-left space-y-12 pb-12"
        >
          <div className="flex flex-col gap-10 bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                About CapCut Pro Mod APK
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="text-black dark:text-white">CapCut</strong> is a top-tier video editing application that empowers creators to produce high-quality content effortlessly. With the <strong className="text-black dark:text-white">CapCut Pro Mod APK</strong>, you get exclusive access to all <strong className="text-black dark:text-white">Premium features Unlocked</strong> without spending a dime. Experience a seamless editing workflow with absolutely <strong className="text-black dark:text-white">No Watermark</strong> on your exported videos.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether you are a casual user or a professional video creator, downloading the <strong className="text-black dark:text-white">CapCut Latest Version</strong> ensures you have the most powerful tools at your fingertips. Take advantage of advanced capabilities like smooth <strong className="text-black dark:text-white">Slow Motion</strong>, professional <strong className="text-black dark:text-white">Chroma Key</strong> (Green Screen), and crystal-clear <strong className="text-black dark:text-white">4K Export</strong> resolution, all available via <strong className="text-black dark:text-white">Free Download</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Why Choose CapCut Mod APK 2026?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Zero Watermarks</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Export your masterpieces without any intrusive branding. The <strong className="text-black dark:text-gray-200">CapCut without watermark</strong> feature guarantees your content remains 100% yours.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Premium Unlocked</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Access thousands of exclusive filters, premium transitions, and trending viral video templates straight from the <strong className="text-black dark:text-gray-200">CapCut Latest Version</strong>.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Advanced Video Editor Tools</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Master the art of video creation with <strong className="text-black dark:text-gray-200">Chroma Key</strong> background removal, multi-layer timeline, and fluid optical flow <strong className="text-black dark:text-gray-200">Slow Motion</strong>.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">4K Ultra HD Export</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Save your projects in stunning quality. Enjoy <strong className="text-black dark:text-gray-200">4K Export</strong> at 60fps support which is essential for professional creators.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400 dark:text-gray-500 font-medium border-t border-gray-50 dark:border-gray-900 transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} CapyMod.</p>
      </footer>
    </div>
  );
};
