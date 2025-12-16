"use client";
import React from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';

export default function TermsPage() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{t('legal.termsTitle')}</h1>
        <p className="text-lg text-gray-700 mb-4">{t('legal.termsSummary') || "These terms govern the use of Luvaa's website and services."}</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">{t('legal.userContentTitle') || 'User Content'}</h2>
        <p className="text-gray-700">{t('legal.userContent') || 'Users retain ownership of images they upload but grant Luvaa a license to display and process content.'}</p>
      </main>
      <Footer />
    </div>
  );
}
