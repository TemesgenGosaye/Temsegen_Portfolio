import { FC } from "react";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { HoverLayoutGrid } from "@/components/common/HoverLayoutGrid";
import services from "@/data/services";

interface ServicesSectionProps {
  id?: string;
  className?: string;
}

const ServicesSection: FC<ServicesSectionProps> = ({ id, className }) => {
  return (
    <section
      id={id}
      aria-labelledby="services-heading"
      className={`
        relative w-full min-h-screen flex items-center justify-center overflow-hidden
        bg-[var(--dialogColor)] dark:bg-[var(--dialogColor)]
        ${className || ""}
      `}
    >
      {/* 🌌 Premium Background Layer */}
      <div className="absolute inset-0 -z-10">
        {/* subtle grid/dots */}
        <div className="absolute inset-0 bg-dot-white/[0.08] dark:bg-dot-white/[0.12]" />

        {/* glowing blobs */}
        <div className="absolute w-[600px] h-[600px] bg-emerald-500/20 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-green-400/20 blur-[120px] rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      <ResponsiveBox classNames="w-full">
        <ConstrainedBox classNames="relative z-10 px-6 py-24 md:px-10 lg:px-16">

          {/* 🧠 Header */}
          <header className="text-center max-w-3xl mx-auto mb-16">
            <SectionTitle>
              Services
            </SectionTitle>

            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              I deliver high-quality, scalable, and modern digital solutions —
              combining performance, design, and clean architecture to build
              impactful products.
            </p>
          </header>

          {/* 🚀 Services Grid */}
          <div className="relative">
            <HoverLayoutGrid cards={services} />
          </div>

        </ConstrainedBox>
      </ResponsiveBox>

      {/* ✨ Bottom Fade for depth */}
      <div className="pointer-events-none absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default ServicesSection;