import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TreePine } from 'lucide-react';

export default function Prelude() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
            <div className="p-2 sm:p-3 bg-green-100 rounded-full border-2 sm:border-4 border-white shadow-lg">
              <TreePine className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
          </div>
          
          <div className="card p-4 sm:p-8 lg:p-12 text-center pt-12 sm:pt-16">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-100 text-slate-700 rounded-full text-xs sm:text-sm font-medium">
                Environmental Challenge
              </span>
            </div>
            
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed font-medium px-2 sm:px-0">
              "By 2035 paper mills will produce{' '}
              <span className="font-bold text-slate-900 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                billions of tons of paper
              </span>
              {' '}leading to adverse environmental impact. Great efforts are required now to protect our planet unless we wish to forsake it for a{' '}
              <span className="font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                toxic legacy
              </span>."
            </blockquote>
            
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                The time for sustainable solutions is now
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
