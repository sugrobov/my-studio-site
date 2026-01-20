import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    surname: '',
    city: '',
    phone: '',
    message: '',
    captcha: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.formSubmitted', 'Форма отправлена!'));
    setForm({
      name: '',
      surname: '',
      city: '',
      phone: '',
      message: '',
      captcha: ''
    });
  };

  const handleClear = () => {
    setForm({
      name: '',
      surname: '',
      city: '',
      phone: '',
      message: '',
      captcha: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <h3 className="text-xl font-semibold">{t('contact.title')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t('contact.name')}
          className="border p-2 rounded"
          required
        />
        <input
          name="surname"
          value={form.surname}
          onChange={handleChange}
          placeholder={t('contact.surname')}
          className="border p-2 rounded"
          required
        />
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder={t('contact.city')}
          className="border p-2 rounded"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder={t('contact.phone')}
          className="border p-2 rounded"
          required
        />
      </div>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={t('contact.message')}
        className="w-full border p-2 rounded"
        rows="4"
        required
      ></textarea>
      <div className="flex gap-4 items-center">
        <input
          name="captcha"
          value={form.captcha}
          onChange={handleChange}
          placeholder={t('contact.captcha')}
          className="border p-2 rounded"
          required
        />
        <div className="bg-gray-200 px-3 py-2 rounded font-bold select-none">ABC123</div>
      </div>
      <div className="flex gap-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {t('contact.send')}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          {t('contact.clear')}
        </button>
      </div>
    </form>
  );
}
