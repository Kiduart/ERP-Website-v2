import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Platform", href: "/platform" },
];

const DROPDOWNS = {
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help" },
    { label: "Customer Stories", href: "/stories" },
  ],
  "More": [
    { label: "Pricing", href: "/pricing" },
    { label: "Security", href: "/security" },
    { label: "Integrations", href: "/integrations" },
    { label: "KIDUORBIT AI", href: "/kiduorbit" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-beige/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-brand-navy tracking-tight">KIDUART ERP</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location === link.href
                    ? "text-brand-teal bg-white/50"
                    : "text-brand-navy hover:text-brand-teal hover:bg-white/30"
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded-full bg-brand-yellow text-brand-navy text-[10px] font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}

            {/* Dropdowns */}
            {Object.entries(DROPDOWNS).map(([title, items]) => (
              <div
                key={title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-brand-navy hover:text-brand-teal hover:bg-white/30 transition-colors">
                  {title} <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === title ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 glass-panel rounded-xl overflow-hidden py-2"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-beige/50 hover:text-brand-teal transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="hidden md:block text-sm font-bold text-brand-navy hover:text-brand-teal transition-colors"
            >
              Login
            </Link>
            <Link
              href="/demo"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-navy text-white font-semibold text-sm hover:bg-brand-teal shadow-lg hover:shadow-brand-teal/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Request Demo
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-brand-navy hover:bg-white/50 rounded-lg"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-beige overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg bg-brand-beige/30 text-brand-navy font-medium flex items-center justify-between"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="px-1.5 py-0.5 rounded-full bg-brand-yellow text-brand-navy text-[10px] font-bold">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
              
              {Object.entries(DROPDOWNS).map(([title, items]) => (
                <div key={title} className="space-y-2">
                  <h4 className="font-bold text-sm text-brand-teal px-2 uppercase tracking-wider">{title}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 rounded-lg text-brand-navy hover:bg-brand-beige/50 text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-brand-beige/50 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="block w-full text-center px-6 py-3 rounded-xl border-2 border-brand-navy text-brand-navy font-bold"
                >
                  Login
                </Link>
                <Link
                  href="/demo"
                  className="block w-full text-center px-6 py-3 rounded-xl bg-brand-navy text-white font-bold"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
