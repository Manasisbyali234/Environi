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
      className="relative min-h-screen flex items-center justify-center"
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/20 via-emerald-50/15 to-slate-100/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
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

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-black mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          People need paper products, and the planet needs sustainability.
          <br className="hidden sm:block" />
          <span className="text-lg text-black">
            Join us in creating ethical paper solutions for a greener future.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition"
          >
            Learn More <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleScheduleDemo}
            className="btn-secondary flex items-center gap-2 text-lg px-8 py-4 bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-xl shadow-md transition"
          >
            <FileText className="w-5 h-5" /> Schedule Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-extrabold text-black">100%</div>
            <div className="text-sm text-black font-medium">
              Recycled Materials
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-extrabold text-black">50+</div>
            <div className="text-sm text-black font-medium">Happy Clients</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-extrabold text-black">5M+</div>
            <div className="text-sm text-black font-medium">
              Sheets Produced
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
