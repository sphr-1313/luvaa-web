"use client";
import React from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';

export default function PricingPage() {
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{t('pricing.title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('pricing.lead')}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {t('pricing.features.noRecurring')}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {t('pricing.features.noExpiry')}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {t('pricing.features.free')}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Starter Pack */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#ec547c]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pricing.pack.starter.title')}</h3>
            <div className="mb-4">
              <span className="text-4xl font-extrabold text-gray-900">{t('pricing.pack.starter.price')}</span>
            </div>
            <div className="bg-[#ec547c]/10 text-[#ec547c] font-bold px-4 py-2 rounded-full inline-block mb-6">
              {t('pricing.pack.starter.credits')}
            </div>
            <p className="text-gray-600 mb-8 min-h-[48px]">{t('pricing.pack.starter.desc')}</p>
            <button className="w-full py-3 px-6 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Popular Pack */}
          <div className="bg-gradient-to-b from-[#ec547c] to-[#ed754f] p-[2px] rounded-3xl transform md:-translate-y-4 shadow-2xl">
            <div className="bg-white rounded-[22px] p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ec547c] to-[#ed754f] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pricing.pack.popular.title')}</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900">{t('pricing.pack.popular.price')}</span>
              </div>
              <div className="bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white font-bold px-4 py-2 rounded-full inline-block mb-2">
                {t('pricing.pack.popular.credits')}
              </div>
              {t('pricing.pack.popular.value') && (
                <div className="text-sm font-semibold text-[#ec547c] mb-6">
                  {t('pricing.pack.popular.value')}
                </div>
              )}
              <p className="text-gray-600 mb-8 min-h-[48px]">{t('pricing.pack.popular.desc')}</p>
              <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#ec547c]/30">
                Get Pack
              </button>
            </div>
          </div>

          {/* Pro Pack */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#ec547c]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pricing.pack.pro.title')}</h3>
            <div className="mb-4">
              <span className="text-4xl font-extrabold text-gray-900">{t('pricing.pack.pro.price')}</span>
            </div>
            <div className="bg-gray-900 text-white font-bold px-4 py-2 rounded-full inline-block mb-2">
              {t('pricing.pack.pro.credits')}
            </div>
            {t('pricing.pack.pro.value') && (
              <div className="text-sm font-semibold text-[#ec547c] mb-6">
                {t('pricing.pack.pro.value')}
              </div>
            )}
            <p className="text-gray-600 mb-8 min-h-[48px]">{t('pricing.pack.pro.desc')}</p>
            <button className="w-full py-3 px-6 rounded-xl bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 transition-colors">
              Get Pack
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
