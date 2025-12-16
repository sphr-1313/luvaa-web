"use client";
import React from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{t('contact.title')}</h1>
        <p className="text-lg text-gray-700 mb-4">{t('contact.lead')}</p>
        <form className="max-w-md mt-6 space-y-4">
          <label className="block text-sm text-gray-700">{t('contact.form.name') || 'Name'}</label>
          <input className="w-full border rounded px-3 py-2" placeholder={t('contact.form.name') || 'Name'} />
          <label className="block text-sm text-gray-700">{t('contact.form.email') || 'Email'}</label>
          <input className="w-full border rounded px-3 py-2" placeholder={t('contact.form.email') || 'Email'} />
          <label className="block text-sm text-gray-700">{t('contact.form.message') || 'Message'}</label>
          <textarea className="w-full border rounded px-3 py-2" placeholder={t('contact.form.message') || 'Message'} rows={6} />
          <button type="button" className="bg-[#ec547c] text-white px-4 py-2 rounded">{t('contact.form.send') || 'Send Message'}</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
