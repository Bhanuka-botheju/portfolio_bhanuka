'use client';

import React from 'react';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';

export default function Personbio() {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/bhanuka.jpeg"
            alt="profile"
            width={140}
            height={140}
            className="rounded-full w-36 h-36 object-cover ring-2 ring-primary mb-4"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-600 dark:text-gray-300 ">
          Hi, I'm <span className="text-primary">Bhanuka Botheju</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          MACHINE LEARNING ENTHUSIAST
        </p>
    </div>
    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 text-gray-700 dark:text-gray-300 text-sm md:text-lg mt-8 overflow-x-auto">
        {/* Phone */}
        <div className="flex items-center gap-2 whitespace-nowrap ">
            <PhoneIcon className="h-5 w-5 text-primary hover:scale-130 transition-transform duration-800" />
            <span>+94 766 420 749</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 whitespace-nowrap">
            <EnvelopeIcon className="h-5 w-5 text-primary hover:scale-130 transition-transform duration-800" />
            <span>bhanukabothejuofficial@gmail.com</span>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-2 whitespace-nowrap">
            <LinkIcon className="h-5 w-5 text-primary hover:scale-130 transition-transform duration-800" />
            <a
            href="https://github.com/bhanuka-botheju"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            >
            github.com/bhanuka-botheju
            </a>
        </div>
    </div>
    </section>
  );
}
