import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import DemoForm from './DemoForm';

export default function Hero() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const handleScheduleDemo = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-6 lg:px-8 py-8 xs:py-12 sm:py-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="card overflow-hidden h-full">
          <img
            src="/intro-carousel/1.jpg"
            alt="Hero background"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-black/50 xs:bg-black/45 sm:bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-emerald-900/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2 drop-shadow-lg"
        >
          <span className="block">Reversing a{' '}</span>
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent block">
            Toxic Legacy
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-2 drop-shadow-md"
        >
          <span className="block mb-2">
            People need paper products, and the planet needs sustainability.
          </span>
          <span className="text-xs xs:text-sm sm:text-base md:text-lg text-white font-medium block">
            Join us in creating ethical paper solutions for a greener future.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-2 max-w-md xs:max-w-none mx-auto"
        >
          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="w-full xs:w-auto flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg px-4 xs:px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[48px] font-medium"
          >
            Learn More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handleScheduleDemo}
            className="w-full xs:w-auto flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg px-4 xs:px-6 sm:px-8 py-3 sm:py-4 bg-white/95 backdrop-blur-sm border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-lg sm:rounded-xl shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[48px] font-medium"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Schedule Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 xs:mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 xs:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-2"
        >
          <div className="text-center py-3 xs:py-4 bg-black/20 backdrop-blur-sm rounded-lg xs:bg-transparent xs:backdrop-blur-none">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">100%</div>
            <div className="text-xs xs:text-xs sm:text-sm md:text-base text-white font-semibold mt-1 drop-shadow-md leading-tight">
              Recycled Materials
            </div>
          </div>

          <div className="text-center py-3 xs:py-4 bg-black/20 backdrop-blur-sm rounded-lg xs:bg-transparent xs:backdrop-blur-none">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">50+</div>
            <div className="text-xs xs:text-xs sm:text-sm md:text-base text-white font-semibold mt-1 drop-shadow-md leading-tight">Happy Clients</div>
          </div>

          <div className="text-center py-3 xs:py-4 bg-black/20 backdrop-blur-sm rounded-lg xs:bg-transparent xs:backdrop-blur-none">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">5M+</div>
            <div className="text-xs xs:text-xs sm:text-sm md:text-base text-white font-semibold mt-1 drop-shadow-md leading-tight">
              Sheets Produced
            </div>
          </div>
        </motion.div>
      </div>
      
      <DemoForm 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </section>
  );
}
