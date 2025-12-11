import Image from 'next/image';
import { Building2, MapPin, Users, Award, Target, Heart, CheckCircle2 } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "مقر رئيسي حديث",
      desc: "في طرابلس - عين زارة مع فرع في زليتن",
      icon: <Building2 size={28} className="text-green-600 flex-shrink-0" />
    },
    {
      title: "تغطية شاملة",
      desc: "مخازن موزعة في مختلف مناطق ليبيا",
      icon: <MapPin size={28} className="text-green-600 flex-shrink-0" />
    },
    {
      title: "كوادر متخصصة",
      desc: "فريق محترف من الصيادلة والخبراء",
      icon: <Users size={28} className="text-green-600 flex-shrink-0" />
    },
    {
      title: "معايير دولية",
      desc: "التزام بأعلى معايير الجودة والممارسات الصيدلانية",
      icon: <Award size={28} className="text-green-600 flex-shrink-0" />
    },
  ];

  const values = [
    {
      title: "رؤيتنا",
      desc: "أن نكون الصيدلية الرائدة في ليبيا في تقديم الرعاية الصحية المتكاملة",
      icon: <Target size={36} className="text-green-600" />
    },
    {
      title: "رسالتنا", 
      desc: "تقديم أجود الأدوية والخدمات الصيدلانية مع الحفاظ على أعلى معايير الجودة والأمان",
      icon: <Heart size={36} className="text-green-600" />
    }
  ];

  const checkList = [
    "أدوية أصلية ومضمونة 100%",
    "فريق صيادلة متخصصين ومؤهلين",
    "خدمة توصيل سريعة وآمنة",
    "استشارات طبية مجانية"
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-teal-50" id="about">
      <div className="py-24">
        <div className="container mx-auto px-6" dir="rtl">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-2 rounded-full mb-6">
              <Heart size={20} className="text-green-600" />
              <span className="text-green-700 font-bold">تعرف علينا</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              نكرس جهودنا <span className="text-green-600">للرعاية الصحية</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نسعى لتقديم أفضل الخدمات الصيدلانية والرعاية الصحية المتكاملة لعملائنا الكرام
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/about.jpg"
                  alt="صيدلية الشفاء"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-xl">
                      <Award size={28} className="text-green-600" />
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-bold text-lg">+10 سنوات</p>
                      <p className="text-gray-600 text-sm">من الخبرة والتميز</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-right">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                لماذا تختار <span className="text-green-600">صيدلية الشفاء؟</span>
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                تأسست صيدلية الشفاء لتكون وجهتك الأولى للحصول على الأدوية والمستحضرات الطبية عالية الجودة. 
                نحن ملتزمون بتقديم أفضل الخدمات الصيدلانية مع الحفاظ على أعلى معايير الجودة والأمان.
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-10">
                {checkList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                تواصل معنا الآن
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-green-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-6 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-white to-green-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-green-100">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
