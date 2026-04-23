'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Smartphone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Technologies', value: '15+' },
   
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Full-Stack Developer
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed">
                I create modern web and mobile applications with clean code and beautiful designs. 
                Currently mastering cutting-edge technologies at Saylani Mass IT Trainings.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl text-center"
                >
                  <div className="text-2xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple-400" size={28} />
                Education
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-purple-400">{portfolioData.education.degree}</span>
                  <p className="text-gray-400">{portfolioData.education.college}</p>
                </div>
                <div>
                  <span className="font-semibold text-purple-400">Saylani Mass IT Trainings</span>
                  <p className="text-sm text-gray-500">Expected 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Code className="text-purple-400" size={28} />
                Frontend
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {portfolioData.skills.frontend.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="glass px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Smartphone className="text-pink-400" size={28} />
                Backend & Tools
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {portfolioData.skills.backend.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="glass px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;