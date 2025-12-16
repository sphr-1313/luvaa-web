"use client";
import React from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';

export default function BlogPage() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{t('blogPage.title')}</h1>
        <p className="text-lg text-gray-700 mb-4">{t('blogPage.lead')}</p>
        <article className="mt-8 text-gray-700">
          <h2 className="text-2xl font-bold mb-2">{t('blog.featured.title') || 'Featured: How to Refresh Your Wardrobe'}</h2>
          <p>{t('blog.featured.body') || 'Learn practical steps to sort your closet, identify pieces to keep or sell, and create new outfits without buying more.'}</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
