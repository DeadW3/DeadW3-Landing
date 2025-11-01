import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';

export default function Visualization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Generate nodes for the network visualization
  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 50 + (Math.cos((i * 2 * Math.PI) / 12) * 35),
      y: 50 + (Math.sin((i * 2 * Math.PI) / 12) * 35),
      delay: i * 0.1,
    }));
  }, []);

  // Generate connections between nodes
  const connections = useMemo(() => {
    const conns = [];
    for (let i = 0; i < nodes.length; i++) {
      const next = (i + 1) % nodes.length;
      const opposite = (i + 6) % nodes.length;
      conns.push({ from: nodes[i], to: nodes[next] });
      if (i % 2 === 0) {
        conns.push({ from: nodes[i], to: nodes[opposite] });
      }
    }
    return conns;
  }, [nodes]);

  return (
    <section ref={ref} className="relative py-32 px-4 bg-deadw3-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deadw3-charcoal via-deadw3-dark to-deadw3-dark" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-psychedelic font-bold text-gd-red mb-4 glow-gd-red">
            The Archive Lives Forever
          </h2>
          <p className="text-gray-400 text-lg font-light italic max-w-2xl mx-auto">
            Ephemeral moments flowing into an immutable, decentralized vault
          </p>
        </motion.div>

        {/* Visualization container */}
        <div className="relative w-full max-w-2xl mx-auto aspect-square">
          {/* Central vault with Steal Your Face */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
            initial={{ scale: 0, rotate: 0 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-gd-blue opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            {/* Secondary glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-gd-red opacity-40"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
            />

            {/* Grateful Dead logo */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <img
                src="/Grateful-Dead-Logo.png"
                alt="Grateful Dead Logo"
                className="w-32 h-32 object-contain drop-shadow-[0_0_20px_rgba(201,45,37,0.6)]"
              />
            </motion.div>
          </motion.div>

          {/* Network connections */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {connections.map((conn, i) => (
              <motion.line
                key={i}
                x1={conn.from.x}
                y1={conn.from.y}
                x2={conn.to.x}
                y2={conn.to.y}
                stroke="rgba(37, 51, 135, 0.4)"
                strokeWidth="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: conn.from.delay }}
              />
            ))}

            {/* Data flow particles */}
            {connections.slice(0, 6).map((conn, i) => (
              <motion.circle
                key={`particle-${i}`}
                r="0.5"
                fill={i % 2 === 0 ? "#c92d25" : "#253387"}
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: [0, 1, 0],
                        cx: [conn.from.x, conn.to.x, conn.from.x],
                        cy: [conn.from.y, conn.to.y, conn.from.y],
                      }
                    : {}
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </svg>

          {/* Network nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className={`absolute w-3 h-3 rounded-full ${
                node.id % 2 === 0 ? 'bg-gd-red' : 'bg-gd-blue'
              }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: node.delay }}
            >
              {/* Node glow */}
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  node.id % 2 === 0 ? 'bg-gd-red' : 'bg-gd-blue'
                }`}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: node.delay,
                }}
              />
            </motion.div>
          ))}

          {/* Floating data streams */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className={`absolute w-1 h-20 bg-gradient-to-b from-transparent to-transparent opacity-30 ${
                i % 2 === 0 ? 'via-gd-red' : 'via-gd-blue'
              }`}
              style={{
                left: `${20 + i * 10}%`,
                top: '-20%',
              }}
              animate={{
                y: ['0vh', '120vh'],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-gray-500 font-mono text-sm tracking-wider">
            [ DECENTRALIZED • PERMANENT • VERIFIABLE ]
          </p>
        </motion.div>
      </div>
    </section>
  );
}
