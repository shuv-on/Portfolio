// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-scroll"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Scroll Background Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark Mode Logic
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
         <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="group flex items-center gap-0.5 text-2xl font-bold font-mono tracking-tighter cursor-pointer"
          >
            {/* Opening Bracket (<) - Now with Gradient */}
            <span className="text-gradient-animate transition-transform duration-300 group-hover:-translate-x-1 group-hover:rotate-12 font-extrabold">
              &lt;
            </span>
            
            {/* Name (Shuvon) - Gradient */}
            <span className="text-gradient-animate font-extrabold mx-0.5">
              Shuvon
            </span>
            
            {/* Closing Bracket (/>) - Now with Gradient */}
            <span className="text-gradient-animate transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12 font-extrabold">
              /&gt;
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active-nav" // This triggers the CSS class from index.css
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all cursor-pointer rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="ml-4 p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-gray-700 hover:text-sky-600 transition-all duration-300 shadow-sm"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-sky-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // Mobile Active Style (Slightly different for visibility)
                  activeClass="bg-sky-50 dark:bg-gray-800 text-sky-600 dark:text-sky-400 border-l-4 border-sky-600"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-r-lg transition-all pl-4 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;