'use client';

import { classes } from '@/content/classes';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaClock, FaComment } from 'react-icons/fa';

export default function Classes() {
  return (
    <section id='physicsclass' className="bg-gray-50 py-20 px-4 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center tracking-tight text-gray-800">
          Advanced Level Physics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((cls) => (
            <article
              key={cls.title}
              className="relative bg-white/60 border border-gray-200 shadow-md rounded-2xl p-6 overflow-hidden group transform transition-transform duration-500 hover:scale-[1.03]"
            >
              <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-[-100%]">
                <Link href={cls.title}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                    {cls.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-700 mb-3">{cls.lesson}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {cls.date}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-2" />
                    {cls.time}
                  </span>
                </div>
              </div>

              {/* Hovered Content Slide In */}
              <div className="absolute inset-0 p-6 bg-blue-50 text-blue-900 rounded-2xl transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0">
                <p className="text-xl font-medium"><FaComment className='text-xl'/> {cls.comment}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
