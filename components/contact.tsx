"use client";

import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Headphones } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { 
      icon: <Phone size={32} className="text-green-600" />, 
      title: "رقم الهاتف", 
      desc: "00218924173292",
      link: "tel:00218924173292"
    },
    { 
      icon: <Mail size={32} className="text-green-600" />, 
      title: "البريد الإلكتروني", 
      desc: "info@alshifa-pharmacy.ly",
      link: "mailto:info@alshifa-pharmacy.ly"
    },
    { 
      icon: <MapPin size={32} className="text-green-600" />, 
      title: "العنوان", 
      desc: "طرابلس، ليبيا",
      link: "#"
    },
    { 
      icon: <Clock size={32} className="text-green-600" />, 
      title: "ساعات العمل", 
      desc: "24 ساعة / 7 أيام",
      link: "#"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-teal-50 py-24" dir="rtl" id="contact">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-2 rounded-full mb-6">
            <Headphones size={20} className="text-green-600" />
            <span className="text-green-700 font-bold">تواصل معنا</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            نحن هنا <span className="text-green-600">لمساعدتك</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            لا تتردد في التواصل معنا لأي استفسار أو طلب — فريقنا المتخصص جاهز لخدمتكم
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-100 rounded-xl">
                <MessageCircle className="text-green-600" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">أرسل لنا رسالة</h3>
                <p className="text-gray-600">سنرد عليك في أقرب وقت ممكن</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">الاسم الكامل *</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-right"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">رقم الهاتف *</label>
                  <input
                    type="tel"
                    placeholder="أدخل رقم هاتفك"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-right"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني (اختياري)"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-right"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">الرسالة *</label>
                <textarea
                  rows={5}
                  placeholder="اكتب رسالتك أو استفسارك هنا..."
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all resize-none text-right"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Send size={22} />
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all text-center border border-gray-100 hover:border-green-200"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-100 group-hover:scale-110 transition-all">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 font-medium">{item.desc}</p>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[350px] border border-gray-100">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="p-4 bg-white rounded-full shadow-lg inline-block mb-4">
                    <MapPin size={48} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">موقعنا</h3>
                  <p className="text-gray-600 text-lg mb-2">طرابلس، ليبيا</p>
                  <p className="text-gray-500">يمكنك زيارتنا في أي وقت</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
