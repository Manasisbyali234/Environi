import { motion } from 'framer-motion';
import { Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function SustainabilityConsulting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Sustainability Consulting</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert guidance to transform your business into a sustainable operation
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
                src="/img/about-mission.jpg" 
                alt="Sustainability Consulting" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Expert Consulting Services</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our sustainability experts help businesses develop and implement comprehensive 
                environmental strategies that reduce costs while improving environmental performance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">Proven ROI improvement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-slate-700">Certified consultants</span>
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
            <h3 className="text-xl font-bold text-slate-800 mb-4">Environmental Audits</h3>
            <p className="text-slate-600 mb-4">Comprehensive assessment of your current environmental impact.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Carbon footprint analysis</li>
              <li>• Waste stream evaluation</li>
              <li>• Energy usage assessment</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Strategy Development</h3>
            <p className="text-slate-600 mb-4">Custom sustainability strategies tailored to your business goals.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• Goal setting & KPIs</li>
              <li>• Implementation roadmap</li>
              <li>• Cost-benefit analysis</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Certification Support</h3>
            <p className="text-slate-600 mb-4">Guidance through environmental certification processes.</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• ISO 14001 preparation</li>
              <li>• Green building certifications</li>
              <li>• Sustainability reporting</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}