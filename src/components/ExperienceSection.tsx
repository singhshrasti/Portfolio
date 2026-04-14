import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Intern",
    company: "Infosys Springboard",
    period: "Nov 2025 – Jan 2026",
    type: "Virtual",
    points: [
      "Built ML-based cricket score prediction system using historical match data with iterative feature engineering.",
      "Achieved ~86.8% prediction accuracy processing 50k+ records with Pandas and SQL.",
    ],
  },
  {
    role: "ML Summer School",
    company: "Amazon",
    period: "Aug 2025 – Sep 2025",
    type: "Virtual",
    points: [
      "Implemented supervised, unsupervised, and complex ML algorithms using scikit-learn, NumPy, and pandas.",
      "Gained hands-on experience in data preprocessing, feature engineering, and model evaluation.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">04. EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full bg-primary animate-pulse-glow" />

                <div className="glass rounded-xl p-6 hover:glow-border transition-all duration-300">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{exp.period} • {exp.type}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
