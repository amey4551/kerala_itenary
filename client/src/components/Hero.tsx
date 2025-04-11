import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative text-white">
      {/* Background image with overlay for Kerala-themed lush green tea plantations */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url(${"https://indiatrotter.com/wp-content/uploads/2020/12/27.png"})`,
          filter: "brightness(0.75)"
        }}
      ></div>
      
      {/* Gradient overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent z-0"></div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <motion.div 
            className="w-full lg:w-3/5 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg inline-block mb-6">
              <h1 className="font-mont font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-wide">
                <span className="relative inline-block">
                  Kerala
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></span>
                </span>{" "}
                Travel Itinerary
              </h1>
              <div className="flex items-center justify-center lg:justify-start mt-2">
                <span className="bg-yellow-500 h-1 w-12 mr-2"></span>
                <span className="text-yellow-400 font-medium">God's Own Country</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0 mb-10 drop-shadow-md bg-black/20 p-4 rounded-lg backdrop-blur-sm">
              Explore the stunning landscapes, lush forests, pristine beaches, and vibrant culture of Kerala with our custom adventure plans. Currently featuring Munnar's breathtaking highlands, with more destinations coming soon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                className="px-8 py-4 rounded-lg bg-green-700 hover:bg-green-800 text-white font-medium transition shadow-lg border border-green-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('nav-tabs')?.querySelector('[data-tab="overview"]')?.dispatchEvent(
                    new MouseEvent('click', { bubbles: true })
                  );
                  window.scrollTo({
                    top: document.querySelector('.content-container')?.getBoundingClientRect().top || 0,
                    behavior: 'smooth'
                  });
                }}
              >
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  View Itinerary
                </div>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 rounded-lg bg-white text-green-800 hover:bg-green-50 font-medium transition shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('nav-tabs')?.querySelector('[data-tab="map"]')?.dispatchEvent(
                    new MouseEvent('click', { bubbles: true })
                  );
                }}
              >
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Interactive Map
                </div>
              </motion.button>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center bg-black/30 rounded-full px-4 py-2 backdrop-blur-sm border border-green-500/30">
                <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">2-Day Trip</span>
              </div>
              
              <div className="flex items-center bg-black/30 rounded-full px-4 py-2 backdrop-blur-sm border border-green-500/30">
                <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">12+ Locations</span>
              </div>
              
              <div className="flex items-center bg-black/30 rounded-full px-4 py-2 backdrop-blur-sm border border-green-500/30">
                <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">Guided Itinerary</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right side decorative elements */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Traditional Kerala boat illustration */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-green-500/30 w-80 h-80 flex flex-col justify-center items-center">
                <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 15C2 13.8954 2.89543 13 4 13H20C21.1046 13 22 13.8954 22 15V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15V15Z" fill="currentColor"/>
                    <path d="M6 13H13H18L14 7H9L6 13Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 13L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 13L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">Explore Kerala</h3>
                <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
                <p className="text-white text-center">Experience the allure of God's Own Country through its backwaters, beaches, hill stations, and traditional Kerala hospitality.</p>
                <div className="mt-6 flex space-x-2">
                  <span className="bg-yellow-500 h-2 w-2 rounded-full"></span>
                  <span className="bg-white h-2 w-2 rounded-full"></span>
                  <span className="bg-green-500 h-2 w-2 rounded-full"></span>
                </div>
              </div>
            </div>
          </motion.div>

         
        </div>
      </div>
      
      {/* Leaf-shaped divider */}
      {/* <div className="h-16 w-full bg-white relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 370" className="absolute -top-1 left-0 w-[100] h-16 text-white fill-current">
          <path d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,160C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
  );
}
