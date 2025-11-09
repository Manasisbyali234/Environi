import { motion } from 'framer-motion';
import { Recycle, Leaf, Award } from 'lucide-react';

export default function RecycledPaper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Recycled Paper Solutions</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Premium quality recycled paper products that reduce environmental impact
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
              <img 
                src="/img/Products/02eco-friendly-copier.jpg" 
                alt="Recycled Paper" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Recycle className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">100% Recycled Paper</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our recycled paper products are made from 100% post-consumer waste, 
                providing the same quality as virgin paper while saving trees and reducing landfill waste.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Leaf className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">Saves 17 trees per ton</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">ISO certified quality</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Office Paper</h3>
            <p className="text-slate-600 mb-4">High-quality copier and printer paper for all office needs.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• A4, A3 sizes available</li>
              <li>• 70-80 GSM options</li>
              <li>• Bright white finish</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Packaging Paper</h3>
            <p className="text-slate-600 mb-4">Durable kraft paper for packaging and shipping needs.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Various thickness options</li>
              <li>• Water-resistant coating</li>
              <li>• Custom sizes available</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Specialty Paper</h3>
            <p className="text-slate-600 mb-4">Specialized recycled paper for unique applications.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Colored paper options</li>
              <li>• Textured finishes</li>
              <li>• Food-grade variants</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}