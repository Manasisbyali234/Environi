import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <img src="/assets/environi-logo_page-0001.jpg" alt="Environi" className="h-8" />
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              India's foremost brand of recycled and eco-friendly paper. Together, we can reverse the toxic legacy and build a sustainable future.
            </p>
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>pratap@environi.co.in</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400 ml-7">
                  <span>prabhu@environi.co.in</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400 ml-7">
                  <span>harish@environi.co.in</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span>+91 98452 12183</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400 ml-7">
                  <span>+91 84314 88687</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400 ml-7">
                  <span>+91 99000 83907</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Bangalore, Karnataka</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">Home</a></li>
              <li><a href="#impact" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">Impact</a></li>
              <li><a href="#solution" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">Solution</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">About</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-slate-300 text-sm">Recycled Paper</span></li>
              <li><span className="text-slate-300 text-sm">Eco-friendly Solutions</span></li>
              <li><span className="text-slate-300 text-sm">Sustainability Consulting</span></li>
              <li><span className="text-slate-300 text-sm">Custom Orders</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; 2024 Environi. All rights reserved. Making the world greener, one sheet at a time.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
