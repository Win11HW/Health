"use client";

import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { 
      icon: <Phone size={32} className="text-emerald-600" />, 
      title: "اتصل بنا", 
      desc: "00218924173292",
      gradient: "from-emerald-500 to-teal-600"
    },
    { 
      icon: <Mail size={32} className="text-emerald-600" />, 
      title: "البريد الإلكتروني", 
      desc: "info@alshifa-pharmacy.ly",
      gradient: "from-blue-500 to-emerald-600"
    },
    { 
      icon: <MapPin size={32} className="text-emerald-600" />, 
      title: "العنوان", 
      desc: "طرابلس، ليبيا",
      gradient: "from-purple-500 to-emerald-600"
    },
    { 
      icon: <Clock size={32} className="text-emerald-600" />, 
      title: "ساعات العمل", 
      desc: "24 ساعة / 7 أيام",
      gradient: "from-orange-500 to-emerald-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 py-20" dir="rtl" id="contact">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">تواصل معنا</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-6"></div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            نحن هنا لمساعدتك
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            لا تتردد في التواصل معنا لأي استفسار أو طلب — فريقنا المتخصص جاهز لخدمتكم على مدار الساعة بأعلى مستويات الاحترافية.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Information */}
          <div className="order-2 lg:order-1 slide-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <MessageCircle className="text-emerald-600" size={28} />
                معلومات التواصل
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                تواصل معنا عبر أي من الطرق التالية وسنكون سعداء لمساعدتك
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="card bg-white p-8 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:opacity-5`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-2xl mb-4 group-hover:bg-emerald-100 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="card bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-8 mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">لماذا تختار صيدلية الشفاء؟</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  استشارات مجانية من صيادلة مؤهلين
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  توصيل سريع وآمن لجميع أنحاء المدينة
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  ضمان جودة وأصالة جميع المنتجات
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  خدمة عملاء متميزة على مدار الساعة
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2 slide-up">
            <div className="card bg-white p-10 hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">أرسل لنا رسالة</h3>
                <p className="text-gray-600">سنرد عليك في أقرب وقت ممكن</p>
              </div>

              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">الاسم الكامل *</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">رقم الهاتف *</label>
                  <input
                    type="tel"
                    placeholder="أدخل رقم هاتفك"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني (اختياري)"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">الرسالة *</label>
                  <textarea
                    rows={5}
                    placeholder="اكتب رسالتك أو استفسارك هنا..."
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300"
                >
                  <Send size={22} />
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
