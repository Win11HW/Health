"use client";

import { Pill, Stethoscope, Truck, Clock, ShieldCheck, Activity } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "الأدوية والمستحضرات",
      desc: "توفير كافة الأدوية والمستحضرات الطبية الأصلية من أفضل الشركات العالمية والمحلية",
      icon: <Pill size={32} className="text-emerald-600" />,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "الاستشارات الصيدلانية",
      desc: "فريق من الصيادلة المتخصصين جاهز لتقديم الاستشارات والنصائح الطبية المجانية",
      icon: <Stethoscope size={32} className="text-emerald-600" />,
      gradient: "from-blue-500 to-emerald-600"
    },
    {
      title: "خدمة التوصيل",
      desc: "توصيل الأدوية والمستحضرات الطبية إلى باب منزلك بسرعة وأمان",
      icon: <Truck size={32} className="text-emerald-600" />,
      gradient: "from-purple-500 to-emerald-600"
    },
    {
      title: "خدمة 24 ساعة",
      desc: "نحن في خدمتكم على مدار الساعة لتلبية احتياجاتكم الصحية الطارئة",
      icon: <Clock size={32} className="text-emerald-600" />,
      gradient: "from-orange-500 to-emerald-600"
    },
    {
      title: "ضمان الجودة",
      desc: "نضمن لكم جودة وأصالة جميع المنتجات مع الالتزام بمعايير السلامة الدوائية",
      icon: <ShieldCheck size={32} className="text-emerald-600" />,
      gradient: "from-red-500 to-emerald-600"
    },
    {
      title: "قياس الضغط والسكر",
      desc: "خدمة قياس ضغط الدم ومستوى السكر مجاناً في الصيدلية",
      icon: <Activity size={32} className="text-emerald-600" />,
      gradient: "from-pink-500 to-emerald-600"
    },
  ];

  const stats = [
    { number: "8+", label: "سنوات من الخبرة", icon: "🏆" },
    { number: "1000+", label: "عميل راضٍ", icon: "😊" },
    { number: "15+", label: "مدينة نخدمها", icon: "🏙️" },
    { number: "100%", label: "التزام بالجودة", icon: "✅" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 py-20" id="services" dir="rtl">
      <div className="container mx-auto px-6 text-right">

        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">خدماتنا</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-6"></div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            خدمات صيدلانية متكاملة
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الصيدلانية المتطورة لتلبية جميع احتياجاتكم الصحية بأعلى معايير الجودة والمهنية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 slide-up">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-white p-8 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:opacity-5`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-2xl mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Excellence Section */}
        <div className="card bg-white p-12 mb-16 slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-6">التزامنا بالتميز</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                نسعى باستمرار إلى سد النقص في احتياجات السوق المحلي من الأدوية الحيوية، 
                من خلال شراكات استراتيجية مع كبرى الشركات العالمية المصنعة للمنتجات الصيدلانية والمعدات الطبية.
              </p>
              <p>
                بفضل كوادرنا المتخصصة وبنيتنا التحتية الحديثة، نلعب دورًا فاعلًا في تعزيز الأمن الدوائي الوطني 
                وضمان استمرارية الإمدادات الطبية بكفاءة وموثوقية عالية.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="card bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-gray-700 font-semibold text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
