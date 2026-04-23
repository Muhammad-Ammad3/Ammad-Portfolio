import Link from 'next/link';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <Link href="/" className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Muhammad Ammad
          </Link>
          
          <div className="flex gap-6">
            <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-green-400 transition-colors">
              Email
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-gray-500 text-sm">
          © 2025 Muhammad Ammad. Built with Next.js & Tailwind CSS v4. 🚀
        </div>
      </div>
    </footer>
  );
};

export default Footer;