import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  const handleScheduleDemo = () => {
    // Opens the PDF in a new tab
    window.open('/3169_GRS_CERTIFICATE_20230906100823.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
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
      <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 drop-shadow-lg"
        >
          Reversing a{' '}
          <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
            Toxic Legacy
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-black font-bold mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2"
        >
          People need paper products, and the planet needs sustainability.
          <br className="hidden sm:block" />
          <span className="text-base sm:text-lg text-black font-bold block mt-2">
            Join us in creating ethical paper solutions for a greener future.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
        >
          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition-all duration-200 min-h-[48px]"
          >
            Learn More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handleScheduleDemo}
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-xl shadow-md transition-all duration-200 min-h-[48px]"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Schedule Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-2"
        >
          <div className="text-center py-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md">100%</div>
            <div className="text-xs sm:text-sm text-white font-medium mt-1 drop-shadow-sm">
              Recycled Materials
            </div>
          </div>

          <div className="text-center py-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md">50+</div>
            <div className="text-xs sm:text-sm text-white font-medium mt-1 drop-shadow-sm">Happy Clients</div>
          </div>

          <div className="text-center py-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md">5M+</div>
            <div className="text-xs sm:text-sm text-white font-medium mt-1 drop-shadow-sm">
              Sheets Produced
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
