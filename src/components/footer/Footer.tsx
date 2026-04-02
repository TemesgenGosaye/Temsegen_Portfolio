"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faInstagram,
  faCodepen,
  faDev,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faHeart,
  faRocket,
  faCode,
  faBriefcase,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import socialLinks from "@/data/socialLinks";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const footerSections = [
    {
      title: "Quick Links",
      icon: faRocket,
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      icon: faBriefcase,
      links: [
        { name: "Fullstack Development", href: "#" },
        { name: "Web Design", href: "#" },
        { name: "API Development", href: "#" },
        { name: "Database Design", href: "#" },
        { name: "Cloud Architecture", href: "#" },
        { name: "Technical Consulting", href: "#" }
      ]
    },
    {
      title: "Resources",
      icon: faGraduationCap,
      links: [
        { name: "Blog", href: "#" },
        { name: "GitHub Projects", href: "https://github.com/TemesgenOfficial" },
        { name: "Resume", href: "/resume.pdf" },
        { name: "Tech Stack", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "FAQ", href: "#" }
      ]
    }
  ];

  const socialIcons = [
    { icon: faGithub, href: "https://github.com/TemesgenOfficial", label: "GitHub" },
    { icon: faEnvelope, href: "mailto:Tamizowarrior7@gmail.com", label: "Gmail" },
    { icon: faTelegram, href: "https://telegram.me/thefluxor", label: "Telegram" }
  ];

  const contactInfo = [
    { icon: faEnvelope, text: "Tamizowarrior7@gmail.com", href: "mailto:Tamizowarrior7@gmail.com" },
    { icon: faPhone, text: "+251 905 075 213", href: "tel:+251905075213" },
    { icon: faMapMarkerAlt, text: "Addis Ababa, Ethiopia", href: "#" },
    { icon: faRocket, text: "tamizo.netlify.app", href: "https://tamizo.netlify.app" }
  ];

  return (
    <footer className={`relative bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900 text-white overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-emerald-500/[0.02] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                <FontAwesomeIcon icon={faCode} className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  TEMESGEN GOSAYE
                </h3>
                <p className="text-sm text-gray-400 font-medium">Software Engineer | Computer Science Graduate</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Passionate software engineer specializing in modern web technologies, 
              scalable architectures, and innovative digital solutions. 
              Committed to excellence and continuous learning.
            </p>
            <div className="flex space-x-3">
              {socialIcons.slice(0, 4).map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-emerald-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-emerald-500/30 hover:scale-110 transition-all duration-300 border border-emerald-500/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-emerald-400 text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <FontAwesomeIcon icon={section.icon} className="text-emerald-400" />
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="border-t border-emerald-500/20 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <FontAwesomeIcon icon={info.icon} className="text-emerald-400 text-sm" />
                  </div>
                  <span className="text-sm font-medium">{info.text}</span>
                </a>
              ))}
            </div>
            
            {/* Professional Badge */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 flex items-center space-x-2">
                <FontAwesomeIcon icon={faBriefcase} className="text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">Available for Hire</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 flex items-center space-x-2">
                <FontAwesomeIcon icon={faGraduationCap} className="text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">CS Graduate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-500/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} TEMESGEN GOSAYE. All rights reserved.</span>
              <span className="text-emerald-400">|</span>
              <span className="flex items-center space-x-1">
                <span>Powered by Temesgen Gosaye in Ethiopia</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group border border-emerald-400/30"
          aria-label="Back to top"
        >
          <svg 
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
