import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import TemplatesPage from './pages/TemplatesPage';
import ContactPage from './pages/ContactPage';
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
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/templates" element={<TemplatesPage />} />
              <Route path="/contact" element={<ContactPage />} />
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