import Image from 'next/image';
import { Phone, Clock, MapPin, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen" id="hero">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="صيدلية الشفاء - الرعاية الصحية المتميزة"
          fill
          priority
          className="object-cover"
        />
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-green-900/70 to-emerald-800/90"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-bold">موثوق من +1000 عميل</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-white mb-12">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              صحتك أمانة
            </h1>
            <h2 className="text-4xl md:text-6xl font-black text-green-300 mb-8">
              في أيد أمينة
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
              صيدلية الشفاء - شريكك الموثوق في الرعاية الصحية المتكاملة
              <br className="hidden md:block" />
              نقدم لكم أجود الأدوية والمستحضرات الطبية مع خدمة استشارية متميزة على مدار الساعة
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a 
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl hover:shadow-green-500/25 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Phone size={24} />
              تواصل معنا الآن
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </a>
            
            <a 
              href="#services"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border-2 border-white/40 hover:border-white/60 px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
            >
              استكشف خدماتنا
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Hours Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <Clock size={32} className="text-green-300" />
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">خدمة 24 ساعة</h3>
                    <p className="text-white/80 text-sm">نحن في خدمتكم دائماً</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <MapPin size={32} className="text-blue-300" />
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">توصيل سريع</h3>
                    <p className="text-white/80 text-sm">لجميع أنحاء المدينة</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quality Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-green-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <ShieldCheck size={32} className="text-yellow-300" />
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">ضمان الجودة</h3>
                    <p className="text-white/80 text-sm">منتجات أصلية 100%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}