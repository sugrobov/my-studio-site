import React from "react";
import { useTranslation } from "react-i18next";

export default function FeaturesList() {
  const { t } = useTranslation();
  
  const features = t('features.list', { returnObjects: true });
  
  const featureIcons = ["💻", "⚙️", "🌐"];

  return (
    <section className="py-16 bg-linear-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block border border-blue-200 rounded-full text-blue-600 font-medium py-1 px-4 mb-4 title-font">
            {t('homeDub.services.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 title-font">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 body-font">
            {t('features.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                  <span className="text-2xl">{featureIcons[index]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 title-font">
                    {feature}
                  </h3>
                  <p className="text-gray-600 text-sm body-font">
                    {t('homeDub.services.description').split('.')[0]}.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                  <span className="title-font">{t('homeDub.services.learnMore')}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-blue-500/20">
            {t('homeDub.hero.buttonProjects')}
          </button>
        </div>
      </div>
    </section>
  );
}