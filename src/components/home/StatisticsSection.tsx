"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import SectionTitle from "@/components/common/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBriefcase,
  faRocket,
  faCode,
  faHeart,
  faTrophy,
  faStar,
  faAward,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

const StatisticCard = ({ 
  icon, 
  value, 
  label, 
  suffix = "", 
  delay = 0,
  color = "from-purple-600 to-pink-600"
}: { 
  icon: any;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  color?: string;
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      const duration = 2500;
      const steps = 80;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-all duration-500 transform group-hover:scale-110`} />
      
      <div className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        
        {/* Icon container with advanced animation */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <motion.div
            animate={inView ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            } : {}}
            transition={{ duration: 3, delay: delay + 0.5, repeat: Infinity, repeatDelay: 2 }}
            className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl opacity-20 blur-xl`}
          />
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`relative bg-gradient-to-br ${color} rounded-2xl w-full h-full flex items-center justify-center text-white shadow-xl`}
          >
            <FontAwesomeIcon icon={icon} className="text-3xl" />
          </motion.div>
        </div>
        
        {/* Animated value display */}
        <div className="text-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.3, type: "spring" }}
          >
            <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent block mb-1`}>
              {count}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: delay + 0.8 }}
                className="text-4xl md:text-5xl"
              >
                {suffix}
              </motion.span>
            </span>
          </motion.div>
        </div>
        
        {/* Label with hover effect */}
        <motion.p 
          className="text-center text-gray-700 dark:text-gray-300 font-semibold text-lg transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white"
          whileHover={{ scale: 1.05 }}
        >
          {label}
        </motion.p>
      </div>
    </motion.div>
  );
};

const StatisticsSection = ({ id }: { id?: string }) => {
  const statistics = [
    {
      icon: faBriefcase,
      value: 3,
      suffix: "+",
      label: "Years Experience",
      delay: 0,
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: faRocket,
      value: 5,
      suffix: "+",
      label: "Projects Delivered",
      delay: 0.2,
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: faCode,
      value: 9,
      suffix: "+",
      label: "Technologies Mastered",
      delay: 0.4,
      color: "from-green-600 to-teal-600"
    },
    {
      icon: faHeart,
      value: 88,
      suffix: "%",
      label: "Client Satisfaction",
      delay: 0.6,
      color: "from-red-600 to-orange-600"
    }
  ];

  const achievements = [
    { icon: faCode, label: "Clean & Scalable Code", color: "from-blue-500 to-indigo-600" },
    { icon: faRocket, label: "Modern Technologies Expertise", color: "from-purple-500 to-pink-600" },
    { icon: faTrophy, label: "Strong Problem-Solving Skills", color: "from-green-500 to-teal-600" },
    { icon: faAward, label: "Reliable & Deadline-Focused", color: "from-orange-500 to-red-600" },
    { icon: faHeart, label: "User-Centered Design Thinking", color: "from-cyan-500 to-blue-600" },
    { icon: faStar, label: "Adaptability to New Technologies", color: "from-pink-500 to-purple-600" }
  ];

  return (
    <section
      id={id}
      aria-labelledby="statistics-heading"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Advanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-indigo-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute w-[300px] h-[300px] rounded-full blur-[150px] opacity-20 ${
              i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='gray' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
        }} />
      </div>

      <ResponsiveBox classNames="w-full">
        <ConstrainedBox classNames="relative z-10 px-6 py-24 md:px-10 lg:px-16">

          {/* Enhanced header */}
          <motion.header 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto mb-20"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
              <SectionTitle>
                Excellence in Numbers
              </SectionTitle>
            </motion.div>
            
            <motion.p 
              className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Two decades of innovation, countless success stories, and a relentless pursuit of perfection. 
              Every project is a testament to my commitment to excellence and client success.
            </motion.p>
          </motion.header>

          {/* Main statistics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
            {statistics.map((stat, index) => (
              <StatisticCard
                key={`stat-${index}`}
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={stat.delay}
                color={stat.color}
              />
            ))}
          </div>

          {/* Achievement badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/90 to-purple-50/90 dark:from-slate-800/90 dark:to-purple-900/20 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/30 dark:border-gray-700/50">
              <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Why Choose Me
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={`achievement-${index}`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 border border-white/20 dark:border-gray-700/30"
                  >
                    <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <FontAwesomeIcon icon={achievement.icon} className="text-2xl" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 leading-tight">
                      {achievement.label}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.label === "Clean & Scalable Code" && "Writing maintainable, efficient code that grows with your business needs"}
                      {achievement.label === "Modern Technologies Expertise" && "Staying current with cutting-edge tools and frameworks for optimal solutions"}
                      {achievement.label === "Strong Problem-Solving Skills" && "Analytical thinking to tackle complex challenges with innovative solutions"}
                      {achievement.label === "Reliable & Deadline-Focused" && "Consistent delivery on time with attention to detail and quality"}
                      {achievement.label === "User-Centered Design Thinking" && "Creating intuitive experiences that prioritize user needs and satisfaction"}
                      {achievement.label === "Adaptability to New Technologies" && "Quickly learning and implementing new technologies to stay ahead"}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </ConstrainedBox>
      </ResponsiveBox>
    </section>
  );
};

export default StatisticsSection;
