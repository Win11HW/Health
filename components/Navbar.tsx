'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { label: 'الرئيسية', href: '#' },
    { label: 'من نحن', href: '#About' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

      <div>
          <Link href="/" className="relative group">
            <Image
              src="/circle-logo.png"
              alt="صيدلية الشفاء"
              width={80}
              height={80}
              className="rounded-full object-cover transition-transform duration-500 group-hover:scale-110 shadow-2xl"
            />
          </Link>
        </div>

        {/* Navigation Center */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex flex-row gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-bold text-lg transition-all duration-200 hover:text-green-600 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-xl'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition-all"
          >
            <Sparkles size={18} className="animate-pulse" />
            اتصل بنا الآن
            <Phone size={18} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-800 bg-gray-100/50' : 'text-white bg-white/10'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-white/95 backdrop-blur-lg' : 'bg-gray-900/95 backdrop-blur-lg'}`}>
          <div className="flex flex-col items-start gap-6 p-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="w-full text-right py-3 px-4 font-bold text-xl hover:bg-green-100 rounded-lg transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition"
            >
              <Sparkles size={18} className="animate-pulse" />
              اتصل بنا الآن
              <Phone size={18} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
