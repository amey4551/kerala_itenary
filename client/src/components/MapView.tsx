import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { mapLocations } from "@/data/itineraryData";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapLocation {
  id: number;
  name: string;
  coordinates: string;
  isPriority: boolean;
}

interface ViewState {
  longitude: number;
  latitude: number;
  zoom: number;
}

export default function MapView() {
  const [viewState, setViewState] = useState<ViewState>({
    longitude: 77.0643,
    latitude: 10.0889,
    zoom: 10,
  });
  const [selectedMarker, setSelectedMarker] = useState<MapLocation | null>(
    null,
  );
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-green-50 py-16">
      <motion.section
        id="map"
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="font-mont text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Interactive Location Map
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Visualize your journey with this interactive map showing all
            destinations in your Kerala adventure. Plan your route and explore
            the beautiful landscapes of God's Own Country.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          variants={itemVariants}
        >
          <div className="h-[500px] relative">
            {isMapLoaded ? (
              // Simulated map implementation
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-green-500/10">
                  <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Interactive Kerala Map
                    </h3>
                    <p className="mb-4 text-gray-600">
                      This interactive map shows all locations from your Kerala
                      itinerary with custom markers and navigation options.
                    </p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <a
                        href="https://www.google.com/maps/dir/Munnar,+Kerala+685612/ECHO+point+Munnar,+Munnar+-+Top+Station+Hwy,+Kannan+Devan+Hills,+Kerala+685616/Munnar+-+Top+Station+Hwy,+Kerala/Mattupetty+Dam,+Mattupatty+Dam,+Mattupetty,+Kerala+685616/Carmelagiri+Elephant+Park,+Mattuppetty+Road,+Munnar,+Kannan+Devan+Hills,+Kerala+685612/Kolukkumalai+Tea+Estate,+Kolukkumalai,+Suryanelli,+Munnar,+Kerala/@10.1038142,77.064659,13z/data=!3m1!4b1!4m38!4m37!1m5!1m1!1s0x3b0799794d099a6d:0x63250e5553c7e0c!2m2!1d77.0595248!2d10.0889333!1m5!1m1!1s0x3b079d47136096c7:0xae461416829953d0!2m2!1d77.1518198!2d10.1207928!1m5!1m1!1s0x3b0799794bd22d47:0x39d2d2ee247d63fa!2m2!1d77.1504817!2d10.1162558!1m5!1m1!1s0x3b079c1847151239:0xce20307468de30c1!2m2!1d77.1273011!2d10.1055159!1m5!1m1!1s0x3b07995871027a69:0x6b3259a9a64bde45!2m2!1d77.0993156!2d10.0951603!1m5!1m1!1s0x3b07991595475f2f:0x49c216d5fc174052!2m2!1d77.0595247!2d10.0889332!3e0?entry=ttu"
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm"
                        target="_blank"
                      >
                        Day 1 Route
                      </a>
                      <a
                        href="https://www.google.com/maps/dir/Munnar,+Kerala+685612/Kolukkumala+Mountain+Hut/Gap+Road+Munnar/Anayirankal+Dam/Lockhart+Tea+Factory/Government+Botanical+Garden+Munnar/Chokramudi+Peak,+Bison+Valley,+Kerala/@10.010876,77.0393735,10.89z/data=!4m44!4m43!1m5!1m1!1s0x3b0799794d099a6d:0x63250e5553c7e0c!2m2!1d77.0595248!2d10.0889333!1m5!1m1!1s0x3b0775c166c37431:0xdcfcfbc7175ee3e8!2m2!1d77.2214144!2d10.0822045!1m5!1m1!1s0x3b079f0052fdc8e9:0x700929808f1e3264!2m2!1d77.1369597!2d10.0360234!1m5!1m1!1s0x3b07759c0b9ae8ad:0x80faac64184dd9f1!2m2!1d77.2069091!2d10.0093789!1m5!1m1!1s0x3b079ed690be2185:0x4301e70329bb54d3!2m2!1d77.1096725!2d10.0544743!1m5!1m1!1s0x3b0799a662e06203:0xa0c9fff26ab8547a!2m2!1d77.0709315!2d10.0830526!1m5!1m1!1s0x3b0798b54b3cef05:0xf1faaaabaa121bf4!2m2!1d77.1064721!2d10.0364945!3e0"
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm"
                        target="_blank"
                      >
                        Day 2 Route
                      </a>
                    </div>
                  </div>
                </div>
                {/* <img 
                  src="/src/assets/kerala_image7.jpeg" 
                  alt="Kerala Map representation" 
                  className="w-full h-full object-cover" 
                /> */}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full bg-green-50">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">
                    Loading Map
                  </h3>
                  <p className="text-green-700 mb-6">
                    Preparing your interactive Kerala travel map...
                  </p>
                  <div className="w-48 mx-auto">
                    <div className="h-2 bg-green-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-600"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="mb-16 grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
              <span className="w-8 h-8 mr-3 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                1
              </span>
              Day 1 Locations
            </h3>
            <ul className="space-y-4">
              {mapLocations.day1.map((location) => (
                <li key={location.id} className="flex items-start">
                  <div
                    className={`${location.isPriority ? "bg-green-600" : "bg-green-200"} h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5`}
                  >
                    {location.id}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {location.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {location.coordinates}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
              <span className="w-8 h-8 mr-3 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                2
              </span>
              Day 2 Locations
            </h3>
            <ul className="space-y-4">
              {mapLocations.day2.map((location) => (
                <li key={location.id} className="flex items-start">
                  <div
                    className={`${location.isPriority ? "bg-green-600" : "bg-green-200"} h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5`}
                  >
                    {location.id}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {location.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {location.coordinates}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200"
          variants={itemVariants}
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a1 1 0 00.9-.55l4-8a1 1 0 00-.9-1.45H5a1 1 0 00-1 1v1zm1 7v3h1.05a2.5 2.5 0 014.9 0H15V9H4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-800">
              Driving Tips for Kerala
            </h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2 pl-4">
            {/* {drivingTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))} */}
          </ul>
        </motion.div>
      </motion.section>
    </div>
  );
}
