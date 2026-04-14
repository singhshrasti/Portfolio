import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">01. ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Building the future with <span className="text-gradient">code & AI</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a Computer Science (AI/ML) student passionate about building intelligent systems
              that solve real-world problems. From developing ML models that predict cricket scores
              with 86.8% accuracy to creating full-stack web applications, I thrive at the
              intersection of AI and software engineering.
            </p>
            <p>
              With 500+ DSA problems solved on LeetCode and experience with modern frameworks
              like React, Next.js, and Python ML libraries, I bring both algorithmic thinking
              and practical development skills to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {[
              { icon: GraduationCap, title: "B.Tech CSE (AI/ML)", sub: "PSIT Kanpur • CGPA 8.28 • 2022–2026" },
              { icon: MapPin, title: "Kanpur, Uttar Pradesh", sub: "Open to relocate • Remote friendly" },
              { icon: Sparkles, title: "Co-authored Research Paper", sub: "InsiderForge — EACE Conference 2025 (Springer)" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="glass rounded-lg p-5 flex items-start gap-4 hover:glow-border transition-all duration-300">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
