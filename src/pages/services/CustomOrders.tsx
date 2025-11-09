import { motion } from 'framer-motion';
import { Settings, Package, Clock } from 'lucide-react';

export default function CustomOrders() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Custom Orders</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored paper solutions designed specifically for your unique requirements
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
                src="/img/Products/06paper-bag-paper.jpg" 
                alt="Custom Orders" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Settings className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Bespoke Paper Solutions</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                From unique specifications to custom branding, we create paper products 
                that perfectly match your business needs while maintaining our commitment to sustainability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Package className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">Custom sizes & specifications</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">Fast turnaround times</span>
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
            <h3 className="text-xl font-bold text-slate-800 mb-4">Custom Specifications</h3>
            <p className="text-slate-600 mb-4">Paper products made to your exact requirements and standards.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Custom dimensions</li>
              <li>• Specific GSM weights</li>
              <li>• Color matching</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Branded Solutions</h3>
            <p className="text-slate-600 mb-4">Custom printing and branding on sustainable paper products.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Logo integration</li>
              <li>• Custom watermarks</li>
              <li>• Branded packaging</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Volume Orders</h3>
            <p className="text-slate-600 mb-4">Large-scale production with competitive pricing and reliable delivery.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Bulk pricing discounts</li>
              <li>• Scheduled deliveries</li>
              <li>• Quality guarantees</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}