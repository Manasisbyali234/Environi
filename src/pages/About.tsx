import { motion } from 'framer-motion';
import { FileText, Award, Users, Target } from 'lucide-react';

export default function About() {
  const handleCertificationClick = () => {
    window.open('/3169_GRS_CERTIFICATE_20230906100823.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Reversing a <span className="text-emerald-600">Toxic Legacy</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-2">
              People need paper products, and the planet needs sustainability.
              Join us in creating ethical paper solutions for a greener future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded with a vision to transform the paper industry, Environi has been at the forefront 
                of sustainable manufacturing practices. We believe that environmental responsibility and 
                business success go hand in hand.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our journey began with a simple question: How can we create high-quality paper products 
                while minimizing our environmental impact? Today, we're proud to be a certified leader 
                in eco-friendly paper manufacturing.
              </p>
              <button
                onClick={handleCertificationClick}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Award className="w-5 h-5" />
                View Our Certification
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/img/about-bg.jpg"
                alt="About Environi"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to sustainability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 rounded-lg bg-emerald-50"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sustainability First</h3>
              <p className="text-slate-600">
                Every decision we make prioritizes environmental impact and long-term sustainability
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-blue-50"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Community Focus</h3>
              <p className="text-slate-600">
                We work closely with local communities to create positive social and economic impact
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 rounded-lg bg-purple-50"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Quality Excellence</h3>
              <p className="text-slate-600">
                We maintain the highest standards in product quality while staying true to our eco-friendly mission
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Manufacturing Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we transform waste materials into high-quality paper products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="/img/intro-carousel/2.jpg"
                alt="Raw Material Collection"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Raw Material Collection</h3>
                <p className="text-slate-600">
                  We collect and sort waste paper materials from various sources to ensure quality input
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="/img/intro-carousel/3.jpg"
                alt="Processing & Cleaning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Processing & Cleaning</h3>
                <p className="text-slate-600">
                  Advanced cleaning and processing techniques remove impurities and prepare materials
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="/img/intro-carousel/4.jpg"
                alt="Final Production"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Final Production</h3>
                <p className="text-slate-600">
                  State-of-the-art machinery transforms processed materials into premium paper products
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Certified Excellence</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We are proud to hold GRS (Global Recycled Standard) certification, 
              demonstrating our commitment to responsible manufacturing practices.
            </p>
            <button
              onClick={handleCertificationClick}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <FileText className="w-5 h-5" />
              Download Certification
            </button>
          </motion.div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Take a look at our modern manufacturing facilities and sustainable operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 5, 6, 7, 8, 9].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={`/img/intro-carousel/${index}.jpg`}
                  alt={`Facility ${index}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}