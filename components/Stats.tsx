"use client";

import { Users, Package, Truck, Award, TrendingUp, Heart } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users size={48} className="text-green-600" />,
      number: "+5,000",
      label: "عميل راضٍ",
      description: "يثقون بخدماتنا"
    },
    {
      icon: <Package size={48} className="text-green-600" />,
      number: "+4,000",
      label: "منتج متوفر",
      description: "أدوية ومستحضرات"
    },
    {
      icon: <Truck size={48} className="text-green-600" />,
      number: "+5,000",
      label: "عملية توصيل",
      description: "بنجاح تام"
    },
    {
      icon: <Award size={48} className="text-green-600" />,
      number: "+10",
      label: "سنوات خبرة",
      description: "في الخدمة الصيدلانية"
    }
  ];

  return (
    <div className="relative bg-white py-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-6 py-2 rounded-full mb-4">
            <TrendingUp size={20} className="text-green-600" />
            <span className="text-green-700 font-semibold">إنجازاتنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            أرقام <span className="text-green-600">تتحدث عنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نفخر بثقة عملائنا وإنجازاتنا المتواصلة في خدمة المجتمع
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:border-green-200 hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500 text-center"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-50 rounded-2xl group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                
                {/* Number */}
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {stat.number}
                </h3>
                
                {/* Label */}
                <p className="text-xl font-bold text-gray-800 mb-1">
                  {stat.label}
                </p>
                
                {/* Description */}
                <p className="text-gray-500 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-teal-50 px-8 py-4 rounded-2xl border border-green-100">
            <Heart size={24} className="text-red-500 fill-current animate-pulse" />
            <span className="text-gray-700 font-semibold text-lg">
              نفخر بخدمة أكثر من <span className="text-green-600 font-bold">5000</span> عائلة ليبية
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
