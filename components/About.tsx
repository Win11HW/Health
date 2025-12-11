import Image from 'next/image';
import { Building2, MapPin, Users, Award, Target, Heart } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "مقر رئيسي حديث",
      desc: "في طرابلس - عين زارة مع فرع في زليتن",
      icon: <Building2 size={28} className="text-emerald-600 flex-shrink-0" />
    },
    {
      title: "تغطية شاملة",
      desc: "مخازن موزعة في مختلف مناطق ليبيا",
      icon: <MapPin size={28} className="text-emerald-600 flex-shrink-0" />
    },
    {
      title: "كوادر متخصصة",
      desc: "فريق محترف من الصيادلة والخبراء",
      icon: <Users size={28} className="text-emerald-600 flex-shrink-0" />
    },
    {
      title: "معايير دولية",
      desc: "التزام بأعلى معايير الجودة والممارسات الصيدلانية",
      icon: <Award size={28} className="text-emerald-600 flex-shrink-0" />
    },
  ];

  const values = [
    {
      title: "رؤيتنا",
      desc: "أن نكون الصيدلية الرائدة في ليبيا في تقديم الرعاية الصحية المتكاملة",
      icon: <Target size={32} className="text-emerald-600" />
    },
    {
      title: "رسالتنا", 
      desc: "تقديم أجود الأدوية والخدمات الصيدلانية مع الحفاظ على أعلى معايير الجودة والأمان",
      icon: <Heart size={32} className="text-emerald-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30" id="About">
      <div className="py-20">
        <div className="container mx-auto px-6" dir="rtl">
          
          {/* Premium Section Header */}
          <div className="text-center mb-20 premium-section-header">
            <div className="inline-flex items-center gap-3 bg-emerald-50 px-6 py-2 rounded-full mb-6">
              <Heart size={20} className="text-emerald-600" />
              <span className="text-emerald-700 font-semibold">تعرف علينا</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-emerald-600 mb-6 gradient-text">من نحن</h2>
            <div className="premium-divider w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              نكرس جهودنا لتقديم أفضل الخدمات الصيدلانية والرعاية الصحية المتكاملة
              <br />
              <span className="text-emerald-600 font-bold">بأعلى معايير الجودة والمهنية</span>
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Image Section */}
            <div className="order-2 lg:order-1 slide-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur opacity-20"></div>
                <Image
                  src="/about.jpg"
                  alt="صيدلية الشفاء"
                  width={600}
                  height={450}
                  className="relative rounded-2xl object-cover shadow-2xl hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 text-right slide-up">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                شريكك الموثوق في 
                <span className="text-emerald-600"> الرعاية الصحية</span>
              </h1>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  تأسست صيدلية الشفاء لتكون وجهتك الأولى للحصول على الأدوية والمستحضرات الطبية عالية الجودة. 
                  نحن ملتزمون بتقديم أفضل الخدمات الصيدلانية مع الحفاظ على أعلى معايير الجودة والأمان.
                </p>
                <p>
                  يعمل فريقنا من الصيادلة المؤهلين على مدار الساعة لضمان حصولكم على الاستشارات الطبية المناسبة 
                  والأدوية الصحيحة في الوقت المناسب، مع التزامنا الكامل بسلامة وصحة عملائنا الكرام.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="card bg-white p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div className="text-right flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 slide-up">
            {values.map((value, idx) => (
              <div key={idx} className="card bg-white p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
