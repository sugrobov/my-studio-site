import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
// import CTASection from '../components/CTASection';

export default function ServicesDub() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('planning');

  // Статические данные для вкладок
  const tabsStaticData = [
    {
      id: 'planning',
      imageClass: 'bg-gradient-to-r from-blue-400 to-cyan-400'
    },
    {
      id: 'investment',
      imageClass: 'bg-gradient-to-r from-green-400 to-emerald-400'
    },
    {
      id: 'consultancy',
      imageClass: 'bg-gradient-to-r from-purple-400 to-pink-400'
    },
    {
      id: 'loans',
      imageClass: 'bg-gradient-to-r from-orange-400 to-red-400'
    }
  ];

  const [callbackForm, setCallbackForm] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCallbackForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.formSubmitted', 'Форма отправлена!'));
    setCallbackForm({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="services-dub">
      {/* Page Header */}
      {/* <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 title-font">
              {t('servicesDub.pageHeader.title')}
            </h1>
            <nav className="text-blue-200 body-font">
              <ol className="flex justify-center space-x-2">
                <li>
                  <Link to="/home" className="hover:text-white transition-colors title-font">
                    {t('servicesDub.pageHeader.home')}
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/home-dub" className="hover:text-white transition-colors title-font">
                    {t('servicesDub.pageHeader.pages')}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium title-font">
                  {t('servicesDub.pageHeader.current')}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div> */}

      {/* Services Hero */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
{/*             <div className="inline-block border border-blue-200 rounded-full text-blue-600 font-medium py-1 px-4 mb-4 title-font">
              {t('servicesDub.hero.badge')}
            </div> */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 title-font">
              {t('servicesDub.hero.title')}
            </h1>
          </div>

          {/* Services Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Column - Tab Buttons */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {tabsStaticData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${activeTab === tab.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-blue-200'
                      }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${activeTab === tab.id ? 'bg-white/20' : 'bg-blue-100'
                        }`}>
                        <span className={`text-lg ${activeTab === tab.id ? 'text-white' : 'text-blue-600'
                          }`}>
                          {tab.id === 'planning' && '📊'}
                          {tab.id === 'investment' && '💰'}
                          {tab.id === 'consultancy' && '💼'}
                          {tab.id === 'loans' && '🏦'}
                        </span>
                      </div>
                      <h3 className="font-medium text-lg title-font">
                        {t(`servicesDub.tabs.${tab.id}.title`)}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Tab Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {tabsStaticData.map((tab) => (
                  <div
                    key={tab.id}
                    className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Image Column */}
                      <div className={`h-64 md:h-auto ${tab.imageClass} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="text-8xl mb-4 opacity-80">
                              {tab.id === 'planning' && '📈'}
                              {tab.id === 'investment' && '💹'}
                              {tab.id === 'consultancy' && '👨‍💼'}
                              {tab.id === 'loans' && '💳'}
                            </div>
                            <h3 className="text-2xl font-bold text-white title-font">
                              {t(`servicesDub.tabs.${tab.id}.title`)}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 title-font">
                          {t(`servicesDub.tabs.${tab.id}.contentTitle`)}
                        </h2>
                        <p className="text-gray-600 mb-6 body-font">
                          {t(`servicesDub.tabs.${tab.id}.description`)}
                        </p>

                        <div className="space-y-3 mb-6">
                          {t(`servicesDub.tabs.${tab.id}.features`, { returnObjects: true }).map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="text-green-600">✓</span>
                              </div>
                              <span className="text-gray-700 body-font">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center">
                          {t(`servicesDub.tabs.${tab.id}.button`)}
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Callback Section */}
      <div className="py-16 bg-linear-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="text-center mb-8">
{/*                 <div className="inline-block border border-blue-200 rounded-full text-blue-600 font-medium py-1 px-4 mb-4 title-font">
                  {t('servicesDub.callback.badge')}
                </div> */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 title-font">
                  {t('servicesDub.callback.title')}
                </h2>
              </div>

              <form onSubmit={handleCallbackSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 title-font">
                      {t('servicesDub.callback.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={callbackForm.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 title-font">
                      {t('servicesDub.callback.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={callbackForm.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-gray-700 mb-2 title-font">
                      {t('servicesDub.callback.form.mobile')}
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={callbackForm.mobile}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2 title-font">
                      {t('servicesDub.callback.form.subject')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={callbackForm.subject}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 title-font">
                    {t('servicesDub.callback.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={callbackForm.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {t('servicesDub.callback.form.button')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}