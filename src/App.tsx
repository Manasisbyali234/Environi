import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Prelude from './components/Prelude';
import IssuesSection from './components/IssuesSection';
import StatsGrid from './components/StatsGrid';
import SolutionSection from './components/SolutionSection';
import AboutSection from './components/AboutSection';
import ClientSection from './components/ClientSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Prelude />
              <IssuesSection />
              <StatsGrid />
              <SolutionSection />
              <AboutSection />
              <ClientSection />
              <ContactSection />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
