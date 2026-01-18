"use client";
import React, { useState, useEffect } from 'react';
import { useI18n } from './I18nProvider';
import { ChevronLeft, ChevronRight, Star, Wand2, Layers, Package, User, Home } from 'lucide-react';

interface Screenshot {
    src: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
}

export default function AppShowcase() {
    const { t } = useI18n();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Screenshots in priority order for marketing impact
    const screenshots: Screenshot[] = [
        {
            src: '/app_screenshots/score_outfit.png',
            title: t('showcase.rateFit.title'),
            description: t('showcase.rateFit.desc'),
            icon: Star,
            color: '#ec547c',
        },
        {
            src: '/app_screenshots/style_genie.png',
            title: t('showcase.styleGenie.title'),
            description: t('showcase.styleGenie.desc'),
            icon: Wand2,
            color: '#ed754f',
        },
        {
            src: '/app_screenshots/suggest_outfit_based_on_your_closet.png',
            title: t('showcase.suggestOutfit.title'),
            description: t('showcase.suggestOutfit.desc'),
            icon: Wand2,
            color: '#ec547c',
        },
        {
            src: '/app_screenshots/similar_outfits.png',
            title: t('showcase.inspiration.title'),
            description: t('showcase.inspiration.desc'),
            icon: Layers,
            color: '#ed754f',
        },
        {
            src: '/app_screenshots/studio.png',
            title: t('showcase.studio.title'),
            description: t('showcase.studio.desc'),
            icon: Layers,
            color: '#ec547c',
        },
        {
            src: '/app_screenshots/closet.png',
            title: t('showcase.closet.title'),
            description: t('showcase.closet.desc'),
            icon: Package,
            color: '#ed754f',
        },
        {
            src: '/app_screenshots/home.png',
            title: t('showcase.home.title'),
            description: t('showcase.home.desc'),
            icon: Home,
            color: '#ec547c',
        },
        {
            src: '/app_screenshots/profile.png',
            title: t('showcase.profile.title'),
            description: t('showcase.profile.desc'),
            icon: User,
            color: '#ed754f',
        },
    ];

    // Auto-rotate every 4 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % screenshots.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, screenshots.length]);

    const goTo = (index: number) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goPrev = () => goTo((activeIndex - 1 + screenshots.length) % screenshots.length);
    const goNext = () => goTo((activeIndex + 1) % screenshots.length);

    const currentScreenshot = screenshots[activeIndex];
    const Icon = currentScreenshot.icon;

    return (
        <section className="relative py-24 px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#ec547c]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#ed754f]/15 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                        {t('showcase.badge')}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                        {t('showcase.title')}
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('showcase.subtitle')}
                    </p>
                </div>

                {/* Main showcase */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Phone mockup */}
                    <div className="relative flex justify-center">
                        {/* Glow effect */}
                        <div
                            className="absolute inset-0 blur-3xl opacity-30 transition-colors duration-500"
                            style={{ backgroundColor: currentScreenshot.color }}
                        />

                        {/* Phone frame */}
                        <div className="relative">
                            {/* Phone bezel */}
                            <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                {/* Screen */}
                                <div className="relative bg-black rounded-[2.5rem] overflow-hidden w-[280px] h-[560px] sm:w-[300px] sm:h-[600px]">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />

                                    {/* Screenshot with transition */}
                                    <div className="relative w-full h-full">
                                        {screenshots.map((screenshot, idx) => (
                                            <img
                                                key={idx}
                                                src={screenshot.src}
                                                alt={screenshot.title}
                                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${idx === activeIndex
                                                    ? 'opacity-100 scale-100'
                                                    : 'opacity-0 scale-95'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Navigation arrows */}
                            <button
                                onClick={goPrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                aria-label="Previous screenshot"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={goNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                aria-label="Next screenshot"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Feature description */}
                    <div className="text-center lg:text-left">
                        {/* Icon */}
                        <div
                            className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-6 transition-colors duration-500"
                            style={{ backgroundColor: `${currentScreenshot.color}20` }}
                        >
                            <Icon className="w-8 h-8 transition-colors duration-500" style={{ color: currentScreenshot.color }} />
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 transition-all duration-300">
                            {currentScreenshot.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                            {currentScreenshot.description}
                        </p>

                        {/* Dots navigation */}
                        <div className="flex items-center gap-2 justify-center lg:justify-start mb-8">
                            {screenshots.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goTo(idx)}
                                    className={`transition-all duration-300 rounded-full ${idx === activeIndex
                                        ? 'w-8 h-2'
                                        : 'w-2 h-2 hover:bg-white/50'
                                        }`}
                                    style={{
                                        backgroundColor: idx === activeIndex ? currentScreenshot.color : 'rgba(255,255,255,0.3)'
                                    }}
                                    aria-label={`Go to screenshot ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="https://apps.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                        >
                            {t('showcase.cta')}
                        </a>
                    </div>
                </div>

                {/* Thumbnail strip */}
                <div className="mt-16 flex justify-center gap-3">
                    {screenshots.map((screenshot, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`relative rounded-xl overflow-hidden transition-all duration-300 ${idx === activeIndex
                                ? 'ring-2 ring-white scale-105 shadow-xl'
                                : 'opacity-50 hover:opacity-75'
                                }`}
                            aria-label={screenshot.title}
                        >
                            <img
                                src={screenshot.src}
                                alt={screenshot.title}
                                className="w-14 h-24 sm:w-16 sm:h-28 object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
