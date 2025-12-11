"use client";

import { Pill, Stethoscope, Truck, Clock, ShieldCheck, Activity, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "الأدوية والمستحضرات",
      desc: "توفير كافة الأدوية والمستحضرات الطبية الأصلية من أفضل الشركات العالمية والمحلية",
      icon: <Pill size={36} className="text-white" />,
      bgColor: "from-green-500 to-green-600"
    },
    {
      title: "الاستشارات الصيدلانية",
      desc: "فريق من الصيادلة المتخصصين جاهز لتقديم الاستشارات والنصائح الطبية المجانية",
      icon: <Stethoscope size={36} className="text-white" />,
      bgColor: "from-teal-500 to-teal-600"
    },
    {
      title: "خدمة التوصيل",
      desc: "توصيل الأدوية والمستحضرات الطبية إلى باب منزلك بسرعة وأمان",
      icon: <Truck size={36} className="text-white" />,
      bgColor: "from-emerald-500 to-emerald-600"
    },
    {
      title: "خدمة 24 ساعة",
      desc: "نحن في خدمتكم على مدار الساعة لتلبية احتياجاتكم الصحية الطارئة",
      icon: <Clock size={36} className="text-white" />,
      bgColor: "from-cyan-500 to-cyan-600"
    },
    {
      title: "ضمان الجودة",
      desc: "نضمن لكم جودة وأصالة جميع المنتجات مع الالتزام بمعايير السلامة الدوائية",
      icon: <ShieldCheck size={36} className="text-white" />,
      bgColor: "from-green-600 to-green-700"
    },
    {
      title: "قياس الضغط والسكر",
      desc: "خدمة قياس ضغط الدم ومستوى السكر مجاناً في الصيدلية",
      icon: <Activity size={36} className="text-white" />,
      bgColor: "from-teal-600 to-teal-700"
    },
  ];

  return (
    <div className="bg-white py-24" id="services" dir="rtl">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-2 rounded-full mb-6">
            <Sparkles size={20} className="text-green-600" />
            <span className="text-green-700 font-bold">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            خدمات <span className="text-green-600">صيدلانية متكاملة</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الصيدلانية المتطورة لتلبية جميع احتياجاتكم الصحية
          </p>
        </div>

        {/* Services Grid - Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${service.bgColor} p-10 h-full flex flex-col items-center text-center text-white relative`}>
                {/* Decorative Circle */}
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-8 p-5 bg-white/20 rounded-2xl group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="relative z-10 text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="relative z-10 text-white/90 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-12 border border-green-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              هل تحتاج إلى مساعدة؟
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              فريقنا المتخصص جاهز لمساعدتك على مدار الساعة. لا تتردد في التواصل معنا!
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              تواصل معنا الآن
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
