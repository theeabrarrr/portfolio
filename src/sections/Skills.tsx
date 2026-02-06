import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Server, 
  Cloud, 
  Layers, 
  Box,
  Database,
  Figma,
} from 'lucide-react';

const skills = [
  { name: 'React / Next.js', proficiency: 95, icon: Code2, category: 'Frontend' },
  { name: 'TypeScript', proficiency: 90, icon: Code2, category: 'Frontend' },
  { name: 'Node.js', proficiency: 85, icon: Server, category: 'Backend' },
  { name: 'Python', proficiency: 80, icon: Code2, category: 'Backend' },
  { name: 'UI/UX Design', proficiency: 92, icon: Palette, category: 'Design' },
  { name: 'Figma', proficiency: 88, icon: Figma, category: 'Design' },
  { name: 'AWS / Cloud', proficiency: 78, icon: Cloud, category: 'DevOps' },
  { name: 'GraphQL', proficiency: 82, icon: Database, category: 'Backend' },
  { name: 'Three.js / WebGL', proficiency: 75, icon: Box, category: 'Creative' },
  { name: 'Motion Design', proficiency: 85, icon: Layers, category: 'Creative' },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-lime/10 transition-colors duration-300">
            <skill.icon size={16} className="text-white/50 group-hover:text-lime transition-colors duration-300" />
          </div>
          <span className="text-white group-hover:text-lime transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <span className="text-white/50 text-sm">{skill.proficiency}%</span>
      </div>
      
      {/* Progress bar */}
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.proficiency}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-lime to-lime-dark rounded-full relative"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.68, -0.55, 0.265, 1.55]
      }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        z: 30,
        transition: { duration: 0.3 }
      }}
      className="group relative p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-lime/30 hover:bg-white/[0.05] transition-all duration-500"
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {/* Hexagon background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="rgba(192, 247, 72, 0.1)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-lime/10 transition-colors duration-300">
          <skill.icon size={24} className="text-white/60 group-hover:text-lime transition-colors duration-300" />
        </div>

        {/* Skill name */}
        <h3 className="text-lg font-medium text-white mb-2 group-hover:text-lime transition-colors duration-300">
          {skill.name}
        </h3>

        {/* Proficiency */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.proficiency}%` } : {}}
              transition={{ duration: 1.2, delay: index * 0.08 + 0.4 }}
              className="h-full bg-lime rounded-full"
            />
          </div>
          <span className="text-sm text-white/50">{skill.proficiency}%</span>
        </div>

        {/* Category tag */}
        <span className="inline-block mt-3 px-2 py-0.5 text-xs bg-white/5 text-white/40 rounded">
          {skill.category}
        </span>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-lime/5 rounded-2xl blur-xl" />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm text-lime mb-4 tracking-wider uppercase">
            My Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4">
            Skills That Drive{' '}
            <span className="text-gradient">Results</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Detailed Skills List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {/* Left column */}
          <div className="space-y-6">
            {skills.slice(0, 5).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            {skills.slice(5).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index + 5} />
            ))}
          </div>
        </motion.div>

        {/* Additional tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'MongoDB', 'Jest', 'Cypress', 'Storybook'].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/60 hover:border-lime/30 hover:text-lime transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
