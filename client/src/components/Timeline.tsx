import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { Location } from '@/data/itineraryData';

interface TimelineProps {
  locations: Location[];
}

export default function Timeline({ locations }: TimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="font-mont text-xl font-semibold text-blue-900">
          Detailed Schedule
        </h3>
      </div>
      
      <div className="relative timeline-line pl-14 mb-10">
        {locations.map((location) => (
          <TimelineItem key={location.id} location={location} />
        ))}
      </div>
    </motion.div>
  );
}
