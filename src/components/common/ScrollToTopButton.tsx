import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, opacity: 0.9, backgroundColor: '#004a6e' }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all"
          style={{ backgroundColor: '#003049', color: '#fcf6d3', boxShadow: '0 4px 12px rgba(0,48,73,0.25)' }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" color="#fcf6d3" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
