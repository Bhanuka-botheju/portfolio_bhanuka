'use client';

import { classes } from '@/content/classes';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

export default function Classes() {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        Advanced Level Physics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map((cls) => (
          <article
            key={cls.title}
            className="bg-white/30 dark:bg-white/10 border border-white/20 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] p-6"
          >
            <Link href={cls.title}>
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {cls.title}
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {cls.lesson}
            </p>
            <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                <span className='flex items-center'>
                    <FaCalendarAlt className='mr-2'/>
                    {cls.date}
                </span>
                <span className='flex items-center'>
                    <FaClock className='mr-2'/>
                    {cls.time}
                </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
