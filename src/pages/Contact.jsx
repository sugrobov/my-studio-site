import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { generateGradient } from '../utils/imagePlaceholders';

// изображения
// import contactImage1 from '../assets/images/contact1.jpg';
// import contactImage2 from '../assets/images/contact2.jpg';
// import teamImage from '../assets/images/team.jpg';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: '',
    captcha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
    alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      surname: '',
      phone: '',
      email: '',
      message: '',
      captcha: ''
    });
  };

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    return captcha;
  };

  const [captchaText] = useState(generateCaptcha());

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-6">{t('contact')}</h1>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
              <img 
                src={generateGradient(1, "Наш офис")} 
                alt="Наш офис" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          <div>
            <p className="text-gray-700 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={generateGradient(2, "Наш офис")} 
                alt="Рабочий процесс" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Форма обратной связи</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Иван"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {t('surname')}
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Иванов"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="+7 (999) 999-99-99"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  {t('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="input-field resize-none"
                  placeholder="Опишите ваш проект или задайте вопрос..."
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  {t('captcha')}
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="bg-gray-100 p-4 rounded-lg text-center font-mono text-2xl font-bold tracking-widest">
                      {captchaText}
                    </div>
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Введите код с картинки"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg font-semibold"
              >
                {t('send')}
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold mb-4">Контактная информация</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-primary-600 mr-3 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Адрес офиса</h4>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-600 mr-3 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Телефон</h4>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-600 mr-3 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">info@my-studio.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-600 mr-3 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Режим работы</h4>
                  <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  <p className="text-gray-600">Сб-Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={teamImage} 
              alt="Наша команда" 
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold mb-2">Наша команда</h3>
              <p className="text-gray-600">
                Опытные разработчики, дизайнеры и менеджеры проектов готовы воплотить ваши идеи в жизнь.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;