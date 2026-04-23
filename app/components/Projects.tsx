'use client';
import { motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioData.projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioData.projects.length) % portfolioData.projects.length);
    setIsAutoPlay(false);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioData.projects.length);
    setIsAutoPlay(false);
  };

  return (
    <section id="projects" className="py-32 px-6 bg-slate-950/50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web & mobile development
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="overflow-hidden rounded-3xl glass border border-white/10 shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioData.projects.map((project, index) => (
                <div key={project.name} className="w-full shrink-0 px-4 md:px-6">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {portfolioData.projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-linear-to-r from-purple-400 to-pink-400 scale-125 shadow-lg shadow-purple-500/50'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-10 glass p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={goNext}
            className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-10 glass p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <Link
            href={portfolioData.links.github}
            target="_blank"
            className="glass inline-flex items-center gap-3 px-10 py-5 rounded-3xl font-semibold text-lg bg-linear-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02]"
          >
            View All Projects on GitHub
            <ExternalLink size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -10 }}
      className="glass group h-full transition-all duration-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 border border-white/10 hover:border-purple-400/50 mx-auto max-w-sm"
    >
      {/* Project Image */}
      <div className="relative h-80 overflow-hidden bg-linear-to-br from-purple-500/10 to-pink-500/10">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
        />
        
        {/* Overlay & Quick Links */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm" />
        
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
          <Link
            href={project.liveLink}
            target="_blank"
            className="glass flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex-1 justify-center"
          >
            <Eye size={16} />
            <span className="text-sm font-medium">Live</span>
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            className="glass p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            <FaGithub size={18} />
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-all duration-300 line-clamp-2">
          {project.name}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="glass px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
            Next.js
          </span>
          <span className="glass px-3 py-1 rounded-full text-xs font-medium bg-pink-500/20 text-pink-300">
            Tailwind
          </span>
          <span className="glass px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
            Firebase
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link
            href={project.liveLink}
            target="_blank"
            className="flex-1 glass flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-semibold hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border border-white/20"
          >
            <Eye size={18} />
            View Live
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            className="glass p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:rotate-12"
            aria-label="GitHub Repository"
          >
            <FaGithub size={22} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;