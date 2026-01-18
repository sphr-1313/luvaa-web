"use client";
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';
import { Heart, Target, Users, Sparkles, Globe, Zap, Star, Wand2, Layers, ShoppingBag, Dna } from 'lucide-react';

export default function AboutPage() {
  const { t } = useI18n();

  // Scroll fade-in effect
  function useScrollFadeIn() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const node = ref.current;
      if (!node) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }, []);
    return { ref, visible };
  }

  const values = [
    { icon: Heart, title: t('about.values.passion.title'), desc: t('about.values.passion.desc'), color: '#ec547c' },
    { icon: Target, title: t('about.values.focus.title'), desc: t('about.values.focus.desc'), color: '#ed754f' },
    { icon: Users, title: t('about.values.community.title'), desc: t('about.values.community.desc'), color: '#ec547c' },
    { icon: Sparkles, title: t('about.values.innovation.title'), desc: t('about.values.innovation.desc'), color: '#ed754f' },
  ];

  const features = [
    { icon: Star, name: t('about.features.rateFit') },
    { icon: Wand2, name: t('about.features.styleGenie') },
    { icon: Sparkles, name: t('about.features.inspiration') },
    { icon: Layers, name: t('about.features.studio') },
    { icon: ShoppingBag, name: t('about.features.marketplace') },
    { icon: Dna, name: t('about.features.fashionDna') },
  ];

  return (
    <div className="relative min-h-screen bg-[#faf8f7] font-sans overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-[#ec547c]/15 to-[#ed754f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#ed754f]/10 to-[#ec547c]/5 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`min-h-[70vh] flex items-center justify-center px-4 py-24 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-5xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#ec547c]/20 shadow-sm mb-8">
                  <Heart className="w-4 h-4 text-[#ec547c]" />
                  <span className="text-sm font-medium text-gray-700">{t('about.badge')}</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight mb-8">
                  {t('about.heroTitle1')}
                  <br />
                  <span className="gradient-text">{t('about.heroTitle2')}</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                  {t('about.heroSubtitle')}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                  <div className="text-center">
                    <p className="text-4xl lg:text-5xl font-black gradient-text">10K+</p>
                    <p className="text-gray-500 font-medium">{t('about.stats.users')}</p>
                  </div>
                  <div className="hidden sm:block h-16 w-px bg-gray-200" />
                  <div className="text-center">
                    <p className="text-4xl lg:text-5xl font-black gradient-text">300K+</p>
                    <p className="text-gray-500 font-medium">{t('about.stats.outfits')}</p>
                  </div>
                  <div className="hidden sm:block h-16 w-px bg-gray-200" />
                  <div className="text-center">
                    <p className="text-4xl lg:text-5xl font-black gradient-text">50+</p>
                    <p className="text-gray-500 font-medium">{t('about.stats.countries')}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Story Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`py-24 px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Image/Visual */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#ec547c]/20 to-[#ed754f]/20 rounded-[3rem] blur-2xl" />
                    <div className="relative bg-gradient-to-br from-[#ec547c] to-[#ed754f] rounded-[2.5rem] p-1">
                      <div className="bg-white rounded-[2.3rem] p-8 lg:p-12">
                        <div className="grid grid-cols-2 gap-4">
                          {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                              >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ec547c]/10 to-[#ed754f]/10 flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-[#ec547c]" />
                                </div>
                                <span className="font-medium text-gray-700 text-sm">{feature.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <span className="inline-block px-4 py-1.5 bg-[#ec547c]/10 text-[#ec547c] rounded-full text-sm font-semibold mb-6">
                      {t('about.storyBadge')}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                      {t('about.storyTitle')}
                    </h2>
                    <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                      <p>{t('about.storyPara1')}</p>
                      <p>{t('about.storyPara2')}</p>
                      <p>{t('about.storyPara3')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Mission Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`py-24 px-4 bg-gradient-to-b from-white to-[#faf8f7] transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 bg-[#ed754f]/10 text-[#ed754f] rounded-full text-sm font-semibold mb-6">
                  {t('about.missionBadge')}
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">
                  {t('about.missionTitle')}
                </h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-12">
                  {t('about.missionText')}
                </p>

                {/* Mission pillars */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#ec547c]/10 flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-7 h-7 text-[#ec547c]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('about.pillar1.title')}</h3>
                    <p className="text-gray-600">{t('about.pillar1.desc')}</p>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#ed754f]/10 flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-7 h-7 text-[#ed754f]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('about.pillar2.title')}</h3>
                    <p className="text-gray-600">{t('about.pillar2.desc')}</p>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#ec547c]/10 flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-7 h-7 text-[#ec547c]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('about.pillar3.title')}</h3>
                    <p className="text-gray-600">{t('about.pillar3.desc')}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Values Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`py-24 px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-block px-4 py-1.5 bg-[#ec547c]/10 text-[#ec547c] rounded-full text-sm font-semibold mb-4">
                    {t('about.valuesBadge')}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                    {t('about.valuesTitle')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {t('about.valuesSubtitle')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, idx) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                      >
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: `${value.color}15` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: value.color }} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })()}

        {/* Team Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`py-24 px-4 bg-gradient-to-b from-[#faf8f7] to-white transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 bg-[#ed754f]/10 text-[#ed754f] rounded-full text-sm font-semibold mb-6">
                  {t('about.teamBadge')}
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                  {t('about.teamTitle')}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {t('about.teamDesc')}
                </p>

                {/* Avatars representation */}
                <div className="flex items-center justify-center gap-4 mb-12">
                  <div className="flex -space-x-4">
                    {['👩🏻‍💻', '👨🏽‍🎨', '👩🏼‍🔬', '👨🏻‍💼', '👩🏾‍🎓'].map((emoji, idx) => (
                      <div
                        key={idx}
                        className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl border-2 border-white"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#ec547c] to-[#ed754f] shadow-lg flex items-center justify-center text-white font-bold">
                    +15
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                    <span>🌍</span>
                    <span className="font-medium">{t('about.teamRemote')}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                    <span>🕐</span>
                    <span className="font-medium">{t('about.teamTimezones')}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                    <span>💜</span>
                    <span className="font-medium">{t('about.teamPassion')}</span>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* CTA Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`py-24 px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 lg:p-16 text-center">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ec547c]/30 to-transparent rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#ed754f]/20 to-transparent rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                      {t('about.ctaTitle')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                      {t('about.ctaSubtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="https://apps.apple.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105"
                      >
                        {t('about.ctaDownload')}
                      </a>
                      <a
                        href="/careers"
                        className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/10 transition-all"
                      >
                        {t('about.ctaCareers')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        <Footer />
      </main>
    </div>
  );
}
