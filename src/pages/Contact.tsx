import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Get in touch with us to learn more about our sustainable paper solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  placeholder="Last Name"
                />
              </div>
              
              <input
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Email Address"
              />
              
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Your message..."
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                  <p className="text-slate-600">
                    123 Sustainable Street<br />
                    Green Valley, CA 90210
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                  <p className="text-slate-600">info@environi.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <img 
                src="/img/about-bg.jpg" 
                alt="Our Office" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}