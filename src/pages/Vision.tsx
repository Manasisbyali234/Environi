import { motion } from 'framer-motion';
import { Eye, Lightbulb, Recycle } from 'lucide-react';

export default function Vision() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Our Vision</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Envisioning a world where sustainable paper products are the standard
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Our Vision for Tomorrow</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To become the global leader in sustainable paper manufacturing, creating a world where 
                every paper product contributes to environmental restoration.
              </p>
            </div>
            <div>
              <img 
                src="/img/Goal_Vision.jpg" 
                alt="Vision Goal" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-3">Innovation Leader</h3>
            <p className="text-slate-600 text-sm">
              Pioneering breakthrough technologies in sustainable paper production
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Recycle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-3">Zero Waste</h3>
            <p className="text-slate-600 text-sm">
              Achieving 100% circular economy in manufacturing processes
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Eye className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-3">Global Impact</h3>
            <p className="text-slate-600 text-sm">
              Inspiring worldwide adoption of sustainable practices
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}