import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CTASection({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink,
  variant = 'default'
}) {
  const { t } = useTranslation();

  // Default values for the CTA section
  const defaultTitle = t('homeDub.cta.title', 'Готовы начать проект?');
  const defaultDescription = t('homeDub.cta.description', 'Свяжитесь с нами для обсуждения ваших идей и получения профессиональной консультации');
  const defaultPrimaryButtonText = t('homeDub.cta.contact', 'Связаться с нами');
  const defaultPrimaryButtonLink = '/about-dub';
  const defaultSecondaryButtonText = t('homeDub.cta.portfolio', 'Посмотреть портфолио');
  const defaultSecondaryButtonLink = '/projects';

  // Use provided props or fall back to defaults
  const ctaTitle = title || defaultTitle;
  const ctaDescription = description || defaultDescription;
  const primaryText = primaryButtonText || defaultPrimaryButtonText;
  const primaryLink = primaryButtonLink || defaultPrimaryButtonLink;
  const secondaryText = secondaryButtonText || defaultSecondaryButtonText;
  const secondaryLink = secondaryButtonLink || defaultSecondaryButtonLink;

  // Разные варианты дизайна в зависимости от variant
  const variants = {
    default: {
      bg: 'bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600',
      titleColor: 'text-white',
      descriptionColor: 'text-white/90',
      primaryButton: 'bg-white text-cyan-700 hover:bg-gray-50 shadow-lg',
      secondaryButton: 'bg-transparent border-2 border-white text-white hover:bg-white/10'
    },
    light: {
      bg: 'bg-gradient-to-r from-gray-50 via-blue-50 to-cyan-50',
      titleColor: 'text-gray-900',
      descriptionColor: 'text-gray-700',
      primaryButton: 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 shadow-lg shadow-blue-500/30',
      secondaryButton: 'bg-transparent border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50'
    },
    gradient: {
      bg: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500',
      titleColor: 'text-white',
      descriptionColor: 'text-white/90',
      primaryButton: 'bg-white text-blue-700 hover:bg-gray-50 shadow-xl',
      secondaryButton: 'bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20'
    },
    orange: {
      bg: 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500',
      titleColor: 'text-white',
      descriptionColor: 'text-white/90',
      primaryButton: 'bg-white text-orange-700 hover:bg-gray-50 shadow-xl',
      secondaryButton: 'bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20'
    }
  };

  const variantStyles = variants[variant] || variants.default;

  return (
    <section className={`py-16 ${variantStyles.bg} relative overflow-hidden`}>
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h3 className={`text-3xl md:text-4xl font-bold mb-6 title-font ${variantStyles.titleColor}`}>
            {ctaTitle}
          </h3>
          
          {ctaDescription && (
            <p className={`text-xl mb-8 max-w-2xl mx-auto body-font ${variantStyles.descriptionColor}`}>
              {ctaDescription}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={primaryLink}
              className={`font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${variantStyles.primaryButton} title-font w-full sm:w-auto`}
            >
              {primaryText}
              <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to={secondaryLink}
              className={`font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 ${variantStyles.secondaryButton} title-font w-full sm:w-auto`}
            >
              {secondaryText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}