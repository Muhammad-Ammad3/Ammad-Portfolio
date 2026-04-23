'use client';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-32 h-32 bg-linear-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full mx-auto mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400 animate-pulse opacity-50"></div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-white via-purple-500 to-pink-300 bg-clip-text text-transparent">
              {portfolioData.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium">
              {portfolioData.title}
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-600">
              {portfolioData.about}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#projects"
              className="glass px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group"
            >
              View My Work
              <ArrowDown className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <a
              href="/Muhammad-Ammad2.pdf"
              download
              className="glass px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;