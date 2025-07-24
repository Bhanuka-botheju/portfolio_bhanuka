'use client';

import React from 'react';

export default function Getintouch() {
  return (
    <section className="py-20 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden animate-slide-up">
      <div className="p-8 md:p-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE: Title & Description */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Subscribe to receive my latest Machine Learning updates and access carefully curated Advanced Level Physics content.
            </p>
          </div>

          {/* RIGHT SIDE: Form */}
          <form className="flex flex-col md:flex-row gap-4">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white text-gray-800 dark:bg-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
