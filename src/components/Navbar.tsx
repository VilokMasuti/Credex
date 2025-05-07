
import { useState, useEffect } from 'react';

import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

// Navigation links for the application
const navigationLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  // State to manage mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className={`transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-r from-softsell-700 to-softsell-500 bg-clip-text text-transparent'
                : 'text-white drop-shadow-md'
            }`}>
              SoftSell
            </span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-softsell-500 relative group ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-softsell-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Contact button for desktop */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className={`transition-all duration-300 ${
              scrolled
                ? 'bg-softsell-600 hover:bg-softsell-700 text-white'
                : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white'
            }`}
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className={scrolled ? 'text-gray-800' : 'text-white'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium py-2 px-3 hover:bg-softsell-50 rounded-md text-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-softsell-600 hover:bg-softsell-700 transition-colors w-full"
              asChild
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
