'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-white via-gray-50 to-white dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#0f0f0f] border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
      <div className="container max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-extrabold text-primary tracking-tight">
            Bhanuka Botheju<span className="text-sm font-medium ml-1">™</span>
          </h1>
          <p className="text-sm mt-1 font-light">
            © {new Date().getFullYear()} Bhanuka. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Bhanuka-botheju"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl hover:text-primary transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl hover:text-primary transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-2xl hover:text-primary transition-colors duration-200"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
