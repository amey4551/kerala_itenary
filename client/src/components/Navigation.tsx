// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Home, Calendar, Map } from 'lucide-react';

// interface NavigationProps {
//   activeTab: string;
//   onTabChange: (tabId: 'overview' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6' | 'map') => void;
// }

// export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
//   const [scrollPosition, setScrollPosition] = useState(0);
  
//   const tabs = [
//     { id: 'overview', icon: 'home', label: 'Overview' },
//     { id: 'day1', icon: 'calendar', label: 'Day 1' },
//     { id: 'day2', icon: 'calendar', label: 'Day 2' },
//     // { id: 'day3', icon: 'calendar', label: 'Day 3' },
//     // { id: 'day4', icon: 'calendar', label: 'Day 4' },
//     // { id: 'day5', icon: 'calendar', label: 'Day 5' },
//     // { id: 'day6', icon: 'calendar', label: 'Day 6' },
//     { id: 'map', icon: 'map', label: 'Map' }
//   ];
  
//   const handleScroll = (direction: 'left' | 'right') => {
//     const container = document.getElementById('tabs-container');
//     if (container) {
//       // Significantly reduced scroll amount from 200 to a much smaller value
//       const scrollAmount = 100;
      
//       const newPosition = direction === 'left' 
//         ? Math.max(0, scrollPosition - scrollAmount)
//         : scrollPosition + scrollAmount;
      
//       container.scrollTo({ left: newPosition, behavior: 'smooth' });
//       setScrollPosition(newPosition);
//     }
//   };

//   const renderIcon = (icon: string) => {
//     switch (icon) {
//       case 'home':
//         return <Home size={18} className="mb-1" />;
//       case 'calendar':
//         return <Calendar size={18} className="mb-1" />;
//       case 'map':
//         return <Map size={18} className="mb-1" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg mb-6">
//       <div className="max-w-6xl mx-auto relative">
//         {/* Mobile Navigation */}
//         <div className="block md:hidden">
//           <div className="flex items-center justify-between">
//             <button 
//               onClick={() => handleScroll('left')}
//               className="p-3 text-white hover:bg-gray-800 focus:outline-none"
//               aria-label="Scroll left"
//             >
//               <ChevronLeft size={20} />
//             </button>
            
//             <div 
//               id="tabs-container"
//               className="flex overflow-x-auto scrollbar-hide py-1 scroll-smooth"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {tabs.map((tab) => (
//                 <motion.button
//                   key={tab.id}
//                   data-tab={tab.id}
//                   className={`
//                     flex flex-col items-center justify-center min-w-16 px-3 py-2 mx-1 rounded-lg transition
//                     ${activeTab === tab.id 
//                       ? 'bg-green-600 text-white' 
//                       : 'text-gray-300 hover:bg-gray-800'
//                     }
//                   `}
//                   onClick={() => onTabChange(tab.id as any)}
//                   whileTap={{ scale: 0.95 }}
//                   aria-selected={activeTab === tab.id}
//                   role="tab"
//                 >
//                   {renderIcon(tab.icon)}
//                   <span className="text-xs font-medium mt-1">{tab.label}</span>
//                 </motion.button>
//               ))}
//             </div>

//             <button 
//               onClick={() => handleScroll('right')}
//               className="p-3 text-white hover:bg-gray-800 focus:outline-none"
//               aria-label="Scroll right"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
        
//         {/* Desktop Navigation */}
//         <div className="hidden md:block">
//           <div className="flex items-center justify-between">
//             <div className="flex flex-1 space-x-1">
//               {tabs.map((tab) => (
//                 <motion.button
//                   key={tab.id}
//                   data-tab={tab.id}
//                   className={`
//                     flex items-center py-4 px-4 font-medium transition relative flex-1
//                     ${activeTab === tab.id 
//                       ? 'text-white' 
//                       : 'text-gray-300 hover:text-white hover:bg-gray-800'
//                     }
//                   `}
//                   onClick={() => onTabChange(tab.id as any)}
//                   whileHover={{ backgroundColor: 'rgba(31, 41, 55, 0.8)' }}
//                   whileTap={{ scale: 0.98 }}
//                   aria-selected={activeTab === tab.id}
//                   role="tab"
//                 >
//                   <div className="flex items-center justify-center w-full space-x-2">
//                     {renderIcon(tab.icon)}
//                     <span>{tab.label}</span>
//                   </div>
//                   {activeTab === tab.id && (
//                     <motion.div 
//                       className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"
//                       layoutId="activeTabDesktop"
//                       transition={{ type: 'spring', damping: 30, stiffness: 300 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Title bar that shows on mobile when scrolling */}
//         {/* <motion.div 
//           className="absolute -bottom-7 left-0 right-0 text-center text-sm font-medium py-1 bg-gradient-to-r from-green-700 to-green-600 md:hidden"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ 
//             opacity: activeTab !== 'overview' ? 1 : 0,
//             y: activeTab !== 'overview' ? 0 : 10
//           }}
//           transition={{ duration: 0.2 }}
//         >
//           Your Kerala Adventure · {tabs.find(t => t.id === activeTab)?.label}
//         </motion.div> */}
//       </div>
//     </nav>
//   );
// }





import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Map, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tabId: 'overview' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6' | 'map') => void;
}

export default function Navigation({ activeTab, onTabChange }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const tabs = [
    { id: 'overview', icon: <Home size={18} />, label: 'Overview' },
    { id: 'day1', label: 'Day 1' },
    { id: 'day2', label: 'Day 2' },
    // { id: 'day3', label: 'Day 3' },
    // { id: 'day4', label: 'Day 4' },
    // { id: 'day5', label: 'Day 5' },
    // { id: 'day6', label: 'Day 6' },
    { id: 'map', icon: <Map size={18} />, label: 'Map' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleTabChange = (tabId: any) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed top bar for mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-800 to-green-700 shadow-md">
        <div className="flex items-center justify-between px-4 h-14">
          <button 
            onClick={toggleMobileMenu} 
            className="p-2 text-white hover:bg-green-900 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <h1 className="text-white font-medium text-center flex-1">
            {activeTab === 'overview' ? 'Your Munnar Adventure' : tabs.find(t => t.id === activeTab)?.label}
          </h1>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-full ${activeTab === 'map' ? 'bg-green-900' : 'text-white'}`}
            onClick={() => handleTabChange('map')}
            aria-label="View map"
          >
            <Map size={20} />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Side navigation drawer for mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-gray-900 z-50 pt-16 shadow-xl"
          >
            <div className="flex flex-col h-full overflow-y-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    flex items-center px-6 py-4 text-left transition border-l-4 
                    ${activeTab === tab.id 
                      ? 'border-green-600 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium' 
                      : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }
                  `}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <span className="w-6 mr-3 flex-shrink-0">
                    {tab.icon || (tab.id.startsWith('day') && <span className="font-semibold">{tab.id.replace('day', '')}</span>)}
                  </span>
                  {tab.label}
                </motion.button>
              ))}
              
              <div className="mt-auto p-4 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                <p>© 2025 Munnar Adventures</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop tabs at top */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`
                  relative py-4 px-5 text-sm font-medium transition
                  ${activeTab === tab.id 
                    ? 'text-green-700 dark:text-green-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'
                  }
                `}
                onClick={() => handleTabChange(tab.id)}
              >
                <div className="flex items-center space-x-1.5">
                  {tab.icon && <span>{tab.icon}</span>}
                  <span>{tab.label}</span>
                </div>
                
                {activeTab === tab.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for fixed headers */}
      <div className="h-16 lg:h-14"></div>
    </>
  );
}