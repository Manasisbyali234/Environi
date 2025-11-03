import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TreePine, Wind, Droplets, Trash2, Zap } from 'lucide-react';

const issues = [
  {
    icon: TreePine,
    title: 'Deforestation',
    description: 'Paper production causes 40% of harvested trees to be used for paper, damaging fragile ecosystems.',
    color: '#6B4C3B'
  },
  {
    icon: Wind,
    title: 'Air Pollution',
    description: 'Paper mills emit NO₂, SO₂, and CO₂ — major causes of acid rain and climate change.',
    color: '#8B7355'
  },
  {
    icon: Droplets,
    title: 'Water Pollution',
    description: 'Bleaching chemicals contaminate rivers and lakes; recycled paper saves 94% of fresh water.',
    color: '#2F6B3E'
  },
  {
    icon: Trash2,
    title: 'Land Pollution',
    description: 'Paper waste makes up 35% of landfills and can become carcinogenic.',
    color: '#6B4C3B'
  },
  {
    icon: Zap,
    title: 'Energy Waste',
    description: 'Paper mills consume huge energy; recycled paper saves 77% of it.',
    color: '#8B7355'
  }
];

export default function IssuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EEE2D6] to-[#F5F1EA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2E2A28] mb-4">
            Environmental Impact from <span className="text-[#6B4C3B]">White Paper</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, index) => {
            const Icon = issue.icon;
            return (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#2F6B3E]/10 hover:border-[#2F6B3E]/30 transition-all hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-[#EEE2D6]">
                    <Icon className="w-6 h-6" style={{ color: issue.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2E2A28]">{issue.title}</h3>
                </div>
                <p className="text-[#6B4C3B] leading-relaxed">{issue.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
