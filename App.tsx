import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { AdminPanel } from './components/AdminPanel';
import { FeedbackModal } from './components/FeedbackModal';
import { DownloadPage } from './components/DownloadPage';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <BrowserRouter>
      <AnimatedBackground />
      <Routes>
        <Route 
          path="/" 
          element={<Home onOpenFeedback={() => setIsFeedbackOpen(true)} />} 
        />
        <Route path="/download" element={<DownloadPage />} />
        {/* Hidden admin route that does not appear in navigation */}
        <Route path="/secret-dashboard" element={<AdminPanel />} />
        
        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <FeedbackModal 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
      />
    </BrowserRouter>
  );
}

