"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import AppShowcase from "../components/AppShowcase";
import { useI18n } from "../components/I18nProvider";
import {
  Star,
  Wand2,
  Sparkles,
  Layers,
  ShoppingBag,
  Dna,
  ArrowRight,
  Play,
  Check,
  ChevronDown
} from 'lucide-react';

export default function Home() {
  const { t } = useI18n();
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Scroll-based fade-in effect
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

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Star,
      title: t('features.rateFit.title'),
      tagline: t('features.rateFit.tagline'),
      description: t('features.rateFit.description'),
      color: '#ec547c',
      bgColor: 'from-pink-500/20 to-rose-500/20',
    },
    {
      icon: Wand2,
      title: t('features.styleGenie.title'),
      tagline: t('features.styleGenie.tagline'),
      description: t('features.styleGenie.description'),
      color: '#ed754f',
      bgColor: 'from-orange-500/20 to-amber-500/20',
    },
    {
      icon: Sparkles,
      title: t('features.inspiration.title'),
      tagline: t('features.inspiration.tagline'),
      description: t('features.inspiration.description'),
      color: '#ec547c',
      bgColor: 'from-rose-500/20 to-pink-500/20',
    },
    {
      icon: Layers,
      title: t('features.studio.title'),
      tagline: t('features.studio.tagline'),
      description: t('features.studio.description'),
      color: '#ed754f',
      bgColor: 'from-amber-500/20 to-orange-500/20',
    },
    {
      icon: ShoppingBag,
      title: t('features.marketplace.title'),
      tagline: t('features.marketplace.tagline'),
      description: t('features.marketplace.description'),
      color: '#ec547c',
      bgColor: 'from-pink-500/20 to-fuchsia-500/20',
    },
    {
      icon: Dna,
      title: t('features.fashionDna.title'),
      tagline: t('features.fashionDna.tagline'),
      description: t('features.fashionDna.description'),
      color: '#ed754f',
      bgColor: 'from-orange-500/20 to-red-500/20',
    },
  ];

  const testimonials = [
    { user: 'Sarah M.', location: 'NYC', text: t('testimonials.quote1'), avatar: '👩🏻' },
    { user: 'Alex K.', location: 'LA', text: t('testimonials.quote2'), avatar: '👨🏽' },
    { user: 'Jamie L.', location: 'London', text: t('testimonials.quote3'), avatar: '👩🏼' },
    { user: 'Priya S.', location: 'Mumbai', text: t('testimonials.quote4'), avatar: '👩🏾' },
    { user: 'Lucas B.', location: 'Berlin', text: t('testimonials.quote5'), avatar: '👨🏻' },
    { user: 'Emma R.', location: 'Paris', text: t('testimonials.quote6'), avatar: '👩🏻' },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative min-h-screen bg-[#faf8f7] font-sans overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#ec547c]/20 to-[#ed754f]/10 rounded-full blur-3xl animate-morph" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-[#ed754f]/15 to-[#ec547c]/10 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[400px] bg-gradient-to-t from-[#ec547c]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`min-h-[90vh] flex items-center justify-center px-4 py-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Left Content */}
                  <div className="text-center lg:text-left space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#ec547c]/20 shadow-sm">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec547c] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec547c]" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">{t('hero.badge')}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                      {t('hero.title1')}
                      <br />
                      <span className="gradient-text">{t('hero.titleHighlight')}</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      {t('hero.subtitle')}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          <div className="text-left">
                            <p className="text-xs opacity-80">{t('hero.downloadOn')}</p>
                            <p className="text-lg font-semibold">App Store</p>
                          </div>
                          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                      </a>
                      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-6 py-4 rounded-2xl border-2 border-gray-200 hover:border-[#ec547c]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                          </svg>
                          <div className="text-left">
                            <p className="text-xs text-gray-500">{t('hero.getItOn')}</p>
                            <p className="text-lg font-semibold">Google Play</p>
                          </div>
                          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                      </a>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold gradient-text">10K+</p>
                        <p className="text-sm text-gray-500">{t('stats.users')}</p>
                      </div>
                      <div className="h-10 w-px bg-gray-200" />
                      <div className="text-center">
                        <p className="text-3xl font-bold gradient-text">300K+</p>
                        <p className="text-sm text-gray-500">{t('stats.outfits')}</p>
                      </div>
                      <div className="h-10 w-px bg-gray-200" />
                      <div className="text-center">
                        <p className="text-3xl font-bold gradient-text">4.8★</p>
                        <p className="text-sm text-gray-500">{t('stats.rating')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Phone Mockup */}
                  <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                      {/* Decorative Elements */}
                      <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#ec547c] to-[#ed754f] rounded-3xl blur-2xl opacity-40 animate-float" />
                      <div className="absolute -bottom-12 -right-8 w-32 h-32 bg-gradient-to-tr from-[#ed754f] to-[#ec547c] rounded-3xl blur-2xl opacity-30 animate-float-delayed" />

                      {/* Phone Frame */}
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#ec547c] to-[#ed754f] rounded-[3.5rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative w-[280px] sm:w-[320px] h-[570px] sm:h-[650px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                          {/* Screen */}
                          <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                            {/* Dynamic Island */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10 flex items-center justify-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-gray-800 border border-gray-700" />
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                            </div>

                            {/* App Screenshot */}
                            <img
                              src="/home.png"
                              alt="Luvaa App"
                              className="w-full h-full object-cover"
                            />

                            {/* Overlay shine */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                          </div>

                          {/* Side Buttons */}
                          <div className="absolute -left-[3px] top-28 w-[3px] h-8 bg-gray-700 rounded-l" />
                          <div className="absolute -left-[3px] top-44 w-[3px] h-16 bg-gray-700 rounded-l" />
                          <div className="absolute -left-[3px] top-64 w-[3px] h-16 bg-gray-700 rounded-l" />
                          <div className="absolute -right-[3px] top-36 w-[3px] h-20 bg-gray-700 rounded-r" />
                        </div>
                      </div>

                      {/* Floating Feature Cards */}
                      <div className="absolute -left-16 top-20 hidden lg:block animate-float">
                        <div className="glass-card px-4 py-3 rounded-2xl shadow-lg">
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-[#ec547c]" />
                            <span className="text-sm font-semibold">Rate My Fit</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute -right-20 top-1/3 hidden lg:block animate-float-delayed">
                        <div className="glass-card px-4 py-3 rounded-2xl shadow-lg">
                          <div className="flex items-center gap-2">
                            <Wand2 className="w-5 h-5 text-[#ed754f]" />
                            <span className="text-sm font-semibold">Style Genie</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute -left-12 bottom-32 hidden lg:block animate-float" style={{ animationDelay: '-2s' }}>
                        <div className="glass-card px-4 py-3 rounded-2xl shadow-lg">
                          <div className="flex items-center gap-2">
                            <Layers className="w-5 h-5 text-[#ec547c]" />
                            <span className="text-sm font-semibold">Studio</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce-subtle">
                  <span className="text-sm text-gray-400">{t('hero.scroll')}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </section>
          );
        })()}

        {/* Features Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              id="features"
              className={`py-24 lg:py-32 px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-24">
                  <span className="inline-block px-4 py-1.5 bg-[#ec547c]/10 text-[#ec547c] rounded-full text-sm font-semibold mb-4">
                    {t('features.badge')}
                  </span>
                  <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                    {t('features.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('features.subtitle')}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    const isActive = activeFeature === idx;
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setActiveFeature(idx)}
                        className={`feature-card relative p-8 rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 ${isActive
                          ? 'bg-white shadow-2xl scale-[1.02]'
                          : 'bg-white/50 hover:bg-white hover:shadow-xl'
                          }`}
                      >
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : ''}`} />

                        <div className="relative z-10">
                          {/* Icon */}
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110"
                            style={{ backgroundColor: `${feature.color}15` }}
                          >
                            <Icon size={28} style={{ color: feature.color }} />
                          </div>

                          {/* Content */}
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-[#ec547c] font-medium mb-4 text-sm">
                            {feature.tagline}
                          </p>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>

                          {/* Arrow */}
                          <div className={`mt-6 flex items-center gap-2 font-semibold transition-all duration-300 ${isActive ? 'text-[#ec547c] translate-x-2' : 'text-gray-400'}`}>
                            <span>{t('features.learnMore')}</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })()}

        {/* App Screenshots Showcase */}
        <AppShowcase />

        {/* How It Works Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`py-24 lg:py-32 px-4 bg-gradient-to-b from-white to-[#faf8f7] transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-block px-4 py-1.5 bg-[#ed754f]/10 text-[#ed754f] rounded-full text-sm font-semibold mb-4">
                    {t('howItWorks.badge')}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                    {t('howItWorks.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {t('howItWorks.subtitle')}
                  </p>
                </div>

                <div className="relative">
                  {/* Connection Line */}
                  <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ec547c] to-[#ed754f] -translate-y-1/2 z-0" />

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { num: '01', title: t('howItWorks.step1Title'), desc: t('howItWorks.step1Desc'), icon: '📲' },
                      { num: '02', title: t('howItWorks.step2Title'), desc: t('howItWorks.step2Desc'), icon: '📸' },
                      { num: '03', title: t('howItWorks.step3Title'), desc: t('howItWorks.step3Desc'), icon: '✨' },
                      { num: '04', title: t('howItWorks.step4Title'), desc: t('howItWorks.step4Desc'), icon: '🎨' },
                    ].map((step, idx) => (
                      <div key={idx} className="relative z-10 text-center group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                          {/* Step number */}
                          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#ec547c] to-[#ed754f] flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {step.num}
                          </div>
                          {/* Emoji */}
                          <div className="text-4xl mb-4">{step.icon}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Social Proof / Testimonials */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`py-24 lg:py-32 px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-block px-4 py-1.5 bg-[#ec547c]/10 text-[#ec547c] rounded-full text-sm font-semibold mb-4">
                    {t('testimonials.badge')}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                    {t('testimonials.title')}
                  </h2>
                </div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  {testimonials.slice(0, 3).map((testimonial, idx) => (
                    <div
                      key={idx}
                      className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${idx === 1 ? 'md:-translate-y-4' : ''}`}
                    >
                      {/* Quote icon */}
                      <div className="text-5xl mb-4 opacity-20 gradient-text">"</div>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{testimonial.avatar}</div>
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.user}</p>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{t('trust.secure')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{t('trust.privacy')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{t('trust.free')}</span>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Premium CTA Section */}
        {(() => {
          const { ref, visible } = useScrollFadeIn();
          return (
            <section
              ref={ref}
              className={`py-24 lg:py-32 px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 lg:p-16">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ec547c]/30 to-transparent rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#ed754f]/20 to-transparent rounded-full blur-3xl" />

                  <div className="relative z-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                      {t('cta.title')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                      {t('cta.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="https://apps.apple.com/" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                        {t('cta.download')}
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <a href="/pricing" className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                        {t('cta.pricing')}
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
