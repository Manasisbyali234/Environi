import { motion } from 'framer-motion';
import { Leaf, Shield, Zap } from 'lucide-react';

export default function EcoFriendlySolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Eco-Friendly Solutions</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive sustainable paper solutions for modern businesses
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
                src="/img/Products/03eco-friendly-notebooks.jpg" 
                alt="Eco-Friendly Solutions" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Leaf className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Complete Green Solutions</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Transform your business operations with our comprehensive eco-friendly paper solutions 
                that reduce carbon footprint while maintaining operational efficiency.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">Chemical-free processing</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">Energy-efficient production</span>
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
            <h3 className="text-xl font-bold text-slate-800 mb-4">Green Office Setup</h3>
            <p className="text-slate-600 mb-4">Complete office paper solutions with minimal environmental impact.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Sustainable stationery</li>
              <li>• Eco-friendly notebooks</li>
              <li>• Biodegradable packaging</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Carbon Neutral Products</h3>
            <p className="text-slate-600 mb-4">Paper products with verified carbon-neutral certification.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Offset carbon emissions</li>
              <li>• Renewable energy production</li>
              <li>• Third-party verified</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Waste Reduction Programs</h3>
            <p className="text-slate-600 mb-4">Comprehensive programs to minimize paper waste in your organization.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Digital transition support</li>
              <li>• Waste audit services</li>
              <li>• Employee training</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}