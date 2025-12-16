"use client";
import React from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';

export default function PressPage() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{t('press.title')}</h1>
        <p className="text-lg text-gray-700 mb-4">{t('press.lead')}</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">{t('press.kitTitle') || 'Press Kit'}</h2>
        <p className="text-gray-700 mb-4">{t('press.kitDesc') || 'Our press kit includes logos, screenshots, and executive bios.'}</p>
      </main>
      <Footer />
    </div>
  );
}
