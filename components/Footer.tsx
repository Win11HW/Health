import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Heart, Shield, Clock } from "lucide-react";

// Social Media Icons
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  const quickLinks = [
    { label: "الرئيسية", href: "#hero" },
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "تواصل معنا", href: "#contact" }
  ];

  const features = [
    { icon: <Clock size={20} />, text: "خدمة 24 ساعة" },
    { icon: <Shield size={20} />, text: "ضمان الجودة" },
    { icon: <Heart size={20} />, text: "رعاية متميزة" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white" dir="rtl">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-2 text-right">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/circle-logo.png"
                alt="صيدلية الشفاء"
                width={80}
                height={80}
                className="rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">صيدلية الشفاء</h3>
                <p className="text-emerald-300 font-medium">شريكك الموثوق في الرعاية الصحية</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg mb-6 max-w-md">
              نلتزم بتقديم أجود الأدوية والمستحضرات الطبية مع خدمة استشارية متميزة 
              على مدار الساعة لضمان صحتكم وراحة بالكم.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-emerald-300">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-xl font-bold mb-6 text-emerald-300">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 text-lg hover:translate-x-2 inline-block cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h4 className="text-xl font-bold mb-6 text-emerald-300">تواصل معنا</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <Phone size={20} className="text-emerald-400" />
                <span className="text-lg">00218924173292</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <Mail size={20} className="text-emerald-400" />
                <span className="text-lg">info@alshifa-pharmacy.ly</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <MapPin size={20} className="text-emerald-400" />
                <span className="text-lg">طرابلس، ليبيا</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4 text-emerald-300">تابعنا على</h5>
              <div className="flex gap-4">
                <Link 
                  href="https://facebook.com" 
                  target="_blank" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 border border-white/20"
                >
                  <FacebookIcon />
                </Link>

                <Link 
                  href="https://instagram.com" 
                  target="_blank" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 border border-white/20"
                >
                  <InstagramIcon />
                </Link>

                <Link 
                  href="https://tiktok.com" 
                  target="_blank" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 border border-white/20"
                >
                  <TikTokIcon />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              &copy; {new Date().getFullYear()} صيدلية الشفاء — جميع الحقوق محفوظة
            </p>
            <p className="text-gray-400 text-center md:text-left text-sm">
              تم التطوير بـ <Heart size={16} className="inline text-emerald-400" /> لخدمة صحتكم
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
