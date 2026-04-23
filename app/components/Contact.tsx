'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for UX

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mojyyvoj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection." + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">
            {"I'm always open to discussing new opportunities, interesting ideas, or just saying hello!"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-8 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {"Let's Connect"}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                  <div className="glass p-3 rounded-xl">
                    <Mail className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                  <div className="glass p-3 rounded-xl">
                    <Phone className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href={`tel:${portfolioData.contact.phone}`}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {portfolioData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                  <div className="glass p-3 rounded-xl">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={portfolioData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center justify-center gap-3 py-4 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center justify-center gap-3 py-4 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-8 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Send Message
              </h3>
              
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <Send className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-gray-400">{"Thanks for reaching out. I'll get back to you soon!"}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 glass px-6 py-2 rounded-full hover:bg-white/20 transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full glass px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full glass px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-vertical"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full glass bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;