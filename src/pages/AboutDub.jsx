import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';

export default function AboutDub() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('story');

  // Данные для табов
  const tabContent = {
    story: {
      title: t('aboutDub.tabs.story.title', 'История'),
      content: t('aboutDub.tabs.story.content', 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit')
    },
    mission: {
      title: t('aboutDub.tabs.mission.title', 'Миссия'),
      content: t('aboutDub.tabs.mission.content', 'Наша миссия — предоставлять качественные IT-решения, которые помогают бизнесу расти и развиваться. Мы стремимся к инновациям и постоянному совершенствованию.')
    },
    vision: {
      title: t('aboutDub.tabs.vision.title', 'Видение'),
      content: t('aboutDub.tabs.vision.content', 'Мы видим будущее, где технологии делают бизнес эффективнее, а наши решения помогают компаниям достигать новых высот в цифровой трансформации.')
    }
  };

  // Данные для преимуществ
  const benefitsData = [
    {
      id: 1,
      // icon: 'fa-times',
      title: t('aboutDub.benefits.noHiddenCost.title', 'Без скрытых платежей'),
      description: t('aboutDub.benefits.noHiddenCost.description', 'Прозрачное ценообразование без дополнительных сборов')
    },
    {
      id: 2,
      // icon: 'fa-users',
      title: t('aboutDub.benefits.dedicatedTeam.title', 'Профессиональная команда'),
      description: t('aboutDub.benefits.dedicatedTeam.description', 'Опытные специалисты с глубокими знаниями')
    },
    {
      id: 3,
      // icon: 'fa-phone',
      title: t('aboutDub.benefits.support24.title', 'Поддержка 24/7'),
      description: t('aboutDub.benefits.support24.description', 'Всегда на связи для решения любых вопросов')
    }
  ];

  // Данные для статистики
  const statsData = [
    {
      id: 1,
      icon: 'fa-users',
      value: '50+',
      label: t('aboutDub.stats.happyClients', 'Довольных клиентов')
    },
    {
      id: 2,
      icon: 'fa-check',
      value: '100+',
      label: t('aboutDub.stats.projectsCompleted', 'Завершенных проектов')
    },
    {
      id: 3,
      icon: 'fa-users-cog',
      value: '15+',
      label: t('aboutDub.stats.dedicatedStaff', 'Специалистов в команде')
    },
    {
      id: 4,
      icon: 'fa-award',
      value: '25+',
      label: t('aboutDub.stats.awardsAchieved', 'Полученных наград')
    }
  ];

  // Данные для команды
  const teamData = [
    {
      id: 1,
      image: '👨‍💻',
      name: t('aboutDub.team.alex.title', 'Александр Петров'),
      position: t('aboutDub.team.alex.position', 'CEO & Основатель'),
      social: ['facebook', 'twitter', 'linkedin']
    },
    {
      id: 2,
      image: '👩‍💼',
      name: t('aboutDub.team.maria.title', 'Мария Иванова'),
      position: t('aboutDub.team.maria.position', 'CTO & Технический директор'),
      social: ['facebook', 'twitter', 'instagram']
    },
    {
      id: 3,
      image: '👨‍🎨',
      name: t('aboutDub.team.dmitry.title', 'Дмитрий Сидоров'),
      position: t('aboutDub.team.dmitry.position', 'Lead Designer'),
      social: ['facebook', 'twitter', 'dribbble']
    }
  ];

  return (
    <div className="about-dub">
      {/* Page Header */}
{/*       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 title-font">
              {t('aboutDub.pageHeader.title', 'О нас')}
            </h1>
            <nav className="text-blue-200 body-font">
              <ol className="flex justify-center space-x-2">
                <li>
                  <Link to="/home" className="hover:text-white transition-colors title-font">
                    {t('aboutDub.pageHeader.home', 'Главная')}
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/home-dub" className="hover:text-white transition-colors title-font">
                    {t('aboutDub.pageHeader.pages', 'Страницы')}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium title-font">
                  {t('aboutDub.pageHeader.current', 'О нас')}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div> */}

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Column - Image */}
            <div className="wow fadeInUp">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-8xl mb-6">💻</div>
                    <h3 className="text-3xl font-bold text-white">RS-SOFT</h3>
                    <p className="text-blue-100 mt-2">IT Solutions</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="wow fadeInUp">
              {/* <div className="inline-block border border-blue-200 rounded-full text-blue-600 font-medium py-1 px-4 mb-4 title-font">
                {t('aboutDub.about.badge', 'О компании')}
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 title-font">
                {t('aboutDub.about.title', 'Мы помогаем нашим клиентам развивать бизнес')}
              </h2>
              <p className="text-gray-600 mb-8 text-lg body-font">
                {t('aboutDub.about.description', 'Мы — команда профессионалов, создающая современные IT-решения для бизнеса. Наша цель — превращать идеи в реальность с помощью качественного кода и инновационных технологий.')}
              </p>

              {/* Tabs */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex flex-wrap border-b border-gray-200 mb-6">
                  <button
                    onClick={() => setActiveTab('story')}
                    className={`px-6 py-3 font-medium text-lg transition-colors title-font ${activeTab === 'story'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {tabContent.story.title}
                  </button>
                  <button
                    onClick={() => setActiveTab('mission')}
                    className={`px-6 py-3 font-medium text-lg transition-colors title-font ${activeTab === 'mission'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {tabContent.mission.title}
                  </button>
                  <button
                    onClick={() => setActiveTab('vision')}
                    className={`px-6 py-3 font-medium text-lg transition-colors title-font ${activeTab === 'vision'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {tabContent.vision.title}
                  </button>
                </div>

                <div className="tab-content">
                  <div className={`${activeTab === 'story' ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 body-font">{tabContent.story.content}</p>
                  </div>
                  <div className={`${activeTab === 'mission' ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 body-font">{tabContent.mission.content}</p>
                  </div>
                  <div className={`${activeTab === 'vision' ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 body-font">{tabContent.vision.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitsData.map((benefit) => (
                <div key={benefit.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">
                      {benefit.id === 1 && '✓'}
                      {benefit.id === 2 && '👥'}
                      {benefit.id === 3 && '📞'}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 title-font">{benefit.title}</h4>
                    <p className="text-gray-600 body-font">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">
                    {stat.id === 1 && '👥'}
                    {stat.id === 2 && '✅'}
                    {stat.id === 3 && '👨‍💻'}
                    {stat.id === 4 && '🏆'}
                  </span>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 title-font">{stat.value}</div>
                <div className="text-blue-100 body-font">{stat.label}</div>
                <div className="w-12 h-1 bg-white mx-auto mt-4 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block border border-gray-300 rounded-full text-gray-600 font-medium py-1 px-4 mb-4 title-font">
              {t('aboutDub.team.badge', 'Наша команда')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 title-font">
              {t('aboutDub.team.title', 'Профессиональная команда')}
            </h2>
            <p className="text-gray-600 body-font">
              {t('aboutDub.team.description', 'Наши специалисты обладают многолетним опытом в разработке IT-решений для бизнеса')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div key={member.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-t-xl flex items-center justify-center p-8">
                  <div className="text-8xl">{member.image}</div>
                </div>
                <div className="bg-white p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-1 title-font">{member.name}</h4>
                  <p className="text-gray-600 mb-4 body-font">{member.position}</p>

                  <div className="flex justify-center space-x-3">
                    <a href="#" className="w-10 h-10 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                      <span className="text-lg">f</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                      <span className="text-lg">t</span>
                    </a>
                    {member.social.includes('instagram') ? (
                      <a href="#" className="w-10 h-10 bg-blue-100 hover:bg-pink-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                        <span className="text-lg">ig</span>
                      </a>
                    ) : member.social.includes('linkedin') ? (
                      <a href="#" className="w-10 h-10 bg-blue-100 hover:bg-blue-700 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                        <span className="text-lg">in</span>
                      </a>
                    ) : (
                      <a href="#" className="w-10 h-10 bg-blue-100 hover:bg-pink-500 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                        <span className="text-lg">db</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 title-font">
                {t('aboutDub.contact.title', 'Свяжитесь с нами')}
              </h2>
              <p className="text-gray-600 mb-8 body-font">
                {t('aboutDub.contact.description', 'Готовы обсудить ваш проект? Заполните форму и мы свяжемся с вами в ближайшее время для консультации.')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-blue-600">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 title-font">{t('aboutDub.contact.address.title', 'Адрес')}</h4>
                    <p className="text-gray-600 body-font">{t('aboutDub.contact.address.value', 'г. Москва, ул. Примерная, д. 123')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-blue-600">📧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 title-font">{t('aboutDub.contact.email.title', 'Email')}</h4>
                    <p className="text-gray-600 body-font">info@rs-soft.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-blue-600">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 title-font">{t('aboutDub.contact.phone.title', 'Телефон')}</h4>
                    <p className="text-gray-600 body-font">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="light"
        title={t('aboutDub.cta.title', 'Готовы начать сотрудничество?')}
        primaryButtonText={t('aboutDub.cta.contact', 'Связаться с нами')}
        primaryButtonLink="/contact"
        secondaryButtonText={t('aboutDub.cta.portfolio', 'Посмотреть проекты')}
      />
    </div>
  );
}