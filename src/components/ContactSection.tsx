import { motion } from "framer-motion";
import { Mail, Phone, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">06. CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            I'm currently looking for internship and full-time opportunities. 
            Whether you have a question or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <motion.a
          href="mailto:shrastisingh551@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[var(--glow-primary)] mb-8"
        >
          <Mail size={18} /> Say Hello
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-5 mt-6"
        >
          {[
            { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
            { icon: Phone, href: "tel:+919889200551", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label={label}
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 space-y-2"
        >
          <p className="text-muted-foreground">
            <span className="font-semibold">Phone:</span> +91 9889200551
          </p>
          <p className="text-muted-foreground">
            <span className="font-semibold">Email:</span> shrastisingh551@gmail.com
          </p>
        </motion.div>
      </div>

      <div className="mt-20 text-center text-xs font-mono text-muted-foreground">
        <p>Designed & Built by Shrasti Singh</p>
      </div>
    </section>
  );
};

export default ContactSection;
