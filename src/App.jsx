import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Investor from './pages/Investor';
import Supervisor from './pages/Supervisor';
import Doctor from './pages/Doctor';
import AssistantDoctor from './pages/AssistantDoctor';
import FarmManager from './pages/FarmManager';

import AboutUs from './pages/footerpages/AboutUs';
import InvestmentPlans from './pages/footerpages/InvestmentPlans';
import OurTeam from './pages/footerpages/OurTeam';
import Blog from './pages/footerpages/Blog';
import ContactUs from './pages/footerpages/ContactUs';
import PrivacyPolicy from './pages/footerpages/PrivacyPolicy';
import Support from './pages/footerpages/Support';
import CookiePolicy from './pages/footerpages/CookiePolicy';
import TermsOfService from './pages/footerpages/TermsOfService';

import ScrollToTop from './components/ScrollToTop';
import SideRoleNav from './components/SideRoleNav';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SideRoleNav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/investor" element={<Investor />} />
        <Route path="/supervisor" element={<Supervisor />} />
        <Route path="/farm-manager" element={<FarmManager />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/assistant-doctor" element={<AssistantDoctor />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/investment-plans" element={<InvestmentPlans />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Keeping old routes for compatibility if needed or redirecting */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/invest" element={<InvestmentPlans />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      {/* Fixed Version Display */}
      <div className="fixed bottom-4 right-4 z-[9999] opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="bg-black/80 backdrop-blur-md text-white/50 text-xs font-medium px-3 py-1 rounded-full border border-white/10 select-none">
          {import.meta.env.VITE_APP_VERSION}
        </span>
      </div>
    </Router>
  );
}

export default App;
