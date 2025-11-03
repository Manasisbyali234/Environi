import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Leaf } from 'lucide-react';

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EA] to-[#EEE2D6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2E2A28] mb-8">
            The <span className="text-[#2F6B3E]">Solution</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#2F6B3E]/20">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#2F6B3E] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#2E2A28]">
                  Deploy a paper management plan, avoid needless printing, replace virgin paper with recycled paper.
                </p>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#2F6B3E]/20">
              <div className="flex items-start gap-4">
                <Leaf className="w-6 h-6 text-[#2F6B3E] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#2E2A28]">
                  Recycled paper protects forests, resets ecosystems, and recreates sustainability.
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#2F6B3E] text-white px-8 py-4 rounded-full hover:bg-[#2F6B3E]/90 transition-colors text-lg font-medium shadow-lg"
            >
              Switch to Ethical Paper Today
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-[#2F6B3E]/10 rounded-3xl p-8 border-2 border-[#2F6B3E]/20"
          >
            <h3 className="text-2xl font-bold text-[#2E2A28] mb-6">Practical Use</h3>
            <div className="space-y-4 mb-6">
              <p className="text-[#2E2A28]">
                Ethical Paper is versatile — suitable for photocopiers, laser and inkjet printers, and offset presses.
              </p>
              <p className="text-[#2E2A28]">
                Available in <span className="font-bold text-[#2F6B3E]">50+ SKUs</span> and customizable recycled grades.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/60 rounded-xl p-4">
                <div className="text-3xl font-bold text-[#2F6B3E]">50+</div>
                <div className="text-sm text-[#6B4C3B]">SKUs Available</div>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <div className="text-3xl font-bold text-[#2F6B3E]">100%</div>
                <div className="text-sm text-[#6B4C3B]">Recycled</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
