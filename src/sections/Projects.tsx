import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'Full-stack e-commerce solution with real-time inventory management and seamless checkout experience.',
    image: '/images/project-ecommerce.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'AI Dashboard',
    category: 'UI/UX Design',
    tech: ['Figma', 'React', 'D3.js'],
    description: 'Analytics dashboard for machine learning models with real-time data visualization.',
    image: '/images/project-dashboard.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: '3D Portfolio',
    category: 'Creative Coding',
    tech: ['Three.js', 'WebGL', 'GSAP'],
    description: 'Immersive 3D portfolio experience with interactive elements and smooth animations.',
    image: '/images/project-3d.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'App Design',
    tech: ['React Native', 'Firebase'],
    description: 'Secure and intuitive mobile banking experience with biometric authentication.',
    image: '/images/project-banking.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Brand Identity System',
    category: 'Branding',
    tech: ['Illustrator', 'Figma'],
    description: 'Complete visual identity for fintech startup including logo, colors, and guidelines.',
    image: '/images/project-branding.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Real-time Chat',
    category: 'Web Development',
    tech: ['Socket.io', 'Express', 'Redis'],
    description: 'Scalable chat application with video calls, file sharing, and end-to-end encryption.',
    image: '/images/project-chat.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Creative Coding', 'App Design', 'Branding'];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={isHovered ? {
          rotateX: 5,
          rotateY: -5,
          z: 30,
        } : {
          rotateX: 0,
          rotateY: 0,
          z: 0,
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="relative bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-lime/30 transition-colors duration-500"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          />

          {/* Category badge */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 left-4 px-3 py-1 bg-lime text-black text-xs font-medium rounded-full"
          >
            {project.category}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-4 right-4 flex gap-2"
          >
            <a
              href={project.githubUrl}
              className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-lime hover:text-black transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href={project.liveUrl}
              className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-lime hover:text-black transition-all duration-300"
            >
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-semibold text-white mb-2 group-hover:text-lime transition-colors duration-300"
          >
            {project.title}
          </motion.h3>
          
          <motion.p
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-white/50 text-sm mb-4 line-clamp-2"
          >
            {project.description}
          </motion.p>

          {/* Tech stack */}
          <motion.div
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60 hover:border-lime/30 hover:text-lime transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Corner accent */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: isHovered ? 1 : 0, rotate: isHovered ? 0 : -45 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-lime rounded-lg"
        >
          <ArrowUpRight size={16} className="text-black" />
        </motion.div>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-2 bg-lime/10 rounded-3xl blur-xl -z-10"
      />
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-lime/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm text-lime mb-4 tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A selection of my recent work across web development, design, and creative coding
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-lime text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white rounded-full hover:border-lime hover:text-lime transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
