import { motion } from 'framer-motion';
import { Target, Leaf, Users } from 'lucide-react';

export default function Mission() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Our Mission</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transforming the paper industry through sustainable innovation
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
                src="/img/Goal_Mission.jpg" 
                alt="Mission Goal" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Our Core Mission</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To revolutionize the paper industry by creating eco-friendly, sustainable paper products 
                that reduce environmental impact while maintaining the highest quality standards.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="/img/about-mission.jpg" 
              alt="Environmental Stewardship" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Environmental Stewardship</h3>
              <p className="text-slate-600">
                Protecting our environment through sustainable practices and renewable resources.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="/img/facts-img.png" 
              alt="Community Impact" 
              className="w-full h-48 object-contain bg-gray-50"
            />
            <div className="p-6 text-center">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Community Impact</h3>
              <p className="text-slate-600">
                Creating positive change in communities through sustainable employment.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="/img/about-vision.jpg" 
              alt="Global Responsibility" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <Target className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Global Responsibility</h3>
              <p className="text-slate-600">
                Leading industry transformation towards sustainability worldwide.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Our Sustainable Products</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <img 
                src="/img/Products/02eco-friendly-copier.jpg" 
                alt="Eco-friendly Copier Paper" 
                className="w-full h-32 object-cover rounded-lg shadow-md mb-3"
              />
              <h4 className="font-semibold text-slate-700">Eco-friendly Copier Paper</h4>
            </div>
            <div className="text-center">
              <img 
                src="/img/Products/03eco-friendly-notebooks.jpg" 
                alt="Eco-friendly Notebooks" 
                className="w-full h-32 object-cover rounded-lg shadow-md mb-3"
              />
              <h4 className="font-semibold text-slate-700">Sustainable Notebooks</h4>
            </div>
            <div className="text-center">
              <img 
                src="/img/Products/01kraft-paper.jpg" 
                alt="Kraft Paper" 
                className="w-full h-32 object-cover rounded-lg shadow-md mb-3"
              />
              <h4 className="font-semibold text-slate-700">Kraft Paper</h4>
            </div>
            <div className="text-center">
              <img 
                src="/img/Products/06paper-bag-paper.jpg" 
                alt="Paper Bag Paper" 
                className="w-full h-32 object-cover rounded-lg shadow-md mb-3"
              />
              <h4 className="font-semibold text-slate-700">Paper Bag Paper</h4>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <img 
            src="/img/floral-design1.jpg" 
            alt="Sustainable Future" 
            className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h2 className="text-3xl font-bold mb-4">Building a Sustainable Future</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Together, we're creating a world where paper production and environmental protection go hand in hand.
          </p>
        </motion.div>
      </div>
    </div>
  );
}