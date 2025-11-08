import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '#3815, Ground Floor, CT Bed, 7th Cross, Banashankari 2nd Stage, Bangalore – 560070'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: ['+91 98452 12183', '+91 84314 88687', '+91 99000 83907']
  },
  {
    icon: Mail,
    title: 'Email',
    content: ['pratap@environi.co.in', 'prabhu@environi.co.in', 'harish@environi.co.in']
  },
  {
    icon: Globe,
    title: 'Website',
    content: 'https://environi-1.vercel.app/'
  }
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Way <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Forward</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Allow us to be your sustainability partner and the preferred source for recycled papers. Together we can achieve global sustainability goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{info.title}</h3>
                    {Array.isArray(info.content) ? (
                      <div className="space-y-1">
                        {info.content.map((item, i) => (
                          <p key={i} className="text-slate-600">{item}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-600">{info.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
              backgroundSize: '24px 24px'
            }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
              Join us in creating a sustainable future with ethical paper choices. Let's work together towards a greener tomorrow.
            </p>
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all hover:scale-105 text-lg font-medium shadow-lg inline-flex items-center gap-2">
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
