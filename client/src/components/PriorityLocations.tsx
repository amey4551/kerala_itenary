import { motion } from 'framer-motion';

interface PriorityLocationsProps {
  locations: {
    name: string;
    isOptional?: boolean;
  }[];
  routePlan?: string;
}

export default function PriorityLocations({ locations, routePlan }: PriorityLocationsProps) {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 border border-green-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="font-mont text-xl font-semibold text-green-800">
          Priority Locations
        </h3>
      </div>
      
      <motion.ul className="space-y-4 mb-6 divide-y divide-green-50" variants={containerVariants}>
        {locations.map((location, index) => (
          <motion.li 
            key={index} 
            className={`pt-2 first:pt-0 ${location.isOptional ? 'text-gray-500 italic' : 'text-gray-700'}`}
            variants={itemVariants}
          >
            <div className="flex items-start">
              <div className={`${location.isOptional ? 'bg-green-100 text-green-500' : 'bg-green-600 text-white'} 
                              h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5`}>
                {index + 1}
              </div>
              <div>
                <span className={`${location.isOptional ? 'font-normal' : 'font-medium'}`}>
                  {location.name}
                </span>
                {location.isOptional && (
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                    Optional
                  </span>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      
      {routePlan && (
        <motion.div 
          className="border-t border-blue-100 pt-4"
          variants={itemVariants}
        >
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-1 flex-shrink-0 mt-0.5 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-blue-900 mb-1">
                Route Plan
              </p>
              <p className="text-gray-600">
                {routePlan}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
