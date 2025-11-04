import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Recycle, Shield, RefreshCw } from 'lucide-react';

const features = [
  { icon: Recycle, text: '100% recycled' },
  { icon: Shield, text: 'Chlorine-free' },
  { icon: Shield, text: 'Heavy metal-free' },
  { icon: RefreshCw, text: 'Renewable up to 5 times' }
];

const endorsements = [
  'UN Environment Program',
  'Greenpeace',
  'WWF'
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EEE2D6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2E2A28] mb-4">
            About <span className="text-[#2F6B3E]">Ethical Paper</span>
          </h2>
          <p className="text-xl text-[#6B4C3B] max-w-3xl mx-auto">
            India's foremost brand of recycled and eco-friendly paper
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#2F6B3E]/20">
              <h3 className="text-2xl font-bold text-[#2E2A28] mb-6">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-[#F5F1EA] rounded-xl p-4"
                    >
                      <Icon className="w-5 h-5 text-[#2F6B3E] flex-shrink-0" />
                      <span className="text-[#2E2A28] font-medium">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#2F6B3E]/20">
              <p className="text-lg text-[#2E2A28] mb-4">
                pH neutral and manufactured with sustainable practices
              </p>
              <p className="text-[#6B4C3B]">
                Our paper meets the highest environmental standards while maintaining exceptional quality for all your printing needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-[#2F6B3E] text-white rounded-2xl p-8 border-2 border-[#2F6B3E]">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Endorsed By</h3>
              </div>
              <div className="space-y-4">
                {endorsements.map((org, index) => (
                  <motion.div
                    key={org}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <span className="text-lg font-medium">{org}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6B4C3B] to-[#2F6B3E] text-white rounded-2xl p-8 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20" 
                style={{ backgroundImage: 'url(/img/Goal_Mission.jpg)' }}
              />
              <div className="relative z-10">
                <p className="text-xl font-medium italic text-center">
                  "You make a strong statement of being environment friendly."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
