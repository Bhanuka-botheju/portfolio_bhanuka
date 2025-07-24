'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-700">
      <div className="container max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <span className="text-xl font-bold text-primary">Bhanuka Botheju™</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            © {new Date().getFullYear()} Bhanuka. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Bhanuka-botheju"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-200"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-200"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
