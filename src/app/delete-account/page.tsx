"use client";
import React from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';

export default function DeleteAccountPage() {
    const { t } = useI18n();

    return (
        <div className="relative min-h-screen bg-white font-sans overflow-hidden">
            {/* Decorative background elements using Luvaa brand colors */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#ec547c]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ed754f]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#ec547c]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <main className="relative max-w-4xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#ec547c] to-[#ed754f] bg-clip-text text-transparent">
                        {t('legal.deleteAccountTitle')}
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#ec547c] to-[#ed754f] mx-auto rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                    {/* Introduction */}
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {t('legal.deleteAccountIntro')}
                    </p>

                    {/* Method 1 */}
                    <div className="mb-8 p-6 bg-gradient-to-br from-[#ec547c]/10 to-[#ed754f]/10 rounded-2xl border border-[#ec547c]/20 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#ec547c] to-[#ed754f] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                1
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-gray-900 mb-2">
                                    {t('legal.deleteMethod1Title')}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('legal.deleteMethod1Desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Method 2 */}
                    <div className="mb-10 p-6 bg-gradient-to-br from-[#ed754f]/10 to-[#ec547c]/10 rounded-2xl border border-[#ed754f]/20 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#ed754f] to-[#ec547c] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                2
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-gray-900 mb-2">
                                    {t('legal.deleteMethod2Title')}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('legal.deleteMethod2Desc')}
                                </p>
                                <div className="mt-3 p-3 bg-white/60 rounded-lg border border-[#ed754f]/20">
                                    <a
                                        href="mailto:support@luvaa.app"
                                        className="text-[#ec547c] hover:text-[#ed754f] font-semibold transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        support@luvaa.app
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data Deletion Details */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <svg className="w-7 h-7 text-[#ec547c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            {t('legal.dataDeletionTitle')}
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            {t('legal.dataDeletionIntro')}
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-700">
                                <svg className="w-6 h-6 text-[#ec547c] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{t('legal.dataDeletionItem1')}</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <svg className="w-6 h-6 text-[#ec547c] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{t('legal.dataDeletionItem2')}</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <svg className="w-6 h-6 text-[#ec547c] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{t('legal.dataDeletionItem3')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Retention */}
                    <div className="p-6 bg-gradient-to-br from-[#ed754f]/10 to-[#ec547c]/10 rounded-2xl border border-[#ed754f]/20">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <svg className="w-6 h-6 text-[#ed754f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {t('legal.retentionTitle')}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t('legal.retentionDesc')}
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600 text-sm">
                        For questions about data deletion or privacy, please contact{' '}
                        <a
                            href="mailto:support@luvaa.app"
                            className="text-[#ec547c] hover:text-[#ed754f] font-semibold transition-colors duration-200"
                        >
                            support@luvaa.app
                        </a>
                    </p>
                </div>
            </main>

            <Footer />

            <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
}
