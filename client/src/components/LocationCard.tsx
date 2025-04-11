import { motion } from 'framer-motion';
import { DayData } from '@/data/itineraryData';

interface LocationCardProps {
  day: DayData;
  onViewDetails: () => void;
}

export default function LocationCard({ day, onViewDetails }: LocationCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden border border-blue-100"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        {/* Day badge */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-md">
          {day.number}
        </div>
        
        <div className="h-56 overflow-hidden">
          <motion.img 
            src={day.image}
            alt={day.title} 
            className="w-full h-full object-cover transition duration-500"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-mont text-2xl font-bold text-blue-900 mb-2">{day.title}</h3>
        <p className="text-gray-600 mb-5 line-clamp-3">{day.description}</p>
        
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center text-sm text-gray-600 bg-blue-50 rounded-full px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {day.duration}
          </div>
          
          <div className="flex items-center text-sm text-gray-600 bg-blue-50 rounded-full px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {day.count}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          {/* Priority locations counter */}
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
            </div>
            <span>{day.priorityLocations.length} Priority Stops</span>
          </div>
          
          <motion.button 
            onClick={onViewDetails}
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center">
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
