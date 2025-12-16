"use client";
import React from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';

export default function PrivacyPage() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{t('legal.privacyTitle')}</h1>
        <p className="text-lg text-gray-700 mb-4">{t('legal.privacySummary') || 'Your privacy matters to us. Luvaa collects account information and wardrobe data to provide personalization and marketplace features.'}</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">{t('legal.dataUseTitle') || 'Data Use'}</h2>
        <p className="text-gray-700">{t('legal.dataUse') || 'We use wardrobe photos to generate tags and suggestions. Aggregated, anonymized data helps improve recommendations.'}</p>
      </main>
      <Footer />
    </div>
  );
}
