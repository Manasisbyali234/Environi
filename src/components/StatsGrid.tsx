import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    title: 'Trees Saved',
    ethical: '100%',
    regular: '0%',
    note: '0 trees used',
    savings: '100% saved'
  },
  {
    title: 'Energy Saved',
    ethical: '275 Units',
    regular: '1200 Units',
    note: 'Per ton',
    savings: '77% saved'
  },
  {
    title: 'Water Saved',
    ethical: '1,000 L',
    regular: '28,000 L',
    note: 'Per ton',
    savings: '94% saved'
  },
  {
    title: 'GHG Reduced',
    ethical: '559 kg',
    regular: '2,540 kg',
    note: 'CO₂ equivalent',
    savings: '78% reduced'
  },
  {
    title: 'Solid Waste Reduced',
    ethical: '400 kg',
    regular: '900 kg',
    note: 'Per ton',
    savings: '55% reduced'
  }
];

export default function StatsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 sm:px-6 lg:px-8 bg-[#2F6B3E] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
            At a Glance
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-white/80">Ethical Paper vs. Regular Paper</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-6 border-2 border-white/20 hover:bg-white/20 transition-all"
            >
              <h3 className="text-lg xs:text-xl font-bold mb-3 xs:mb-4 text-[#EEE2D6]">{stat.title}</h3>
              <div className="space-y-2 xs:space-y-3 mb-3 xs:mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm xs:text-base text-white/70">Ethical Paper:</span>
                  <span className="font-bold text-base xs:text-lg text-[#EEE2D6]">{stat.ethical}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm xs:text-base text-white/70">Regular Paper:</span>
                  <span className="font-bold text-base xs:text-lg">{stat.regular}</span>
                </div>
              </div>
              <div className="pt-2 xs:pt-3 border-t border-white/20">
                <div className="text-xs xs:text-sm text-white/60 mb-1">{stat.note}</div>
                <div className="text-base xs:text-lg font-bold text-[#EEE2D6]">{stat.savings}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
