'use client';

import React, { useState } from 'react';

export default function Getintouch() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setShowPopup(false);

    setTimeout(() => {
      setSubmitting(false);
      setShowPopup(true);
      setEmail(''); // Clear input field
      setTimeout(() => setShowPopup(false), 3000);
    }, 1500);
  };

  return (
    <section className="relative py-20 bg-gray-50 shadow-xl transition-all duration-500 overflow-hidden ">
      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Subscribe to receive the latest Machine Learning insights and exclusive Advanced Level Physics content.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-3xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className={`px-8 py-3 rounded-2xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 active:scale-95 ${
                submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {submitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* POPUP MESSAGE */}
      {showPopup && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/40 backdrop-blur-lg border border-blue-300 text-blue-900 px-6 py-3 rounded-2xl shadow-lg text-sm font-medium transition-all duration-500 animate-popup">
            ✅ You’ve successfully subscribed!
          </div>
        </div>
      )}

      {/* WAVE SVG at bottom */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
        style={{ height: '70px', zIndex: 0 }}
      >
        <svg
          className="relative block w-[200%] h-full animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            fill="#3b82f6" // Tailwind blue-500
            fillOpacity="0.3"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,74.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
          />
          <path
            fill="#3b82f6"
            fillOpacity="0.5"
            d="M0,96L48,96C96,96,192,96,288,80C384,64,480,64,576,74.7C672,85,768,107,864,112C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
          />
        </svg>
      </div>

      <style jsx>{`
        .animate-popup {
          animation: popupFade 0.3s ease forwards;
        }
        @keyframes popupFade {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Wave horizontal sliding animation */
        .animate-wave {
          animation: waveMove 10s linear infinite;
          transform-origin: center bottom;
        }
        @keyframes waveMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
