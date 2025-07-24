'use client';

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';

export default function Personbio() {
  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/bhanuka.jpeg"
            alt="profile"
            width={160}
            height={160}
            className="rounded-full object-cover ring-4 ring-primary shadow-md mb-6 w-40 h-40"
          />

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-primary">Bhanuka Botheju</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 font-medium">
            MACHINE LEARNING ENTHUSIAST
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-700 dark:text-gray-300 text-sm md:text-lg">
            {/* Phone */}
            <div className="flex items-center gap-2 group">
              <FaPhone className="h-5 w-5 text-primary group-hover:scale-125 transition-transform duration-200" />
              <span className="group-hover:text-primary transition-colors duration-200">+94 766 420 749</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 group">
              <FaEnvelope className="h-5 w-5 text-primary group-hover:scale-125 transition-transform duration-200" />
              <span className="group-hover:text-primary transition-colors duration-200">
                bhanukabothejuofficial@gmail.com
              </span>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-2 group">
              <FaGithub className="h-5 w-5 text-primary group-hover:scale-125 transition-transform duration-200" />
              <a
                href="https://github.com/bhanuka-botheju"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline group-hover:text-primary transition-colors duration-200"
              >
                github.com/bhanuka-botheju
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
