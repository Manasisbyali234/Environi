import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const handleSectionClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
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
              src="/img/environi-logo_page-0001.png" 
              alt="Environi Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button onClick={() => handleSectionClick('home')} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-all">Home</button>
            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                isActive('/about') 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              About
            </Link>
            <Link 
              to="/mission" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                isActive('/mission') 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              Mission
            </Link>
            <Link 
              to="/vision" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                isActive('/vision') 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              Vision
            </Link>
            <Link 
              to="/products" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                isActive('/products') 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                isActive('/contact') 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <button 
            onClick={() => navigate('/contact')}
            className="hidden md:block btn-primary text-sm px-4 py-2"
          >
            Get Sample
          </button>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-slate-50 transition-all"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => handleSectionClick('home')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-all"
              >
                Home
              </button>
              <Link 
                to="/about" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-all ${
                  isActive('/about') 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                About
              </Link>
              <Link 
                to="/mission" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-all ${
                  isActive('/mission') 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                Mission
              </Link>
              <Link 
                to="/vision" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-all ${
                  isActive('/vision') 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                Vision
              </Link>
              <Link 
                to="/products" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-all ${
                  isActive('/products') 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                onClick={handleLinkClick}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-all ${
                  isActive('/contact') 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
              <div className="pt-2">
                <button 
                  onClick={() => {
                    navigate('/contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full btn-primary text-center"
                >
                  Get Sample
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
