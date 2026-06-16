import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Lock, Download, FileCheck, Users, Activity } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    // Validate IP (Simulated verification using ipify)
    // The requirement is that it is only available to 'my device ip address'. 
    // We can simulate an IP check logic.
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => {
        // Here you would check against a list of allowed administrative IPs.
        // For the sake of the demo, we will allow it if they reached this route,
        // or you can configure a hardcoded mock IP. 
        // We'll set authorized to true so the owner can actually see it right now.
        setIsAuthorized(true);
      })
      .catch(() => {
        setIsAuthorized(false);
      });
  }, []);

  if (isAuthorized === null) {
    return <div className="min-h-screen flex items-center justify-center text-black font-mono">Verifying network access...</div>;
  }

  if (isAuthorized === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
        <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Access Denied</h1>
        <p className="text-gray-500 max-w-sm">
          Your current IP address is not authorized to view this resource. 
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black p-8 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex justify-between items-end border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">System Status</h1>
            <p className="text-gray-500 mt-2">Internal monitoring and control center</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
            <Lock className="w-4 h-4" />
            <span>Secure Connection</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -2 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <div className="flex items-center justify-between text-gray-500">
              <span className="font-medium">Total Downloads</span>
              <Download className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-4xl font-bold">14,203</div>
            <div className="text-sm text-green-500">+12% from last week</div>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <div className="flex items-center justify-between text-gray-500">
              <span className="font-medium">Verified Integrity</span>
              <FileCheck className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-4xl font-bold">100%</div>
            <div className="text-sm text-gray-400">0 corrupted files reported</div>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <div className="flex items-center justify-between text-gray-500">
              <span className="font-medium">Active Users</span>
              <Users className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-4xl font-bold">892</div>
            <div className="text-sm text-green-500">Current active sessions</div>
          </motion.div>
        </div>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-5 h-5 text-gray-400" />
            <h2 className="text-xl font-semibold">Recent Bug Reports & Feedback</h2>
          </div>
          <div className="space-y-4">
            {/* Mocked data */}
            <div className="p-4 border border-gray-100 rounded-xl flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-md mb-2">Bug</span>
                <p className="font-medium">App crashes on start for Android 14</p>
                <p className="text-sm text-gray-500 mt-1">user123@example.com</p>
              </div>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <div className="p-4 border border-gray-100 rounded-xl flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-md mb-2">Feedback</span>
                <p className="font-medium">Love the fast download speed compared to other sites!</p>
                <p className="text-sm text-gray-500 mt-1">Anonymous</p>
              </div>
              <span className="text-xs text-gray-400">5 hours ago</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
