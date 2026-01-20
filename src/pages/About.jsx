import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{t('about.title')}</h1>
      <p className="text-gray-800 mb-4">{t('about.text')}</p>
      <p className="text-gray-800 mb-4">{t('about.text')}</p>
      <ContactForm />
    </div>
  );
}
