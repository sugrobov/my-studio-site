import React from 'react';
import { useTranslation } from 'react-i18next';

const LearnMoreButton = ({ onClick, href, className = '', children }) => {
  const { t } = useTranslation();
  
  const baseClasses = "inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 title-font text-xs group";
  
  const content = (
    <>
      {children || t('homeDub.services.learnMore')}
      <svg 
        className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M14 5l7 7m0 0l-7 7m7-7H3" 
        />
      </svg>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${className}`}
    >
      {content}
    </button>
  );
};

export default LearnMoreButton;