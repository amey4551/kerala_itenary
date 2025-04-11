import { motion } from 'framer-motion';
import { DayData, highlights } from '@/data/itineraryData';
import LocationCard from './LocationCard';
import us from '../assets/us.jpeg'

interface OverviewProps {
  days: DayData[];
  onExportPDF: () => void;
  onViewDay: (dayId: 'day1' | 'day2') => void;
}

export default function Overview({ days, onExportPDF, onViewDay }: OverviewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'location':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        );
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
      case 'layout':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      {/* Intro Section */}
      <div className="bg-blue-50 py-16">
        <motion.div 
          className="max-w-6xl mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-mont text-3xl md:text-4xl font-bold text-blue-900 mb-4">Your Munnar Adventure Plan</h2>
            <p className="text-blue-700 max-w-2xl mx-auto mb-12">
              Your custom 2-day itinerary to experience the best of Munnar's breathtaking landscapes, tea gardens, and natural wonders. 
              We've carefully planned routes to maximize your experience while avoiding crowds.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            {days.map((day, index) => (
              <LocationCard 
                key={day.id}
                day={day}
                onViewDetails={() => onViewDay(day.id as 'day1' | 'day2')}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className='mt-10 mx-5'>
        
      <h2 className="font-mont text-3xl text-center font-bold text-blue-900 mb-10">The Squad</h2>
             <img 
                  src={us}
                  alt="Kerala Map representation" 
                  className="w-full h-full rounded-full object-cover" 
                />
          </div>
      
      {/* Wave divider */}
      {/* <div className="relative h-16 overflow-hidden bg-blue-50">
        <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
      
      {/* Highlights Section */}

      

      <div className="py-16">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="font-mont text-3xl font-bold text-blue-900 mb-4">Trip Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes this Munnar itinerary special. From breathtaking viewpoints to 
              immersive cultural experiences, we've curated the best attractions.
            </p>
          </motion.div> */}
          
          {/* <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  {renderIcon(highlight.icon)}
                </div>
                <h3 className="font-mont text-xl font-semibold text-blue-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div> */}
          
          {/* <motion.div 
            className="flex justify-center mt-16"
            variants={itemVariants}
          >
            <motion.button 
              id="export-pdf" 
              className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-lg"
              onClick={onExportPDF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              Export Itinerary PDF
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>
      
      {/* Features Section */}
      {/* <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <motion.div variants={itemVariants}>
                  <h3 className="font-mont text-2xl font-bold text-blue-900 mb-4">Perfectly Planned Journey</h3>
                  <p className="text-gray-600 mb-6">
                    Every moment of your Munnar adventure has been carefully crafted to ensure an unforgettable experience. 
                    From scenic viewpoints to cultural highlights, we've optimized your route for maximum enjoyment.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Optimized travel routes between locations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Prioritized must-see attractions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Detailed timeline with ideal visit durations</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <div className="bg-blue-600 p-8 md:p-12 text-white flex items-center">
                <motion.div variants={itemVariants}>
                  <h3 className="font-mont text-2xl font-bold mb-4">Interactive Features</h3>
                  <p className="text-blue-100 mb-6">
                    This digital itinerary includes interactive elements to enhance your planning experience and make your trip more enjoyable.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-300 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Interactive map with all locations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-300 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Timeline visualization of daily activities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-300 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Exportable PDF version for offline reference</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
}
