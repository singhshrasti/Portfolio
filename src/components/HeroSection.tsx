import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest">HELLO, I'M</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            Shrasti <span className="text-gradient">Singh</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            AI/ML Engineer & Full-Stack Developer crafting intelligent systems 
            and beautiful web experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {[
            { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-float text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={28} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
