import { motion } from "framer-motion";
import { Trophy, Flame, BookOpen, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "500+ DSA Problems",
    desc: "Solved on LeetCode across arrays, trees, graphs, DP, and more.",
  },
  {
    icon: Flame,
    title: "500-Day Streak",
    desc: "Earned the prestigious 500-day coding streak badge on LeetCode.",
  },
  {
    icon: BookOpen,
    title: "Research Publication",
    desc: "Co-authored \"InsiderForge\" — Insider Threat Detection framework, EACE 2025 (Springer).",
  },
];

const certifications = [
  "Microsoft Foundations of AI & ML",
  "DeepLearning.AI: Supervised, Unsupervised & Reinforcement Learning",
  "Deloitte (Forage): Data Analytics, Technology & Cyber Simulations",
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">05. ACHIEVEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Milestones & <span className="text-gradient">certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:glow-border transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <a.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-8"
        >
          <h3 className="font-mono text-primary text-sm font-semibold mb-4 tracking-wider flex items-center gap-2">
            <Award size={16} /> CERTIFICATIONS
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary">▹</span>
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
