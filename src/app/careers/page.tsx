"use client";
import React from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';

export default function CareersPage() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{t('nav.careers')} at Luvaa</h1>
        <p className="text-xl text-gray-700 mb-6">{t('careers.intro') || "We're building the future of personal fashion. If you love design, mobile apps, and smarter shopping experiences, we'd love to hear from you. Join a small, fast-moving team that values ownership and creativity."}</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">{t('careers.whyTitle') || 'Why Work With Us'}</h2>
        <p className="text-gray-700 mb-4">{t('careers.whyCopy') || 'Luvaa offers flexible remote work, a collaborative culture, and opportunities to influence products used by thousands of users worldwide. You\'ll work directly on product decisions and ship features quickly.'}</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">{t('careers.openRoles') || 'Open Roles'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded p-4">
            <a href="/careers/frontend-engineer" className="text-lg font-semibold text-gray-900 hover:underline">Frontend Engineer (React/Next.js)</a>
            <p className="text-gray-700 mt-2">{t('careers.frontendSummary') || 'Own web UI and performance. Build scalable, accessible components.'}</p>
            <a href="/careers/frontend-engineer" className="inline-block mt-3 bg-[#ec547c] text-white px-3 py-2 rounded">{t('careers.viewApply') || 'View & Apply'}</a>
          </div>
          <div className="border rounded p-4">
            <a href="/careers/mobile-engineer" className="text-lg font-semibold text-gray-900 hover:underline">Mobile Engineer (React Native / iOS / Android)</a>
            <p className="text-gray-700 mt-2">{t('careers.mobileSummary') || 'Ship native-feeling mobile experiences and camera/upload flows.'}</p>
            <a href="/careers/mobile-engineer" className="inline-block mt-3 bg-[#ec547c] text-white px-3 py-2 rounded">{t('careers.viewApply') || 'View & Apply'}</a>
          </div>
          <div className="border rounded p-4">
            <a href="/careers/ml-engineer" className="text-lg font-semibold text-gray-900 hover:underline">Machine Learning Engineer</a>
            <p className="text-gray-700 mt-2">{t('careers.mlSummary') || 'Work on recommendations and retrieval systems to personalize outfit suggestions.'}</p>
            <a href="/careers/ml-engineer" className="inline-block mt-3 bg-[#ec547c] text-white px-3 py-2 rounded">{t('careers.viewApply') || 'View & Apply'}</a>
          </div>
          <div className="border rounded p-4">
            <a href="/careers/product-designer" className="text-lg font-semibold text-gray-900 hover:underline">Product Designer</a>
            <p className="text-gray-700 mt-2">{t('careers.designerSummary') || 'Design mobile-first flows, prototyping, and user research.'}</p>
            <a href="/careers/product-designer" className="inline-block mt-3 bg-[#ec547c] text-white px-3 py-2 rounded">{t('careers.viewApply') || 'View & Apply'}</a>
          </div>
        </div>
        <p className="mt-6 text-gray-700">{t('careers.contactCopy') || "Alternatively, you can email careers@luvaa.app with your resume and a short note about what excites you about fashion tech."}</p>
      </main>
      <Footer />
    </div>
  );
}
