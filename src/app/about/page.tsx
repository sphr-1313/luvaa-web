"use client";
import React from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{t('about.title') || 'About Luvaa'}</h1>
        <p className="text-xl text-gray-700 mb-6">{t('about.lead') || 'Luvaa began as a passion project to reimagine how people interact with their wardrobes.'}</p>
        <p className="text-lg text-gray-700 mb-4">{t('about.lead2') || 'Our product combines intuitive design with machine learning to deliver outfit suggestions tailored to personal taste, weather, and occasion.'}</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">{t('about.missionTitle') || 'Our Mission'}</h2>
        <p className="text-gray-700 mb-4">{t('about.mission') || 'We aim to make fashion more sustainable by helping people rediscover and reuse what they already own.'}</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">{t('about.teamTitle') || 'Our Team'}</h2>
        <p className="text-gray-700 mb-4">{t('about.team') || 'A small team of designers, engineers, and fashion enthusiasts working remotely across the globe.'}</p>
      </main>
      <Footer />
    </div>
  );
}
