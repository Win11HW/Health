import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowLeft, Clock, MapPin, Award, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden" id="#">
      <div className="relative w-full h-screen"> 
        {/* Background Image */}
          <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div> {/* optional overlay */}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-gray-900/75 to-emerald-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
        {/* Animated Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-float"></div>
          <div className="floating-element absolute bottom-40 left-20 w-60 h-60 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="floating-element absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Particles */}
          <div className="particles absolute inset-0">
            {[
              { left: '10%', top: '20%', delay: '0s', duration: '2s' },
              { left: '25%', top: '15%', delay: '0.5s', duration: '3s' },
              { left: '40%', top: '30%', delay: '1s', duration: '2.5s' },
              { left: '60%', top: '10%', delay: '1.5s', duration: '3.5s' },
              { left: '75%', top: '25%', delay: '2s', duration: '2s' },
              { left: '90%', top: '35%', delay: '0.3s', duration: '4s' },
              { left: '15%', top: '50%', delay: '1.2s', duration: '2.8s' },
              { left: '35%', top: '60%', delay: '0.8s', duration: '3.2s' },
              { left: '55%', top: '45%', delay: '2.5s', duration: '2.3s' },
              { left: '80%', top: '55%', delay: '0.2s', duration: '3.8s' },
              { left: '20%', top: '70%', delay: '1.8s', duration: '2.7s' },
              { left: '45%', top: '80%', delay: '0.7s', duration: '3.3s' },
              { left: '70%', top: '75%', delay: '2.2s', duration: '2.1s' },
              { left: '85%', top: '85%', delay: '1.3s', duration: '3.7s' },
              { left: '5%', top: '40%', delay: '0.9s', duration: '2.9s' },
              { left: '30%', top: '5%', delay: '2.8s', duration: '2.4s' },
              { left: '50%', top: '90%', delay: '0.4s', duration: '3.6s' },
              { left: '65%', top: '65%', delay: '1.7s', duration: '2.6s' },
              { left: '95%', top: '50%', delay: '2.3s', duration: '3.1s' },
              { left: '12%', top: '85%', delay: '1.1s', duration: '2.2s' }
            ].map((particle, i) => (
              <div
                key={i}
                className="particle absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6 z-10">

          {/* Hero Title */}
          <div className="hero-title-container mb-0">
            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4">
              <span className="hero-gradient-text bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent animate-gradient">
                صحتك أمانة
                في أيدٍ أمينة
              </span>
            </h1>
            
            <div className="hero-line w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Hero Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl max-w-4xl opacity-95 mb-16 font-medium">
            <span className="text-emerald-200 font-bold">صيدلية الشفاء</span> - شريكك الموثوق في الرعاية الصحية المتكاملة.
            <br className="hidden md:block" />
            نقدم أجود الأدوية والمستحضرات الطبية مع خدمة استشارية متميزة على مدار الساعة.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-container flex flex-col sm:flex-row gap-6 mb-20 mt-0">
            <Link 
              href="#contact"
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative flex items-center justify-center gap-4 px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xl rounded-2xl shadow-2xl group-hover:shadow-emerald-500/25 transition-all duration-300">
                <Sparkles size={24} className="animate-pulse" />
                تواصل معنا الآن
                <Phone size={24} />
              </div>
            </Link>

            <Link 
              href="#services"
              className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative flex items-center justify-center gap-4 px-12 py-5 bg-white/15 hover:bg-white/25 border border-white/40 backdrop-blur-2xl text-white font-bold text-xl rounded-2xl shadow-xl">
                استكشف خدماتنا
                <ArrowLeft size={24} />
              </div>
            </Link>
          </div>

          {/* Info Cards */}
          <div className="hero-cards-container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">

            {/* Hours Card */}
            <div className="premium-info-card group relative">
              <div className="card-glow absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl px-10 py-8 rounded-2xl border border-white/30 flex items-center gap-6 hover:bg-white/20 transition-all duration-500 shadow-2xl">
                <div className="icon-container p-4 bg-emerald-500/20 rounded-2xl">
                  <Clock size={36} className="text-emerald-300" />
                </div>
                <div className="text-right">
                  <h3 className="text-2xl font-bold mb-2">ساعات العمل</h3>
                  <p className="text-xl opacity-90 font-medium">24 ساعة / 7 أيام</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="premium-info-card group relative">
              <div className="card-glow absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl px-10 py-8 rounded-2xl border border-white/30 flex items-center gap-6 hover:bg-white/20 transition-all duration-500 shadow-2xl">
                <div className="icon-container p-4 bg-blue-500/20 rounded-2xl">
                  <MapPin size={36} className="text-blue-300" />
                </div>
                <div className="text-right">
                  <h3 className="text-2xl font-bold mb-2">الموقع</h3>
                  <p className="text-xl opacity-90 font-medium">طرابلس، ليبيا</p>
                </div>
              </div>
            </div>

            {/* Quality Card */}
            <div className="premium-info-card group relative">
              <div className="card-glow absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl px-10 py-8 rounded-2xl border border-white/30 flex items-center gap-6 hover:bg-white/20 transition-all duration-500 shadow-2xl">
                <div className="icon-container p-4 bg-yellow-500/20 rounded-2xl">
                  <Award size={36} className="text-yellow-300" />
                </div>
                <div className="text-right">
                  <h3 className="text-2xl font-bold mb-2">ضمان الجودة</h3>
                  <p className="text-xl opacity-90 font-medium">معايير دولية</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center relative">
            <div className="w-1.5 h-4 bg-gradient-to-b from-emerald-300 to-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-white/70 text-sm mt-2 font-medium">اسحب للأسفل</p>
        </div>
      </div>
    </div>
  );
}
