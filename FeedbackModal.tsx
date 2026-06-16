import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({ type: 'bug', message: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call and state resolution
    if (formData.message.trim() !== '') {
      setStep('success');
      setTimeout(() => {
        onClose();
        setStep('form');
        setFormData({ type: 'bug', message: '', email: '' });
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 overflow-hidden transition-colors duration-300 border border-transparent dark:border-gray-800"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold tracking-tight text-black dark:text-white transition-colors duration-300">Support & Feedback</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {step === 'form' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Issue Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-black dark:text-white transition-colors duration-300"
                    >
                      <option value="bug">Report a Bug</option>
                      <option value="feedback">General Feedback</option>
                      <option value="support">Help & Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your issue or feedback..."
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none h-32 text-black dark:text-white transition-colors duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Email (Optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="For updates on your issue"
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-black dark:text-white transition-colors duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Report</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-black dark:text-white transition-colors duration-300" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-black dark:text-white transition-colors duration-300">Thank You!</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">Your feedback helps us keep CapyMod premium and secure.</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
