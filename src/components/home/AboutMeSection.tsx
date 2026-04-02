"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import SectionTitle from "@/components/common/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode,
  faLaptopCode,
  faDatabase,
  faCloud,
  faMobileAlt,
  faShieldAlt,
  faLightbulb,
  faRocket,
  faUsers,
  faGraduationCap,
  faAward,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { 
  faReact as faReactBrand,
  faNodeJs as faNodeBrand,
  faPython as faPythonBrand,
  faDocker,
  faAws,
  faGitAlt,
  faJs,
  faHtml5,
  faCss3Alt
} from "@fortawesome/free-brands-svg-icons";

const SkillBadge = ({ icon, name, level, delay = 0 }: { 
  icon: any; 
  name: string; 
  level: number; 
  delay?: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="relative group"
    >
      <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center text-white">
            <FontAwesomeIcon icon={icon} className="text-lg" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">{name}</p>
            <div className="mt-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${level}%` } : {}}
                transition={{ duration: 1, delay: delay + 0.3 }}
                className="h-full bg-gradient-to-r from-green-600 to-green-500 rounded-full"
              />
            </div>
          </div>
          <span className="text-xs font-bold text-green-600 dark:text-green-400">{level}%</span>
        </div>
      </div>
    </motion.div>
  );
};

const AboutMeSection = ({ id }: { id?: string }) => {
  const [activeTab, setActiveTab] = useState("skills");
  
  const skills = [
    { icon: faReactBrand, name: "React/Next.js", level: 90 },
    { icon: faNodeBrand, name: "Node.js/Express", level: 85 },
    { icon: faPythonBrand, name: "Python", level: 80 },
    { icon: faJs, name: "TypeScript/JavaScript", level: 95 },
    { icon: faDatabase, name: "MongoDB/PostgreSQL", level: 85 },
    { icon: faDocker, name: "Docker/DevOps", level: 75 },
    { icon: faAws, name: "Cloud Services", level: 70 },
    { icon: faGitAlt, name: "Git/Version Control", level: 90 }
  ];

  const highlights = [
    {
      icon: faRocket,
      title: "Fast Learner",
      description: "Quickly adapt to new technologies and frameworks"
    },
    {
      icon: faLightbulb,
      title: "Problem Solver",
      description: "Analytical approach to complex technical challenges"
    },
    {
      icon: faUsers,
      title: "Team Player",
      description: "Excellent collaboration and communication skills"
    },
    {
      icon: faAward,
      title: "Quality Focused",
      description: "Committed to delivering high-quality, scalable solutions"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "National Exit Exam",
      company: "Ethiopian National Examination",
      description: "Achieved excellent score of 88% in the National Exit Examination for Computer Science, demonstrating comprehensive knowledge and proficiency in the field."
    },
    {
      year: "2021 - 2025",
      title: "Bsc Degree in Computer Science",
      company: "Debre Berhan University",
      description: "Graduated with Bachelor of Science degree in Computer Science, gaining comprehensive knowledge in software development, algorithms, and system design."
    },
    {
      year: "2025",
      title: "NanoDegree Program Completion",
      company: "UDACITY (Ethio5MCoder)",
      description: "Successfully completed NanoDegree program in Programming Fundamentals, mastering core programming concepts and best practices."
    },
    {
      year: "2023 - 2025",
      title: "Various Online Training Certificates",
      company: "MoE Partnership Programs",
      description: "Completed multiple certification programs in partnership with MasterCard Foundation, Arizona State University (ASUEdPlus), and Shayashone (SYS)."
    }
  ];

  return (
    <section
      id={id}
      aria-labelledby="about-heading"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dot-white/[0.08] dark:bg-dot-white/[0.12]" />
        
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <SectionTitle>
              About Me
            </SectionTitle>
            
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
           I am Temesgen Gosaye, a Computer Science graduate from Debre Berhan University with a strong passion for building modern and impactful digital solutions.
            </p>
          </motion.header>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50 sticky top-8">
                {/* Profile Image */}
                <motion.div 
                  className="w-40 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm relative group cursor-pointer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src="/images/TEMSEGN GOSAYE 1.jpg" 
                    alt="Temesgen Gosaye Profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
                  Temesgen Gosaye
                </h3>
                
                <p className="text-center text-green-600 dark:text-green-400 font-medium mb-6">
                  Full Stack Software Engineer
                </p>
                
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-green-600 dark:text-green-400 w-5" />
                    <span>Computer Science Degree</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faLaptopCode} className="text-green-600 dark:text-green-400 w-5" />
                    <span>1+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faHeart} className="text-green-600 dark:text-green-400 w-5" />
                    <span>Passionate about Clean Code</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">5+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">9+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">88%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tabs Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["skills", "highlights", "Qualification And Certificate"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg"
                        : "bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50">
                
                {/* Skills Tab */}
                {activeTab === "skills" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                      Technical Skills
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skills.map((skill, index) => (
                        <SkillBadge
                          key={skill.name}
                          icon={skill.icon}
                          name={skill.name}
                          level={skill.level}
                          delay={index * 0.1}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Highlights Tab */}
                {activeTab === "highlights" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                      Key Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {highlights.map((highlight, index) => (
                        <motion.div
                          key={highlight.title}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-50 dark:from-green-900/20 dark:to-green-900/20 border border-green-200 dark:border-green-700/50"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                              <FontAwesomeIcon icon={highlight.icon} className="text-xl" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                                {highlight.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Qualification And Certificate Tab */}
                {activeTab === "Qualification And Certificate" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                      Qualification And Certificate
                    </h3>
                    <div className="space-y-6">
                      {timeline.map((item, index) => (
                        <motion.div
                          key={item.year}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative pl-8 pb-8 border-l-2 border-green-200 dark:border-green-700 last:border-l-0"
                        >
                          <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-br from-green-600 to-green-500 rounded-full -translate-x-1/2" />
                          <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-6">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                                {item.year}
                              </span>
                              <h4 className="font-bold text-gray-800 dark:text-white">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {item.company}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

        </ConstrainedBox>
      </ResponsiveBox>
    </section>
  );
};

export default AboutMeSection;
