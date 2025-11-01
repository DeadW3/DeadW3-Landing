import { motion } from 'framer-motion';
import { useState } from 'react';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deadw3-dark via-deadw3-charcoal to-deadw3-blue opacity-50" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-deadw3-amber rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid overlay effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(107, 70, 193, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(107, 70, 193, 0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main title with glitch effect */}
          <h1
            className="font-mono text-7xl md:text-9xl font-bold mb-6 glitch-text glow-amber"
            data-text="DeadW3"
          >
            DeadW3
          </h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-3xl text-deadw3-amber mb-4 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Before it vanishes. Forever.
          </motion.p>

          {/* Secondary tagline */}
          <motion.p
            className="text-sm md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Preserving what was never meant to last.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={onOpenWaitlist}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative group px-8 py-4 bg-deadw3-charcoal border-2 border-deadw3-purple text-deadw3-amber font-mono text-lg font-semibold rounded-none overflow-hidden transition-all duration-300 hover:border-deadw3-amber"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Join the Waitlist</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-deadw3-purple to-deadw3-amber opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              animate={isHovering ? { x: [0, 100, 0] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-deadw3-amber rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-deadw3-amber rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deadw3-dark to-transparent" />
    </section>
  );
}
