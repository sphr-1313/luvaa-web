
"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import { useI18n } from "../components/I18nProvider";
import { Sparkles, Shirt, Palette, Brain, Bookmark, ShoppingBag, Search, Scissors } from 'lucide-react';

export default function Home() {
  const { t } = useI18n();
  // Scroll-based fade-in effect for sections
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
        { threshold: 0.15 }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }, []);
    return { ref, visible };
  }
  // Modern parallax effect with blurred colored circles
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);
  const circle3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    let running = true;
    function animate() {
      if (!running) return;
      frame++;
      const t1 = Math.sin(frame / 120) * 30;
      const t2 = Math.cos(frame / 180) * 40;
      const t3 = Math.sin(frame / 90) * 20;
      if (circle1.current) circle1.current.style.transform = `translate(-30%, -30%) translateY(${t1}px)`;
      if (circle2.current) circle2.current.style.transform = `translate(60%, 10%) translateY(${t2}px)`;
      if (circle3.current) circle3.current.style.transform = `translate(10%, 70%) translateY(${t3}px)`;
      requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, []);

  // Testimonials data and carousel state
  const testimonials = [
    { user: 'Sarah, NYC', text: "Luvaa helped me organize my closet and find new outfit ideas every week!", color: '#ec547c' },
    { user: 'Alex, LA', text: "I sold my first collection on Luvaa and bought new pieces I love. So easy!", color: '#ed754f' },
    { user: 'Jamie, London', text: "The suggestions are spot on. I never have to wonder what to wear!", color: '#ec547c' },
    { user: 'Priya, Mumbai', text: "I love how Luvaa recommends what to buy next based on my wardrobe.", color: '#ed754f' },
    { user: 'Lucas, Berlin', text: "Uploading my clothes was so easy, and now I have my closet in my pocket!", color: '#ec547c' },
    { user: 'Emma, Paris', text: "Great for selling items I no longer wear. The process is smooth.", color: '#ed754f' },
    { user: 'Mia, Toronto', text: "Luvaa's outfit inspiration is my daily go-to before I get dressed.", color: '#ec547c' },
    { user: 'Noah, Sydney', text: "I found unique pieces from other users. Shopping is fun again!", color: '#ed754f' },
    { user: 'Sofia, Rome', text: "The app is beautiful and easy to use. Highly recommend!", color: '#ec547c' },
    { user: 'Ava, San Francisco', text: "Luvaa makes fashion social and smart. Love the community!", color: '#ed754f' },
    { user: 'Diego, Madrid', text: "I discovered a new personal style thanks to Luvaa's suggestions.", color: '#ec547c' },
    { user: 'Yuna, Seoul', text: "The closet organization feature saved me so much time in the mornings!", color: '#ed754f' },
    { user: 'Sam, Austin', text: "Selling clothes directly in the app was effortless — great UX.", color: '#ec547c' },
    { user: 'Lena, Stockholm', text: "I love the community collections — such great inspiration.", color: '#ed754f' },
    { user: 'Omar, Dubai', text: "The AI outfit suggestions actually understand my style. Impressive!", color: '#ec547c' },
  ];

  // Show 3 items per page on md+ screens, 1 per page on small screens
  const [pageIdx, setPageIdx] = useState(0);
  const [isHoveringTestimonials, setIsHoveringTestimonials] = useState(false);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);
  function nextPage() {
    setPageIdx((p) => (p + 1) % pageCount);
  }
  function prevPage() {
    setPageIdx((p) => (p - 1 + pageCount) % pageCount);
  }
  // Auto-advance carousel pages (pauses on hover)
  useEffect(() => {
    if (isHoveringTestimonials) return;
    const id = setInterval(() => nextPage(), 5000);
    return () => clearInterval(id);
  }, [pageIdx, isHoveringTestimonials]);

  const detailedFeatures = [
    {
      icon: Sparkles,
      titleKey: "features.smartRecommendations",
      descKey: "features.smartRecommendationsDesc",
      color: "#ec547c"
    },
    {
      icon: Shirt,
      titleKey: "features.organizeDigital",
      descKey: "features.organizeDigitalDesc",
      color: "#ed754f"
    },
    {
      icon: Palette,
      titleKey: "features.mixMatch",
      descKey: "features.mixMatchDesc",
      color: "#ec547c"
    },
    {
      icon: Brain,
      titleKey: "features.intelligentAnalysis",
      descKey: "features.intelligentAnalysisDesc",
      color: "#ed754f"
    },
    {
      icon: Bookmark,
      titleKey: "features.saveOrganize",
      descKey: "features.saveOrganizeDesc",
      color: "#ec547c"
    },
    {
      icon: ShoppingBag,
      titleKey: "features.shopSimilar",
      descKey: "features.shopSimilarDesc",
      color: "#ed754f"
    },
    {
      icon: Search,
      titleKey: "features.findInstantly",
      descKey: "features.findInstantlyDesc",
      color: "#ec547c"
    },
    {
      icon: Scissors,
      titleKey: "features.bgRemoval",
      descKey: "features.bgRemovalDesc",
      color: "#ed754f"
    }
  ];

  const steps = [
    { number: "01", titleKey: "howItWorks.step1Title", descKey: "howItWorks.step1Desc" },
    { number: "02", titleKey: "howItWorks.step2Title", descKey: "howItWorks.step2Desc" },
    { number: "03", titleKey: "howItWorks.step3Title", descKey: "howItWorks.step3Desc" },
    { number: "04", titleKey: "howItWorks.step4Title", descKey: "howItWorks.step4Desc" }
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      {/* Modern Parallax Background */}
      <div ref={circle1} aria-hidden="true" className="pointer-events-none absolute z-0 w-[600px] h-[600px] rounded-full bg-[#ec547c]/20 blur-3xl top-[-200px] left-[-200px] transition-transform duration-300" />
      <div ref={circle2} aria-hidden="true" className="pointer-events-none absolute z-0 w-[500px] h-[500px] rounded-full bg-[#ed754f]/20 blur-3xl top-20 right-[-180px] transition-transform duration-300" />
      <div ref={circle3} aria-hidden="true" className="pointer-events-none absolute z-0 w-[400px] h-[400px] rounded-full bg-[#ec547c]/10 blur-2xl bottom-[-120px] left-1/2 transition-transform duration-300" />

      <main className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="order-2 md:order-1 flex-1 flex flex-col items-start md:items-start text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {t('hero.title1')} <span className="bg-gradient-to-r from-[#ec547c] to-[#ed754f] bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12" />
                  </a>
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
                  </a>
                </div>
                <a href="https://app.luvaa.app" className="inline-block"><button className="bg-[#ec547c] cursor-pointer hover:bg-[#ed754f] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow">{t('cta.tryOnWeb')}</button></a>
              </div>
              <div className="order-1 md:order-2 flex-1 flex justify-center items-center w-full">
                {/* iPhone Mockup Frame */}
                <div className="relative group">
                  {/* Glow effect behind phone */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ec547c] to-[#ed754f] rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-105"></div>

                  {/* iPhone Frame */}
                  <div className="relative w-[280px] md:w-[340px] h-[560px] md:h-[680px] bg-black rounded-[3rem] p-3 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    {/* Screen bezel */}
                    <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10 flex items-center justify-center">
                        <div className="w-16 h-1.5 bg-gray-800 rounded-full mt-2"></div>
                      </div>

                      {/* App Screenshot */}
                      <img
                        src="/home.png"
                        alt="Luvaa App Home Screen"
                        className="w-full h-full object-cover"
                      />

                      {/* Screen shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Side buttons */}
                    <div className="absolute -left-1 top-24 w-1 h-12 bg-gray-800 rounded-l"></div>
                    <div className="absolute -left-1 top-40 w-1 h-16 bg-gray-800 rounded-l"></div>
                    <div className="absolute -left-1 top-60 w-1 h-16 bg-gray-800 rounded-l"></div>
                    <div className="absolute -right-1 top-32 w-1 h-20 bg-gray-800 rounded-r"></div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white font-bold px-6 py-2 rounded-full text-sm shadow-lg shadow-[#ec547c]/40 whitespace-nowrap animate-pulse">
                    {t('hero.appPreview')}
                  </div>
                </div>
              </div>
            </section>
          );
        })()}
        {/* Stats Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`w-full max-w-4xl flex flex-col sm:flex-row gap-8 mb-20 justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex-1 bg-gradient-to-br from-[#ec547c]/10 to-[#ed754f]/10 rounded-2xl shadow flex flex-col items-center px-8 py-8 min-w-[180px]">
                <span className="text-4xl font-extrabold text-[#ec547c]">10k+</span>
                <span className="text-gray-700 font-medium mt-1">{t('stats.users')}</span>
              </div>
              <div className="flex-1 bg-gradient-to-br from-[#ed754f]/10 to-[#ec547c]/10 rounded-2xl shadow flex flex-col items-center px-8 py-8 min-w-[180px]">
                <span className="text-4xl font-extrabold text-[#ed754f]">300k+</span>
                <span className="text-gray-700 font-medium mt-1">{t('stats.outfits')}</span>
              </div>
              <div className="flex-1 bg-gradient-to-br from-[#ec547c]/10 to-[#ed754f]/10 rounded-2xl shadow flex flex-col items-center px-8 py-8 min-w-[180px]">
                <span className="text-4xl font-extrabold text-[#ec547c]">20k+</span>
                <span className="text-gray-700 font-medium mt-1">{t('stats.items')}</span>
              </div>
            </section>
          );
        })()}

        {/* Detailed Features Grid */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section ref={ref} className={`w-full max-w-7xl px-6 py-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                  {t('features.detailedTitle')}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('features.detailedSubtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {detailedFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#ec547c]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${feature.color}15` }}
                      >
                        <Icon size={28} style={{ color: feature.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t(feature.titleKey)}</h3>
                      <p className="text-gray-600 leading-relaxed">{t(feature.descKey)}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })()}

        {/* Premium Features Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section ref={ref} className={`w-full max-w-6xl px-6 py-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative bg-gradient-to-r from-[#ec547c] to-[#ed754f] p-[2px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ec547c]/20 to-[#ed754f]/20 blur-xl"></div>
                <div className="relative bg-white rounded-[22px] p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                        {t('premium.title')}
                      </h2>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="text-2xl">✨</span>
                          <span className="font-medium">{t('premium.aiOutfits')}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="text-2xl">🎨</span>
                          <span className="font-medium">{t('premium.bgRemoval')}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="text-2xl">🚀</span>
                          <span className="font-medium">{t('premium.virtualTryOn')}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="text-2xl">📊</span>
                          <span className="font-medium">{t('premium.analytics')}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="text-2xl">💎</span>
                          <span className="font-medium">{t('premium.templates')}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-shrink-0">
                      <a href="/pricing">
                        <button className="bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#ec547c]/30 text-lg">
                          {t('premium.cta')}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* How It Works Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section ref={ref} className={`w-full max-w-6xl px-6 py-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                  {t('howItWorks.title')}
                </h2>
                <p className="text-xl text-gray-600">
                  {t('howItWorks.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#ec547c] to-[#ed754f] text-white text-2xl font-bold mb-6 shadow-lg shadow-[#ec547c]/30">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{t(step.titleKey)}</h3>
                      <p className="text-gray-600">{t(step.descKey)}</p>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#ec547c]/30 to-[#ed754f]/30"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })()}

        {/* Testimonials Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`w-full max-w-4xl mb-24 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('testimonials.title')}</h3>
              <div
                className="w-full mx-auto"
                onMouseEnter={() => setIsHoveringTestimonials(true)}
                onMouseLeave={() => setIsHoveringTestimonials(false)}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Array.from({ length: itemsPerPage }).map((_, idx) => {
                    const globalIdx = pageIdx * itemsPerPage + idx;
                    const item = testimonials[globalIdx];
                    if (!item) return <div key={idx} />;
                    return (
                      <div key={idx} className="bg-white border border-gray-100 rounded-2xl shadow p-6 flex flex-col items-center text-center">
                        <svg className="w-8 h-8 mb-2" fill="currentColor" style={{ color: item.color }} viewBox="0 0 24 24"><path d="M7.17 6.17A5.97 5.97 0 006 12c0 2.21 1.79 4 4 4v2c-3.31 0-6-2.69-6-6 0-2.21-1.79-4 4-4zm9.66 0A5.97 5.97 0 0118 12c0 2.21-1.79 4-4 4v2c3.31 0 6-2.69 6-6 0-2.21-1.79-4-4-4z" /></svg>
                        <p className="text-gray-700 mb-2">"{item.text}"</p>
                        <span className="text-sm text-gray-400 font-medium">— {item.user}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button onClick={prevPage} aria-label="Previous testimonials page" className="cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center text-2xl font-bold text-gray-600 transition-colors">&#8592;</button>
                  <div className="flex gap-2">
                    {Array.from({ length: pageCount }).map((_, i) => (
                      <button key={i} onClick={() => setPageIdx(i)} aria-label={`Go to page ${i + 1}`} className={`w-3 h-3 rounded-full ${i === pageIdx ? 'bg-[#ec547c]' : 'bg-gray-300'}`} />
                    ))}
                  </div>
                  <button onClick={nextPage} aria-label="Next testimonials page" className="cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center text-2xl font-bold text-gray-600 transition-colors">&#8594;</button>
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
