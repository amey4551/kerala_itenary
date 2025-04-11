import { motion } from 'framer-motion';
import { Location } from '@/data/itineraryData';

interface TimelineItemProps {
  location: Location;
}

export default function TimelineItem({ location }: TimelineItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="timeline-item timeline-dot mb-10 bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition p-6"
      variants={itemVariants}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center text-blue-600 font-semibold mb-4">
        <div className="bg-blue-100 rounded-full p-1 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
        {location.time}
      </div>
      
      <div className="timeline-content">
        {/* Location name and badges */}
        <div className="flex flex-wrap items-center mb-4 gap-2">
          <h4 className="font-mont text-xl font-bold text-blue-900 mr-2">{location.name}</h4>
          
          {location.isPriority && (
            <div className={`${location.isOptional ? 'bg-blue-100 text-blue-600' : 'bg-blue-600 text-white'} inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              {location.isOptional ? 'Optional Priority' : 'Priority Stop'}
            </div>
          )}
          
          {location.isOptional && !location.isPriority && (
            <div className="bg-gray-100 text-gray-600 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Optional Activity
            </div>
          )}
        </div>
        
        {/* Image container */}
        {location.image && (
          <div className="mb-6">
            <motion.img 
              src={location.image} 
              alt={location.name} 
              className="w-full h-60 object-cover rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
        
        {/* Description */}
        <p className="text-gray-700 mb-5 leading-relaxed">{location.description}</p>
        
        {/* Details list */}
        {location.details && location.details.length > 0 && (
          <div className="mb-5 bg-blue-50 rounded-lg p-4">
            <h5 className="font-medium text-blue-900 mb-3">Activity Details</h5>
            <ul className="text-gray-700 space-y-2">
              {location.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Travel tip */}
        {location.travelTip && (
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-blue-800">
                  {location.time.includes('Departure') || location.name.includes('Leave hotel') 
                    ? 'Travel Tip:' 
                    : location.time.includes('Lunch') || location.name.includes('Lunch') 
                      ? 'Dining Tip:' 
                      : location.time.includes('Return') 
                        ? 'Next Day Prep:' 
                        : location.isOptional 
                          ? 'Note:' 
                          : 'Important Notes:'}
                </div>
                <p className="text-blue-700">{location.travelTip}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
