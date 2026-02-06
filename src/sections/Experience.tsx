import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Customer Relations Officer',
    company: 'DWP Group',
    period: '2024 - Present',
    location: 'Karachi, Pakistan',
    description: 'Managing end-to-end customer lifecycles, resolving complex service grievances for home appliances, and coordinating between technical teams and clients to ensure high satisfaction and retention rates.',
    skills: ['CRM', 'Conflict Resolution', 'Client Relations', 'Communication'],
  },
  {
    id: 2,
    title: 'UI/UX Designer & Developer',
    company: 'GFX House',
    period: '2022 - 2024',
    location: 'Karachi, Pakistan',
    description: 'Designed and developed websites and applications for diverse clients across fintech, healthcare, and e-commerce sectors. Delivered 50+ successful projects.',
    skills: ['Figma', 'Adobe Photoshop', 'React', 'Node.js', 'Client Relations'],
  },
  {
    id: 3,
    title: 'Junior Web Developer',
    company: 'Software One',
    period: '2020 - 2022',
    location: 'Karachi, Pakistan',
    description: 'Built responsive websites and implemented frontend features for a fast-growing tech startup. Collaborated closely with design team to bring concepts to life.',
    skills: ['JavaScript', 'CSS', 'HTML', 'Git'],
  },
];

function ExperienceCard({
  experience,
  index
}: {
  experience: typeof experiences[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: isEven ? -100 : 100,
        rotateY: isEven ? 15 : -15,
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        rotateY: isEven ? 5 : -5,
      } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`relative grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:text-right'
        }`}
      style={{ perspective: 1000 }}
    >
      {/* Content Card */}
      <motion.div
        whileHover={{
          scale: 1.02,
          rotateY: isEven ? 10 : -10,
          transition: { duration: 0.3 }
        }}
        className={`relative p-6 lg:p-8 bg-dark-card border border-white/10 rounded-2xl hover:border-lime/30 transition-all duration-500 ${isEven ? 'md:order-1' : 'md:order-2'
          }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Company badge */}
        <div className={`flex items-center gap-2 mb-4 ${isEven ? '' : 'md:justify-end'}`}>
          <div className="w-10 h-10 flex items-center justify-center bg-lime/10 rounded-lg">
            <Briefcase size={20} className="text-lime" />
          </div>
          <span className="text-lime font-medium">{experience.company}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
          {experience.title}
        </h3>

        {/* Meta info */}
        <div className={`flex flex-wrap gap-4 mb-4 text-sm text-white/50 ${isEven ? '' : 'md:justify-end'
          }`}>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {experience.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {experience.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/60 mb-6 leading-relaxed">
          {experience.description}
        </p>

        {/* Skills */}
        <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'md:justify-end'}`}>
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 hover:border-lime/30 hover:text-lime transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-lime/5 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      </motion.div>

      {/* Timeline Node */}
      <div className={`hidden md:flex justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: index * 0.2 + 0.3,
            ease: [0.68, -0.55, 0.265, 1.55]
          }}
          className="relative"
        >
          {/* Node */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(192, 247, 72, 0.4)',
                '0 0 0 10px rgba(192, 247, 72, 0)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-6 bg-lime rounded-full border-4 border-black"
          />

          {/* Date label */}
          <div className={`absolute top-8 ${isEven ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'} whitespace-nowrap`}>
            <span className="text-sm text-white/40">{experience.period}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-lime/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm text-lime mb-4 tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4">
            Professional{' '}
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            My career path and the amazing companies I've worked with
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-lime to-lime/50"
            />
          </div>

          {/* Experience cards */}
          <div className="space-y-16 lg:space-y-24">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Education / Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-24 grid sm:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
            <p className="text-white/60 text-sm">
              B.S. Computer Science<br />
              Stanford University, 2017
            </p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-2">Certifications</h4>
            <p className="text-white/60 text-sm">
              AWS Solutions Architect<br />
              Google UX Design Professional
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
