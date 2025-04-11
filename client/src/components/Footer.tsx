import { motion } from 'framer-motion';

interface FooterProps {
  onExportPDF: () => void;
}

export default function Footer({ onExportPDF }: FooterProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="bg-green-900 text-white mt-12 border-t-4 border-green-600">
      {/* Kerala-themed footer */}
      
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-green-900 font-bold text-xl mr-3">
                K
              </div>
              <h3 className="font-mont text-xl font-bold">Kerala Explorer</h3>
            </div>
            <p className="text-green-200 mb-6 max-w-md">
              Your perfect companion for exploring the stunning landscapes, tea plantations, and natural beauty of Munnar with customized itineraries through Kerala's God's Own Country.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-mont font-semibold text-lg mb-4 border-b border-green-800 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition">Itineraries</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition">Destinations</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition">Travel Guide</a></li>
            </ul>
          </div>
          
          {/* Export actions */}
          <div>
            <h4 className="font-mont font-semibold text-lg mb-4 border-b border-green-800 pb-2">Export Options</h4>
            <div className="space-y-3">
              {/* <motion.button 
                id="export-pdf-footer" 
                className="inline-flex items-center w-full px-4 py-2 rounded-lg bg-green-700 hover:bg-green-600 text-white text-sm font-medium transition border border-green-500"
                onClick={onExportPDF}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                Export as PDF
              </motion.button> */}
              <motion.button 
                id="print-itinerary" 
                className="inline-flex items-center w-full px-4 py-2 rounded-lg bg-green-700 hover:bg-green-600 text-white text-sm font-medium transition border border-green-500"
                onClick={handlePrint}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                </svg>
                Print Itinerary
              </motion.button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-10 pt-6 text-center text-green-300 text-sm">
          <p>© 2025 Kerala Explorer - God's Own Country. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
