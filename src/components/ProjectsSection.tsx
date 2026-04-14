import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    title: "Splitr",
    period: "Feb 2025 – Jul 2025",
    problem: "Splitting group expenses is tedious and error-prone with manual tracking.",
    solution: "Built a full-stack Splitwise clone with real-time sync, secure auth via Clerk, and a polished modern UI using Shadcn.",
    impact: "Seamless multi-user expense management with real-time data synchronization via Convex and Prisma.",
    tech: ["React 19", "Next.js 15", "Tailwind CSS", "Shadcn UI", "Convex", "Prisma", "Clerk Auth"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "NexaGesture",
    period: "Sep 2024 – Dec 2024",
    problem: "Traditional input devices limit accessibility and hands-free computing.",
    solution: "Created an AI gesture recognition system that maps hand movements to system-level controls like volume and brightness.",
    impact: "Real-time, touchless interaction enabling intuitive system control through computer vision.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pycaw", "Screen Brightness Control"],
    color: "from-accent/20 to-primary/10",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">03. PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`glass rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:glow-border transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{p.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground mt-1">{p.period}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                      <GithubIcon size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {[
                    { label: "Problem", text: p.problem },
                    { label: "Solution", text: p.solution },
                    { label: "Impact", text: p.impact },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-mono text-xs text-primary mb-1 tracking-wider">{item.label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
