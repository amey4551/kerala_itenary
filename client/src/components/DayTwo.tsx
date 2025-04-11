import { motion } from 'framer-motion';
import { DayData } from '@/data/itineraryData';
import PriorityLocations from './PriorityLocations';
import Timeline from './Timeline';
import keralaImage4 from '../assets/kerala_image4.jpeg';
import keralaImage5 from '../assets/kerala_image5.jpeg';

// Google Maps route for Day 2
const DAY_TWO_ROUTE = "https://www.google.com/maps/dir/Munnar,+Kerala+685612/Kolukkumala+Mountain+Hut/Gap+Road+Munnar/Anayirankal+Dam/Lockhart+Tea+Factory/Government+Botanical+Garden+Munnar/Chokramudi+Peak,+Bison+Valley,+Kerala/@10.010876,77.0393735,10.89z/data=!4m44!4m43!1m5!1m1!1s0x3b0799794d099a6d:0x63250e5553c7e0c!2m2!1d77.0595248!2d10.0889333!1m5!1m1!1s0x3b0775c166c37431:0xdcfcfbc7175ee3e8!2m2!1d77.2214144!2d10.0822045!1m5!1m1!1s0x3b079f0052fdc8e9:0x700929808f1e3264!2m2!1d77.1369597!2d10.0360234!1m5!1m1!1s0x3b07759c0b9ae8ad:0x80faac64184dd9f1!2m2!1d77.2069091!2d10.0093789!1m5!1m1!1s0x3b079ed690be2185:0x4301e70329bb54d3!2m2!1d77.1096725!2d10.0544743!1m5!1m1!1s0x3b0799a662e06203:0xa0c9fff26ab8547a!2m2!1d77.0709315!2d10.0830526!1m5!1m1!1s0x3b0798b54b3cef05:0xf1faaaabaa121bf4!2m2!1d77.1064721!2d10.0364945!3e0?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D";

interface DayTwoProps {
  day: DayData;
}

export default function DayTwo({ day }: DayTwoProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.div 
            className="flex flex-col md:flex-row items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white w-24 h-24 rounded-full flex items-center justify-center text-green-700 font-bold text-4xl mr-8 shadow-lg mb-6 md:mb-0"
              variants={itemVariants}
            >
              {day.number}
            </motion.div>
            <motion.div className="text-center md:text-left" variants={itemVariants}>
              <h2 className="font-mont text-3xl md:text-4xl font-bold">Day {day.number}: {day.title}</h2>
              <p className="text-green-100 mt-2 text-lg">{day.subtitle}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      {/* <div className="relative h-16 overflow-hidden bg-green-700">
        <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,128C384,117,480,75,576,80C672,85,768,139,864,154.7C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <div className="md:col-span-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <PriorityLocations locations={day.priorityLocations} routePlan={day.routePlan} />
              
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6"
                variants={itemVariants}
              >
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h4 className="font-medium text-green-900">Google Maps Route</h4>
                </div>
                <p className="text-sm text-green-800 mb-3">Follow this custom route for Day 2 attractions</p>
                <a 
                  href={DAY_TWO_ROUTE}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Open in Google Maps
                </a>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6 border border-green-100 mt-8"
                variants={itemVariants}
              >
                <h3 className="font-mont text-xl font-semibold text-green-800 mb-4">{day.summary.title}</h3>
                <ul className="space-y-4">
                  {day.summary.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 rounded-xl p-6 mt-8 border border-green-100"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-mont text-lg font-semibold text-green-800">Travel Tips</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Pack a jacket as it can get cooler at higher elevations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Consider starting at Kundala Lake to avoid midday crowds
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Book any activities in advance when possible
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right timeline */}
          <div className="md:col-span-2">
            <Timeline locations={day.locations} />
          </div>
        </div>
      </div>
    </div>
  );
}
