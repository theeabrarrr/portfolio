import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 12, suffix: '', label: 'Awards Won' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();
    const endValue = value;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Expo out easing
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lime/5 to-transparent opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="inline-block text-sm text-lime mb-4 tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
            Passionate About{' '}
            <span className="text-gradient">Creating Impact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative">
              {/* Main image */}
              <motion.div
                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                animate={isInView ? { clipPath: 'circle(50% at 50% 50%)' } : {}}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto"
              >
                <img
                  src="/images/about-portrait.png"
                  alt="About Alex Morgan"
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Border ring */}
                <div className="absolute inset-0 rounded-full border-2 border-lime/30" />
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[-10px] rounded-full border border-dashed border-white/10"
                />
              </motion.div>

              {/* Floating stats */}
              {stats.map((stat, index) => {
                const positions = [
                  'top-0 left-1/2 -translate-x-1/2',
                  'top-1/2 -translate-y-1/2 -left-4',
                  'top-1/2 -translate-y-1/2 -right-4',
                  'bottom-0 left-1/2 -translate-x-1/2',
                ];
                const delays = [0.4, 0.5, 0.6, 0.7];

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: delays[index],
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className={`absolute ${positions[index]} px-4 py-3 bg-dark-card border border-white/10 rounded-xl backdrop-blur-sm`}
                  >
                    <p className="text-2xl font-bold text-lime">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs text-white/50 whitespace-nowrap">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-white/80 leading-relaxed"
              >
                With over 8 years of experience in digital design and development,
                I've had the privilege of working with startups, agencies, and Fortune 500 companies.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base text-white/60 leading-relaxed"
              >
                My approach combines strategic thinking with creative execution to deliver
                results that exceed expectations. I believe in the power of clean code,
                thoughtful design, and user-centered solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base text-white/60 leading-relaxed"
              >
                When I'm not coding or designing, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the community.
              </motion.p>

              {/* Skills tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-2 pt-4"
              >
                {['React', 'TypeScript', 'Node.js', 'UI/UX', 'Three.js', 'AWS'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(192, 247, 72, 0.2)' }}
                    className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:border-lime/50 hover:text-lime transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="pt-6"
              >
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-lime hover:underline"
                >
                  Let's work together
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
