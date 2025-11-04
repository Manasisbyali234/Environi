import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Carousel from './Carousel';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Carousel />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-emerald-50/60 to-slate-100/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
        >
          Reversing a{' '}
          <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
            Toxic Legacy
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          People need paper products, and the planet needs sustainability.
          <br className="hidden sm:block" />
          <span className="text-lg text-slate-500">Join us in creating ethical paper solutions for a greener future.</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
            Learn More <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary flex items-center gap-2 text-lg px-8 py-4">
            <Play className="w-5 h-5" /> Watch Demo
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">100%</div>
            <div className="text-sm text-slate-600">Recycled Materials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">50+</div>
            <div className="text-sm text-slate-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">5M+</div>
            <div className="text-sm text-slate-600">Sheets Produced</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
