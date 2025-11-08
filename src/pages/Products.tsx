import { motion } from 'framer-motion';
import { Package, Leaf, Award, Star, X, Send } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitQuoteRequest } from '../utils/emailService';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: "Eco-Friendly Notebooks",
      image: "/img/Products/Notebook.jpg",
      description: "Premium quality notebooks made from 100% recycled materials",
      features: ["100% Recycled Paper", "Biodegradable Cover", "Acid-Free Pages"],
      category: "Stationery"
    },
    {
      id: 2,
      name: "Kraft Paper Sheets",
      image: "/img/Products/01kraft-paper.jpg",
      description: "Durable kraft paper perfect for packaging and crafting",
      features: ["High Strength", "Natural Brown Color", "Recyclable"],
      category: "Packaging"
    },
    {
      id: 3,
      name: "Eco-Friendly Copier Paper",
      image: "/img/Products/Copier.jpg",
      description: "High-quality copier paper for all your printing needs",
      features: ["Bright White", "Jam-Free", "FSC Certified"],
      category: "Office"
    },
    {
      id: 4,
      name: "Paper Bags",
      image: "/img/Products/06paper-bag-paper.jpg",
      description: "Strong and sustainable paper bags for retail and shopping",
      features: ["Reinforced Handles", "Custom Printing", "Compostable"],
      category: "Packaging"
    },
    {
      id: 5,
      name: "Envelope Paper",
      image: "/img/Products/Envelope.jpg",
      description: "Professional quality envelope paper for business correspondence",
      features: ["Smooth Finish", "Easy Folding", "Various Sizes"],
      category: "Office"
    },
    {
      id: 6,
      name: "Conference Pads",
      image: "/img/Products/Conference pad.jpg",
      description: "Professional conference pads for meetings and presentations",
      features: ["Perforated Pages", "Premium Binding", "Logo Customization"],
      category: "Stationery"
    },
    {
      id: 7,
      name: "Spiral Notebooks",
      image: "/img/Products/spiral-book.jpg",
      description: "Durable spiral-bound notebooks for students and professionals",
      features: ["Wire-O Binding", "Perforated Pages", "Multiple Sizes"],
      category: "Stationery"
    },
    {
      id: 8,
      name: "Note Pads",
      image: "/img/Products/notes.jpg",
      description: "Convenient note pads for quick writing and reminders",
      features: ["Adhesive Backing", "Bright Colors", "Easy Tear"],
      category: "Stationery"
    },
    {
      id: 9,
      name: "Writing Pads",
      image: "/img/Products/pads.jpg",
      description: "Professional writing pads for office and personal use",
      features: ["Ruled Pages", "Cardboard Backing", "Premium Paper"],
      category: "Office"
    },
    {
      id: 10,
      name: "Eco Dining Rolls",
      image: "/img/Products/04eco-friendly-dining-rolls-plain.jpg",
      description: "Biodegradable dining rolls for food service industry",
      features: ["Food Safe", "Compostable", "Plain Design"],
      category: "Packaging"
    },
    {
      id: 11,
      name: "Premium Paper Collection",
      image: "/img/Products/paper1.jpg",
      description: "High-quality paper sheets for various applications",
      features: ["Multiple Weights", "Smooth Finish", "Acid-Free"],
      category: "Office"
    },
    {
      id: 12,
      name: "Specialty Papers",
      image: "/img/Products/Other products.jpg",
      description: "Specialized paper products for unique requirements",
      features: ["Custom Sizes", "Various Textures", "Eco-Friendly"],
      category: "Office"
    },
    {
      id: 13,
      name: "Premium Paper Collection - Series A",
      image: "/assets/photo_2025-11-08_13-06-50.jpg",
      description: "High-quality paper sheets for various applications including printing, writing, and professional documentation",
      features: ["Multiple Weights (80-120 GSM)", "Ultra Smooth Finish", "100% Acid-Free", "Archival Quality", "Laser & Inkjet Compatible"],
      category: "Office"
    },
    {
      id: 14,
      name: "Premium Paper Collection - Series B",
      image: "/assets/photo_2025-11-08_13-07-01.jpg",
      description: "Eco-friendly premium paper designed for printing, crafting, and professional use.",
      features: ["Recyclable Material", "Smooth Texture", "Available in Multiple Sizes", "Fade Resistant"],
      category: "Office"
    },
    {
      id: 15,
      name: "Premium Paper Collection - Series C",
      image: "/assets/photo_2025-11-08_13-07-06.jpg",
      description: "High-quality paper sheets for various applications",
      features: ["Multiple Weights", "Smooth Finish", "Acid-Free"],
      category: "Office"
    },
    {
      id: 16,
      name: "Premium Paper Collection - Series D",
      image: "/assets/photo_2025-11-08_13-07-12.jpg",
      description: "High-quality paper sheets for various applications",
      features: ["Multiple Weights", "Smooth Finish", "Acid-Free"],
      category: "Office"
    },
    {
      id: 17,
      name: "Premium Paper Collection - Series E",
      image: "/assets/photo_2025-11-08_13-07-16.jpg",
      description: "High-quality paper sheets for various applications",
      features: ["Multiple Weights", "Smooth Finish", "Acid-Free"],
      category: "Office"
    }
  ];

  const categories = ["All", "Stationery", "Office", "Packaging"];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Our Products</h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Discover our comprehensive range of sustainable paper products designed for modern businesses and eco-conscious consumers
          </p>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-12 px-4"
        >
          <div className="bg-white rounded-full p-1 sm:p-2 shadow-lg overflow-x-auto">
            <div className="flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white'
                      : 'hover:bg-emerald-100 hover:text-emerald-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow h-full flex flex-col"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 min-h-[3.5rem] flex items-center">{product.name}</h3>
                <p className="text-slate-600 mb-4 flex-1 min-h-[3rem]">{product.description}</p>
                
                <div className="mb-4 flex-1">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1 min-h-[6rem]">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <Star className="w-3 h-3 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-0 mt-auto">
                  <button 
                    onClick={() => {
                      setSelectedProduct(product.name);
                      setQuoteFormData(prev => ({ ...prev, productType: product.name }));
                      setShowQuoteModal(true);
                    }}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm flex-1 sm:flex-none"
                  >
                    Get Quote
                  </button>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium py-2 sm:py-0">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-6 sm:mb-8">Why Choose Our Products?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">100% Sustainable</h3>
              <p className="text-slate-600">
                All our products are made from recycled materials and sustainable sources, 
                ensuring minimal environmental impact.
              </p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Premium Quality</h3>
              <p className="text-slate-600">
                We maintain the highest quality standards while being environmentally responsible, 
                giving you the best of both worlds.
              </p>
            </div>
            
            <div className="text-center">
              <Package className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Custom Solutions</h3>
              <p className="text-slate-600">
                We offer customized products and packaging solutions to meet your specific 
                business requirements and branding needs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Product Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-6 sm:mb-8">Product Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            <img 
              src="/img/Products/paper2.jpg" 
              alt="Paper Products" 
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="/img/Products/paper3.jpg" 
              alt="Paper Products" 
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="/img/Products/pencil.jpg" 
              alt="Stationery" 
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="/img/Products/01.jpg" 
              alt="Products" 
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="/img/Products/02.jpg" 
              alt="Products" 
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="/img/Products/03.jpg" 
              alt="Products" 
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="bg-emerald-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Go Green?</h2>
            <p className="text-lg sm:text-xl mb-6">
              Contact us today to discuss your sustainable paper product needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 sm:gap-0 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Request Samples
              </button>
              <button 
                onClick={() => {
                  setSelectedProduct('General Inquiry');
                  setQuoteFormData(prev => ({ ...prev, productType: 'General Inquiry' }));
                  setShowQuoteModal(true);
                }}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Get Quote</h3>
              <button 
                onClick={() => {
                  setShowQuoteModal(false);
                  setSubmitStatus('idle');
                  setQuoteFormData({ name: '', email: '', phone: '', company: '', productType: '', message: '' });
                }}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {selectedProduct && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <p className="text-sm text-emerald-700">
                  <strong>Product:</strong> {selectedProduct}
                </p>
              </div>
            )}
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Quote request submitted successfully! Check your email for confirmation.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                Failed to submit quote request. Please try again.
              </div>
            )}
            
            <form onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              setSubmitStatus('idle');
              
              try {
                await submitQuoteRequest({
                  ...quoteFormData,
                  productType: selectedProduct || quoteFormData.productType
                });
                setSubmitStatus('success');
                setQuoteFormData({ name: '', email: '', phone: '', company: '', productType: '', message: '' });
              } catch (error) {
                setSubmitStatus('error');
              } finally {
                setIsSubmitting(false);
              }
            }} className="space-y-4">
              <input
                type="text"
                name="name"
                value={quoteFormData.name}
                onChange={(e) => setQuoteFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                placeholder="Your Name *"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                value={quoteFormData.email}
                onChange={(e) => setQuoteFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                placeholder="Email Address *"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                required
              />
              <input
                type="tel"
                name="phone"
                value={quoteFormData.phone}
                onChange={(e) => setQuoteFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
              <input
                type="text"
                name="company"
                value={quoteFormData.company}
                onChange={(e) => setQuoteFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
              <textarea
                name="message"
                value={quoteFormData.message}
                onChange={(e) => setQuoteFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                rows={4}
                placeholder="Describe your requirements... *"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical"
                required
              ></textarea>
              <p className="text-sm text-slate-500">* Required fields</p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center disabled:opacity-50"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}