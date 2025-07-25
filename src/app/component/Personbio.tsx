'use client';

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';

export default function Personbio() {
  return (
    <section
      id="personbio"
      className="py-28 bg-zinc-100 text-zinc-800 transition-colors duration-300"
    >
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center font-sans">
          {/* Profile Image */}
          <div className="mb-6 relative w-44 h-44 shadow-xl rounded-[1.5rem] overflow-hidden">
            <Image
              src="/bhanuka.jpeg"
              alt="profile"
              fill
              className="object-cover"
            />
          </div>


          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 drop-shadow-sm mb-3">
            Hi, I'm <span className="text-cyan-600">Bhanuka Botheju</span>
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl font-medium text-zinc-600 mb-10 italic tracking-wide">
            MACHINE LEARNING ENTHUSIAST
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-zinc-700 text-sm md:text-base font-medium">
            {/* Phone */}
            <div className="flex items-center gap-2 group transition-all duration-200">
              <FaPhone className="h-5 w-5 text-cyan-600 group-hover:scale-125 transition-transform" />
              <span className="group-hover:text-cyan-600 transition-colors">+94 766 420 749</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 group transition-all duration-200">
              <FaEnvelope className="h-5 w-5 text-cyan-600 group-hover:scale-125 transition-transform" />
              <span className="group-hover:text-cyan-600 transition-colors">
                bhanukabothejuofficial@gmail.com
              </span>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-2 group transition-all duration-200">
              <FaGithub className="h-5 w-5 text-cyan-600 group-hover:scale-125 transition-transform" />
              <a
                href="https://github.com/bhanuka-botheju"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline group-hover:text-cyan-600 transition-colors"
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
