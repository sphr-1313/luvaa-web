"use client";
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useI18n } from './I18nProvider';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

export default function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale, availableLocales } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  // Track scroll for header background
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLangOpen(false);
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/about', label: t('nav.about') },
    { href: '/careers', label: t('nav.careers') },
  ];

  const flags: Record<string, string> = {
    en: '🇬🇧',
    nl: '🇳🇱',
    de: '🇩🇪',
    fr: '🇫🇷',
    tr: '🇹🇷',
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/luvaa-icon.svg"
              alt="Luvaa"
              className="h-10 group-hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                    ? 'text-[#ec547c]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ec547c]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector - Desktop */}
            <div ref={langRef} className="hidden lg:block relative">
              <button
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label={`Language: ${availableLocales.find((l) => l.code === locale)?.label || 'English'}`}
                onClick={() => setLangOpen((s) => !s)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${langOpen
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-100/80 hover:text-gray-900'
                  }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-lg leading-none">{flags[locale]}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <ul role="listbox" aria-label="Select language" className="py-2">
                    {availableLocales.map((l) => (
                      <li key={l.code} role="option" aria-selected={locale === l.code}>
                        <button
                          onClick={() => { setLocale(l.code); setLangOpen(false); }}
                          className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${locale === l.code
                            ? 'bg-[#ec547c]/5 text-[#ec547c]'
                            : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                          <span className="text-xl">{flags[l.code]}</span>
                          <span className={`text-sm ${locale === l.code ? 'font-semibold' : 'font-medium'}`}>
                            {l.label}
                          </span>
                          {locale === l.code && (
                            <span className="ml-auto w-2 h-2 rounded-full bg-[#ec547c]" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-[#ec547c]/25 hover:shadow-xl hover:shadow-[#ec547c]/30 hover:scale-105 transition-all duration-200"
            >
              {t('cta.download')}
            </a>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {open ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <div className="max-w-lg mx-auto px-6 py-8">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-lg font-medium transition-all ${isActive
                      ? 'bg-[#ec547c]/10 text-[#ec547c]'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Language Selector - Mobile */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3 px-4">{t('nav.language') || 'Language'}</p>
              <div className="grid grid-cols-2 gap-2">
                {availableLocales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLocale(l.code); setOpen(false); }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${locale === l.code
                      ? 'bg-[#ec547c]/10 text-[#ec547c]'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <span className="text-xl">{flags[l.code]}</span>
                    <span className={`text-sm ${locale === l.code ? 'font-semibold' : ''}`}>
                      {l.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button - Mobile */}
            <div className="mt-8">
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white px-6 py-4 rounded-2xl text-lg font-semibold shadow-lg"
              >
                {t('cta.download')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
