import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Overview from '@/components/Overview';
import DayOne from '@/components/DayOne';
import DayTwo from '@/components/DayTwo';
import MapView from '@/components/MapView';
import Footer from '@/components/Footer';
import { itineraryData } from '@/data/itineraryData';

type TabId = 'overview' | 'day1' | 'day2' | 'map';

export default function ItineraryApp() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    // Smooth scroll to top of content
    const contentContainer = document.querySelector('.content-container');
    const topPosition = contentContainer ? contentContainer.getBoundingClientRect().top + window.scrollY : 0;
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  };

  const handleExportPDF = () => {
    // In a real implementation, this would use jsPDF and html2canvas
    // to generate a PDF from the itinerary content
    alert('PDF export functionality would be implemented here with jsPDF and html2canvas.');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* Content Container */}
      <div className="content-container" id="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && <Overview days={itineraryData.days} onExportPDF={handleExportPDF} onViewDay={handleTabChange} />}
            {activeTab === 'day1' && <DayOne day={itineraryData.days[0]} />}
            {activeTab === 'day2' && <DayTwo day={itineraryData.days[1]} />}
            {activeTab === 'map' && <MapView />}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Footer */}
      <Footer onExportPDF={handleExportPDF} />
    </div>
  );
}
