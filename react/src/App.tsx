import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WorkshopSection from './components/WorkshopSection';
import ResourcesSection from './components/ResourcesSection';
import WhyJoin from './components/WhyJoin';
import FancyBackground from './components/FancyBackground';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import OurMissionSection from './components/OurMission';
import ApplyPage from './components/ApplyPage';
import Maintenance from './components/Maintenance';

function App() {
  const isMaintenance = process.env.REACT_APP_MAINTENANCE_WINDOW2 === 'true';

  return (
    <Router>
      <div className="relative">
        {isMaintenance ? (
          <Maintenance />
        ) : (
          <>
            {/* Fancy Background */}
            <FancyBackground />

            {/* Header */}
            <Header />

            {/* Routes */}
            <Routes>
              <Route
                path="/"
                element={
                  <div className="relative z-5">
                    <HeroSection />
                    <OurMissionSection />
                    <WhyJoin />
                    <WorkshopSection />
                    <AboutUs />
                    <ResourcesSection />
                    <Footer />
                  </div>
                }
              />
              <Route path="/apply" element={<ApplyPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;