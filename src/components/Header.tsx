import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/assets/environi-logo_page-0001.jpg" 
              alt="Environi Logo" 
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#home" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-all">Home</a>
            <a href="#impact" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-all">Impact</a>
            <a href="#solution" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-all">Solution</a>
            <a href="#about" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-all">About</a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-all">Contact</a>
          </nav>
          <button className="btn-primary">
            Get Sample
          </button>
        </div>
      </div>
    </motion.header>
  );
}
