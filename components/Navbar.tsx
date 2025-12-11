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
    { label: 'الرئيسية', href: '#hero' },
    { label: 'من نحن', href: '#about' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo on Right */}
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
              <a
                key={item.label}
                href={item.href}
                className={`font-bold text-lg transition-all duration-200 hover:text-green-600 cursor-pointer ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-xl'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button on Left */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
          >
            <Sparkles size={18} className="animate-pulse text-yellow-300" />
            <span className="relative z-10">اتصل بنا الآن</span>
            <Phone size={18} className="text-white" />
            <span className="absolute inset-0 rounded-xl bg-green-400 opacity-10 hover:opacity-20 transition-opacity duration-300" />
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
              className="relative flex items-center justify-center gap-3 w-full py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
            >
              <Sparkles size={18} className="animate-pulse text-yellow-300" />
              <span className="relative z-10">اتصل بنا الآن</span>
              <Phone size={18} className="text-white" />
              <span className="absolute inset-0 rounded-xl bg-green-400 opacity-10 hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
