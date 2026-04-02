"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faCode, faRocket } from "@fortawesome/free-solid-svg-icons";

type Props = {
  id: string;
};

const HomeSection3 = ({ id }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const timelineData = useMemo(
    () =>
      experiences.map((exp, index) => ({
        title: `${exp.startDate} — ${exp.isCurrentJob ? "Present" : exp.endDate}`,
        content: (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <ExperienceItem key={`experience-${index}`} data={exp} />
          </motion.div>
        ),
      })),
    []
  );

  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* 🌌 Premium Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-indigo-500/[0.03]" />
        
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[140px] top-[-150px] left-[-150px]"
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
            delay: 2,
          }}
          className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full bottom-[-150px] right-[-150px]"
        />
        
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent animate-pulse" />
        </div>
      </div>

      <ResponsiveBox classNames="w-full relative z-10">
        <ConstrainedBox classNames="px-6 md:px-12 py-24">
          
          {/* 🧠 Modern Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 max-w-4xl mx-auto"
          >
            <SectionTitle>
              <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent tracking-tight font-bold">
                Professional Journey
              </span>
            </SectionTitle>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              A curated timeline of innovation and growth — from enterprise solutions to
              cutting-edge technologies, each role represents a stepping stone in delivering
              exceptional value and driving digital transformation.
            </motion.p>

            {/* Modern divider with icons */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-4"
            >
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-indigo-500" />
              <div className="flex gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center border border-indigo-500/30"
                >
                  <FontAwesomeIcon icon={faBriefcase} className="text-indigo-400 text-sm" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30"
                >
                  <FontAwesomeIcon icon={faCode} className="text-blue-400 text-sm" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center border border-indigo-500/30"
                >
                  <FontAwesomeIcon icon={faRocket} className="text-indigo-400 text-sm" />
                </motion.div>
              </div>
              <div className="h-[1px] w-20 bg-gradient-to-l from-indigo-500 to-transparent" />
            </motion.div>
          </motion.div>

          {/* 🧩 Enhanced Timeline Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            {/* Premium glass container with enhanced effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10 backdrop-blur-2xl rounded-3xl border border-indigo-500/20 shadow-2xl" />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-indigo-500/20 opacity-50 blur-sm animate-pulse" />

            <div className="relative p-8 md:p-12">
              {/* Timeline with enhanced animations */}
              <Timeline data={timelineData} />
            </div>
          </motion.div>

        </ConstrainedBox>
      </ResponsiveBox>

      {/* Bottom fade effect */}
      <div className="pointer-events-none absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default HomeSection3;