import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import Routing from "./Routing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CustomCursor from "./components/CustomCursor";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  
  // Handler to be passed to About to notify when image is loaded
  const handleImageLoaded = () => {
    setFadeOut(true);
    setTimeout(() => setLoading(false), 600);
  };

  // Auto hide loading after 2.5 seconds as fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      handleImageLoaded();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <CustomCursor />
        
        {/* Simple Loading Screen */}
        {loading && (
          <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-600 ease-out ${
              fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Simple Spinner */}
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              
              {/* Loading Text */}
              <span className="text-white/80 text-sm font-medium tracking-wider">
                Loading...
              </span>
            </div>
          </div>
        )}

        {/* Main content with smooth entrance */}
        <div 
          className={`flex flex-col gap-2 transition-all duration-700 ease-out ${
            loading 
              ? 'pointer-events-none select-none opacity-0' 
              : 'opacity-100'
          }`}
        >
          <Navbar />
          <Routing handleImageLoaded={handleImageLoaded} />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;