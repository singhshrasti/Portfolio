import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Java", "SQL"],
  },
  {
    title: "Full-Stack Dev",
    skills: ["HTML/CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "AI / ML Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "MediaPipe", "OpenCV", "scikit-learn"],
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "Git", "GitHub", "Jupyter Notebook", "Prisma", "Convex"],
  },
  {
    title: "Testing",
    skills: ["Manual Testing", "Test Case Writing", "SDLC–STLC", "Selenium (Basic)"],
  },
  {
    title: "Core Subjects",
    skills: ["Data Structures", "DBMS", "OOP"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">02. SKILLS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            My <span className="text-gradient">tech arsenal</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-300 group"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4 tracking-wider">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground font-mono group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
