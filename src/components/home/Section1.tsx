import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      id={id}
      classNames="
        relative min-h-screen flex items-center justify-center overflow-hidden
      "
    >
      {/* Modern Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -2 }}
      >
        <source src="/Video/videobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay for better text visibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"
        style={{ zIndex: -1 }}
      />
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#3b82f6,transparent_40%)]" />

      <ConstrainedBox classNames="relative z-10 px-6 py-20 flex flex-col items-center text-center">
        <Column classNames="w-full items-center justify-center space-y-6">
          
          {/* Headline */}
          <h1 className="flex flex-wrap items-center justify-center gap-3 font-extrabold tracking-tight leading-tight">
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white/90">
              Hi, I'm
            </span>

            <FlipWords
              words={["Temesgen Gosaye", "Full Stack || Web Developer"]}
              className="
                text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
                bg-gradient-to-r from-blue-400 to-cyan-300 
                bg-clip-text text-transparent
              "
            />
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-sm md:text-base text-white/70 leading-relaxed">
            I build scalable web applications, craft beautiful user experiences,
            and turn ideas into powerful digital products.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <TalkButton />

            <Link
              href="#projects"
              className="
                px-6 py-3 rounded-full border border-white/20
                text-white/80 hover:text-white
                hover:bg-white/10 backdrop-blur-md
                transition-all duration-300
              "
            >
              View Projects
            </Link>
          </div>
        </Column>

        {/* Social Section */}
        <div className="mt-16 flex flex-col items-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-white/50">
            Connect with me
          </p>

          <Row classNames="flex gap-3">
            {socialLinks.slice(0, 5).map((link, index) => (
              <Link
                key={`social-${index}`}
                href={link.url}
                target="_blank"
                aria-label={link.name}
                className="
                  group relative flex items-center justify-center
                  w-11 h-11 rounded-full
                  border border-white/20
                  bg-white/5 backdrop-blur-md
                  hover:bg-white/10
                  transition-all duration-300
                "
              >
                <span className="text-white/70 group-hover:text-white transition">
                  {typeof link.icon !== "string" && (
                    <FontAwesomeIcon icon={link.icon} />
                  )}
                </span>

                {/* Hover Glow */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-blue-500/20 blur-xl transition" />
              </Link>
            ))}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;