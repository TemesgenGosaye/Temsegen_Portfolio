"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faExternalLinkAlt, 
  faDatabase,
  faMobileAlt,
  faCloud,
  faCode,
  faPalette,
  faChartLine,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";
import { 
  faReact as faReactBrand,
  faGithub,
  faJs,
  faPython as faPythonBrand,
  faNodeJs as faNodeBrand,
  faSass,
  faGitAlt,
  faDocker,
  faAws,
  faFigma,
  faChrome,
  faFirefox,
  faEdge
} from "@fortawesome/free-brands-svg-icons";

const ProjectsSection = ({ id }: { id?: string }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "QR-Based Asset Management System",
      description: "Comprehensive asset tracking platform for Debre Berhan University using QR codes and MERN stack, enabling real-time asset monitoring, maintenance scheduling, and inventory management across campus facilities.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
      technologies: ["MongoDB", "Express", "React", "Node.js", "QR Code API", "JWT"],
      category: "web",
      github: "https://github.com/thefluxor/qr-asset-management",
      demo: "https://qr-asset-demo.vercel.app",
      features: ["QR Code Scanning", "Real-time Tracking", "Maintenance Alerts", "Analytics Dashboard"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Secure Encryption/Decryption System",
      description: "Advanced cryptographic platform built with JavaScript and React, providing multiple encryption algorithms including AES, RSA, and custom cipher implementations for secure data transmission and storage.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      technologies: ["React", "JavaScript", "CryptoJS", "Web Crypto API", "Node.js", "Express"],
      category: "security",
      github: "https://github.com/thefluxor/encryption-system",
      demo: "https://encryption-demo.vercel.app",
      features: ["AES Encryption", "RSA Keys", "Hash Functions", "Secure Storage"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Smart Property Management System",
      description: "Enterprise-grade property management solution for Metahara Sugar Factory, handling residential units, maintenance scheduling, tenant management, and automated reporting for 500+ properties.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&auto=format",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Prisma", "JWT"],
      category: "web",
      github: "https://github.com/thefluxor/smart-property-management",
      demo: "https://property-mgmt-demo.vercel.app",
      features: ["Property Tracking", "Tenant Management", "Maintenance Scheduling", "Financial Analytics"],
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "House Management System",
      description: "Comprehensive housing management platform for Metahara Sugar Factory employees, featuring allocation management, rent collection, maintenance requests, and resident communication tools.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&auto=format",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Express", "Socket.io", "Stripe"],
      category: "web",
      github: "https://github.com/thefluxor/house-management",
      demo: "https://house-mgmt-demo.vercel.app",
      features: ["House Allocation", "Rent Collection", "Maintenance Portal", "Resident Communication"],
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "Web Portal",
      description: "Modern showcase platform for Metahara Sugar Factory achievements, featuring interactive galleries, production metrics, company milestones, and stakeholder engagement tools.",
      image: "https://images.unsplash.com/photo-1497366216548-375f70893355?w=400&h=300&fit=crop&auto=format",
      technologies: ["React", "Node.js", "MySQL", "Express", "Chart.js", "Cloudinary"],
      category: "web",
      github: "https://github.com/thefluxor/showcase-portal",
      demo: "https://showcase-demo.vercel.app",
      features: ["Interactive Gallery", "Production Metrics", "Company Timeline", "Stakeholder Dashboard"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      title: "Banking Management System using C++ Application",
      description: "High-performance mobile application developed with C++ and Qt framework, featuring native performance, cross-platform compatibility, and advanced system integration for industrial monitoring and control.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      technologies: ["C++", "Qt Framework", "CMake", "SQLite", "Bluetooth", "Native APIs"],
      category: "mobile",
      github: "https://github.com/thefluxor/cpp-mobile-app",
      demo: "https://cpp-mobile-demo.vercel.app",
      features: ["Native Performance", "Cross-Platform", "System Integration", "Real-time Monitoring"],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: faCode },
    { id: "web", label: "Web Apps", icon: faReactBrand },
    { id: "mobile", label: "Mobile Apps", icon: faMobileAlt },
    { id: "security", label: "Security", icon: faShieldAlt },
    { id: "devops", label: "DevOps", icon: faDocker }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id={id}
      aria-labelledby="projects-heading"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-dot-white/[0.08] dark:bg-dot-white/[0.12]" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[600px] h-[600px] bg-purple-400/20 blur-[140px] rounded-full top-[-150px] left-[-150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute w-[500px] h-[500px] bg-pink-400/20 blur-[120px] rounded-full bottom-[-150px] right-[-150px]"
        />
      </div>

      <ResponsiveBox classNames="w-full">
        <ConstrainedBox classNames="relative z-10 px-6 py-24 md:px-10 lg:px-16">

          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <SectionTitle>
              Featured Projects
            </SectionTitle>
            
            <p className="mt-6 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Explore my portfolio of innovative digital solutions — from AI-powered platforms to mobile applications, 
              each project showcases cutting-edge technology and user-centric design principles.
            </p>
          </motion.header>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-600"
                }`}
              >
                <FontAwesomeIcon icon={category.icon} className="text-sm" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/50 h-full flex flex-col">
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover mix-blend-overlay"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://picsum.photos/seed/${project.id}/400/300.jpg`;
                      }}
                    />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/thefluxor"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
              View All Projects on GitHub
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </motion.a>
          </motion.div>

        </ConstrainedBox>
      </ResponsiveBox>

      {/* Bottom Fade Effect */}
      <div className="pointer-events-none absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
};

export default ProjectsSection;
