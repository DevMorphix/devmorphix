import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Templates from './components/Templates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';
import { ThemeProvider } from './components/ThemeContext';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-aura-dark min-h-screen text-aura-light selection:bg-aura-gold selection:text-aura-dark font-sans flex flex-col transition-colors duration-300">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <AIChatWidget />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;