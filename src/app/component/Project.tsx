'use client';

import { projects } from '@/content/projects';
import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Project() {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <article
                key={project.title}
                className="bg-white/30 dark:bg-white/10 border border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.015] transform">
            <div className="relative aspect-video group overflow-hidden">
                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                    <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                    {tech}
                    </span>
                ))}
                </div>

                <div className="flex gap-4 mt-2">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    >
                        <FaGithub className="w-5 h-5" />
                        <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    >
                        <FaExternalLinkAlt className="w-5 h-5" />
                        <span className="text-sm font-medium">Get Demo</span>
                    </a>
                </div>
            </div>
        </article>
        ))}
      </div>
    </section>
  );
}
