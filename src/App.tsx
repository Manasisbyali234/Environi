import Header from './components/Header';
import Hero from './components/Hero';
import Prelude from './components/Prelude';
import IssuesSection from './components/IssuesSection';
import StatsGrid from './components/StatsGrid';
import SolutionSection from './components/SolutionSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Prelude />
      <IssuesSection />
      <StatsGrid />
      <SolutionSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
