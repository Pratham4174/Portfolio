import { AnimatePresence, motion } from "framer-motion";
import { Calendar, DownloadCloud, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import React, { useEffect, useState, type JSX } from "react";
import Tilt from "react-parallax-tilt";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  imageAlt?: string;
};

const projectsSeed: Project[] = [
  {
    id: "p1",
    title: "SmartCharge - EV Route Planner",
    description: "AI-powered EV trip optimization system with real-time wait time predictions using XGBoost and route optimization.",
    tags: ["Java", "Spring Boot", "ReactTS", "Machine Learning", "FlaskAPI", "XGBoost"],
    github: "#",
    live: "#",
  },
  {
    id: "p2",
    title: "Networq - Professional Network",
    description: "Scalable microservices architecture with Spring Boot, REST APIs, and service discovery for professional networking.",
    tags: ["Java", "Spring Boot", "Microservices", "REST API", "Spring Consul", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    id: "p3",
    title: "Government TDS System",
    description: "Spring Boot microservices transformation with Kafka pipelines and multithreading for tax processing system.",
    tags: ["Spring Boot", "Apache Kafka", "Multithreading", "Apache Camel", "Microservices"],
    github: "#",
  },
];

export default function AdvancedPortfolio(): JSX.Element {
  const [dark, setDark] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => {
      setProjects(projectsSeed);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-slate-900 text-gray-900 dark:text-gray-100 transition-all duration-700 overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.5, 1],
            x: [-100, 100, -100],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <header className="relative w-full px-6 py-8 flex items-center justify-between">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Pratham Gupta
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Full-Stack Developer & Software Engineer</p>
        </motion.div>

        <nav className="flex items-center gap-4">
          {/* <motion.button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {dark ? <Sun size={22} className="text-amber-400" /> : <Moon size={22} className="text-indigo-600" />}
          </motion.button> */}

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-a from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} /> Get In Touch
          </motion.a>
        </nav>
      </header>

      <main className="relative w-full px-6 pb-20">
        {/* HERO SECTION - Full Width */}
        <motion.section 
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[90vh] py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium">Available for new opportunities</span>
            </motion.div>

            <motion.h2
              className="text-6xl sm:text-7xl font-bold leading-tight"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
            >
              Crafting{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital
              </span>{" "}
              Excellence
            </motion.h2>

            <motion.p
              className="mt-8 text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
              variants={itemVariants}
            >
              Specializing in <span className="font-semibold text-cyan-600 dark:text-cyan-400">Java</span>,{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Spring Boot</span>, and{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">React</span>. 
              Building scalable solutions that drive business success.
            </motion.p>

            <motion.div 
              className="mt-12 flex flex-wrap gap-6"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 to-blue-600 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.a>

              <motion.a
                href="/resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 font-bold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <DownloadCloud size={22} /> Download Resume
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mt-12 flex flex-wrap gap-8 text-lg"
              variants={itemVariants}
            >
              <a href="tel:+918146823796" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition-colors duration-300">
                <Phone size={20} /> +91 8146823796
              </a>
              <a href="mailto:prathamgupta4174@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition-colors duration-300">
                <Mail size={20} /> prathamgupta4174@gmail.com
              </a>
              <a href="https://linkedin.com/in/pratham-gupta-b90b9b1a0" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition-colors duration-300">
                <Linkedin size={20} /> LinkedIn
              </a>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl"
              variants={containerVariants}
            >
              <Stat label="Years Experience" value="2+" delay={0.4} color="from-cyan-500 to-blue-500" />
              <Stat label="Projects Completed" value="10+" delay={0.5} color="from-blue-500 to-purple-500" />
              <Stat label="Technologies" value="15+" delay={0.6} color="from-purple-500 to-pink-500" />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end w-full"
            variants={itemVariants}
          >
            <AnimatePresence>
              <motion.div
                className="w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-white/20 to-cyan-100/20 dark:from-gray-800/20 dark:to-cyan-900/20 backdrop-blur-sm border border-white/30"
                initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
                whileHover={{ y: -10, rotate: 1 }}
              >
                <Tilt 
                  tiltMaxAngleX={12} 
                  tiltMaxAngleY={12} 
                  glareEnable={true} 
                  glareMaxOpacity={0.3}
                  glareColor="#ffffff"
                  glarePosition="all"
                  scale={1.05}
                  transitionSpeed={2000}
                >
                  <div className="p-10 h-full flex flex-col justify-between bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10">
                    <div>
                      <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold mb-4">
                        <Sparkles size={18} />
                        Featured Project
                      </div>
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        SmartCharge
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Revolutionizing EV travel with AI-powered route optimization, real-time charging predictions, 
                        and machine learning algorithms for seamless journey planning.
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-lg">
                          <div className="text-2xl">⚡</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-semibold">Java • Spring Boot</div>
                          <div className="opacity-80">ReactTS • Machine Learning</div>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-xl bg-cyan-500 text-white shadow-lg"
                      >
                        <ExternalLink size={24} />
                      </motion.div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* PROJECTS SECTION - Full Width */}
        <motion.section 
          id="projects" 
          className="w-full mt-32"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real-world applications showcasing technical expertise in full-stack development, 
              microservices architecture, and performance optimization
            </p>
          </motion.div>

          <motion.div 
            className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                isActive={activeProject === project.id}
                onHover={setActiveProject}
              />
            ))}
            
            {isLoading && (
              <>
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
              </>
            )}
          </motion.div>
        </motion.section>

        {/* EXPERIENCE & SKILLS - Full Width */}
        <motion.section 
          className="w-full mt-40"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold mb-6">
              Experience & <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h3>
          </motion.div>

          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard title="Professional Journey" className="h-full">
                <div className="space-y-8">
                  <TimelineItem 
                    year="2024 - Present" 
                    title="Specialist Programmer · Infosys" 
                    location="Bangalore, Karnataka"
                    description="Transformed legacy TDS system to Spring Boot microservices, implemented Kafka pipelines, and optimized performance with multithreading."
                    technologies={["Spring Boot", "Apache Kafka", "Microservices", "Apache Camel", "Multithreading"]}
                  />
                  <TimelineItem 
                    year="2024" 
                    title="Software Developer Intern · Hograth" 
                    location="Gurugram, Haryana"
                    description="Enhanced email campaigns and created product display pages for major brands, improving user engagement by 5%."
                    technologies={["HTML", "CSS", "JavaScript", "Email Marketing"]}
                  />
                  <TimelineItem 
                    year="2024" 
                    title="Bachelor's in Computer Science · TIET" 
                    location="Patiala, Punjab"
                    description="Graduated with expertise in computer science fundamentals and software engineering principles."
                    technologies={["Java", "Algorithms", "Data Structures", "Software Engineering"]}
                  />
                </div>
              </GlassCard>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard title="Technical Stack" className="h-full">
                <div className="space-y-8">
                  <SkillCategory title="Backend Technologies" icon="⚡">
                    <Skill name="Java & Spring Boot" level={95} color="from-cyan-500 to-blue-500" />
                    <Skill name="REST API Design" level={90} color="from-blue-500 to-purple-500" />
                    <Skill name="Microservices" level={85} color="from-purple-500 to-pink-500" />
                    <Skill name="Apache Kafka" level={80} color="from-pink-500 to-red-500" />
                  </SkillCategory>

                  <SkillCategory title="Frontend & Tools" icon="🎨">
                    <Skill name="React & TypeScript" level={85} color="from-cyan-500 to-blue-500" />
                    <Skill name="HTML/CSS/JavaScript" level={90} color="from-blue-500 to-purple-500" />
                    <Skill name="Git & CI/CD" level={85} color="from-purple-500 to-pink-500" />
                    <Skill name="AWS & Kubernetes" level={75} color="from-pink-500 to-red-500" />
                  </SkillCategory>

                  <SkillCategory title="Databases" icon="💾">
                    <Skill name="MySQL" level={88} color="from-cyan-500 to-blue-500" />
                    <Skill name="Hibernate/JDBC" level={85} color="from-blue-500 to-purple-500" />
                    <Skill name="NoSQL" level={70} color="from-purple-500 to-pink-500" />
                  </SkillCategory>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.section>

        {/* CONTACT SECTION - Full Width */}
        <motion.section 
          id="contact" 
          className="w-full mt-40"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            </p>
          </motion.div>
          
          <motion.div 
            className="w-full max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Start a Conversation
                  </h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Whether you have a project in mind, need technical consultation, or just want to connect, 
                    I'm always excited to hear about new opportunities and challenges.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20">
                      <Mail className="text-cyan-600" size={24} />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-gray-600 dark:text-gray-400">prathamgupta4174@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20">
                      <Phone className="text-blue-600" size={24} />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-gray-600 dark:text-gray-400">+91 8146823796</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/20">
                      <MapPin className="text-purple-600" size={24} />
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-gray-600 dark:text-gray-400">Available for remote & onsite opportunities</div>
                      </div>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const fd = new FormData(form);
                    const name = fd.get("name");
                    const message = fd.get("message");
                    window.location.href = `mailto:prathamgupta4174@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
                      String(name || "")
                    )}&body=${encodeURIComponent(String(message || ""))}`;
                  }}
                  className="space-y-6"
                >
                  <div>
                    <input 
                      name="name" 
                      placeholder="Your full name" 
                      className="w-full p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 transition-all text-lg"
                      required 
                    />
                  </div>
                  <div>
                    <input 
                      name="email" 
                      placeholder="Your email address" 
                      type="email"
                      className="w-full p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all text-lg"
                      required 
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message" 
                      placeholder="Tell me about your project, opportunity, or just say hello..." 
                      rows={6}
                      className="w-full p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition-all text-lg resize-none"
                      required 
                    />
                  </div>

                  <motion.button 
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail size={24} className="inline mr-3" /> Send Message
                  </motion.button>
                </form>
              </div>
            </GlassCard>
          </motion.div>
        </motion.section>

        <motion.footer 
          className="w-full mt-32 py-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              © Pratham Gupta — Crafted with using React, TypeScript & Framer Motion
            </p>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}

/* ----------------------
   Enhanced Subcomponents
   ---------------------- */

function Stat({ label, value, delay = 0, color }: { label: string; value: string; delay?: number; color: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-center p-6 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500"
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <div className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{value}</div>
      <div className="text-sm opacity-80 mt-2 font-medium">{label}</div>
    </motion.div>
  );
}

function ProjectSkeleton() {
  return (
    <div className="rounded-3xl border border-gray-300 dark:border-gray-600 p-8 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm h-96 animate-pulse">
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-6"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-3"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-3"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-8"></div>
      <div className="flex gap-3 mb-6">
        <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
        <div className="h-8 w-28 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
      </div>
    </div>
  );
}

function GlassCard({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 shadow-2xl p-10 ${className}`}>
      {title && (
        <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          {title}
        </h4>
      )}
      {children}
    </div>
  );
}

function TimelineItem({ year, title, location, description, technologies }: { 
  year: string; 
  title: string; 
  location: string;
  description: string; 
  technologies: string[];
}) {
  return (
    <motion.div 
      className="flex gap-6 group"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex flex-col items-center">
        <motion.div 
          className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:scale-150 transition-transform duration-300 shadow-lg"
          whileHover={{ scale: 1.5 }}
        />
        <div className="w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 mt-2 rounded-full"></div>
      </div>
      
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <Calendar size={18} className="text-cyan-600" />
          <span className="text-base font-semibold text-cyan-600 dark:text-cyan-400">{year}</span>
        </div>
        <h5 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">{title}</h5>
        <div className="flex items-center gap-2 mb-3">
          <MapPin size={16} className="text-gray-500" />
          <span className="text-gray-600 dark:text-gray-400">{location}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.span 
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SkillCategory({ title, children, icon }: { title: string; children: React.ReactNode; icon: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h5 className="font-bold text-xl text-gray-800 dark:text-gray-200">{title}</h5>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

function Skill({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-base mb-3">
        <span className="font-semibold text-gray-700 dark:text-gray-300">{name}</span>
        <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className={`h-3 rounded-full bg-gradient-to-r ${color} shadow-lg`}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, index, isActive, onHover }: { 
  project: Project; 
  index: number;
  isActive: boolean;
  onHover: (id: string | null) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-3xl border border-gray-300 dark:border-gray-600 p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col"
      >
        <Tilt 
          tiltMaxAngleX={8} 
          tiltMaxAngleY={8} 
          glareEnable={true} 
          glareMaxOpacity={0.2}
          scale={1.02}
          transitionSpeed={1500}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-6">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-gray-200">{project.title}</h4>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3"
              >
                {project.github && (
                  <motion.a 
                    href={project.github}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-800/50 transition-colors shadow-lg"
                  >
                    <Github size={20} />
                  </motion.a>
                )}
                {project.live && (
                  <motion.a 
                    href={project.live}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors shadow-lg"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
              </motion.div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 flex-grow leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag) => (
                <motion.span 
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm px-4 py-2 rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 font-medium shadow-lg"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </Tilt>
      </motion.div>
    </motion.div>
  );
}