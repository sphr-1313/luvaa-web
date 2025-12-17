"use client";
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useI18n } from './I18nProvider';

export default function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale, availableLocales } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

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
  const linkClass = (href: string) => `inline-block pb-1 border-b-2 ${pathname === href ? 'border-[#ec547c] text-[#ec547c]' : 'border-transparent text-gray-700'} transition-colors`;
  return (
    <header className="w-full bg-white/80 border-b border-gray-100 fixed top-0 left-0 right-0 z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/luvaa-icon.svg" alt="Luvaa" className="h-10" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className={linkClass('/')} aria-current={pathname === '/' ? 'page' : undefined}>{t('nav.home')}</a>
          <a href="/pricing" className={linkClass('/pricing')} aria-current={pathname === '/pricing' ? 'page' : undefined}>{t('nav.pricing')}</a>
          <a href="/blog" className={linkClass('/blog')} aria-current={pathname === '/blog' ? 'page' : undefined}>{t('nav.blog')}</a>
          <a href="/about" className={linkClass('/about')} aria-current={pathname === '/about' ? 'page' : undefined}>{t('nav.about')}</a>
          <a href="/careers" className={linkClass('/careers')} aria-current={pathname === '/careers' ? 'page' : undefined}>{t('nav.careers')}</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://app.luvaa.app" className="bg-[#ed754f] text-white px-4 py-2 rounded-full text-sm">{t('cta.tryOnWeb')}</a>

          {/* Language selector for desktop - custom dropdown with flags */}
          <div ref={langRef} className="hidden md:block relative">
            <button
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={`Language, ${availableLocales.find((l) => l.code === locale)?.label || 'English'}`}
              onClick={() => setLangOpen((s) => !s)}
              className="flex items-center gap-2 border rounded px-2 py-1 text-sm bg-white">
              <span className="text-lg">
                {locale === 'en' ? '🇬🇧' : locale === 'nl' ? '🇳🇱' : locale === 'de' ? '🇩🇪' : locale === 'fr' ? '🇫🇷' : locale === 'tr' ? '🇹🇷' : ''}
              </span>
              <span className="text-sm">
                {availableLocales.find((l) => l.code === locale)?.label || 'EN'}
              </span>
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>

            {langOpen && (
              <ul role="listbox" aria-label="Select language" className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                {availableLocales.map((l) => (
                  <li key={l.code} role="option" aria-selected={locale === l.code}>
                    <button
                      onClick={() => { setLocale(l.code as any); setLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2 ${locale === l.code ? 'font-semibold' : ''}`}>
                      <span className="text-lg">
                        {l.code === 'en' ? '🇬🇧' : l.code === 'nl' ? '🇳🇱' : l.code === 'de' ? '🇩🇪' : l.code === 'fr' ? '🇫🇷' : l.code === 'tr' ? '🇹🇷' : ''}
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ec547c]"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden absolute right-6 top-full mt-2 w-[220px] bg-white border border-gray-100 rounded-lg shadow-lg z-50">
          <div className="flex flex-col p-3">
            <a href="/" onClick={() => setOpen(false)} className={`py-2 ${linkClass('/')}`}>{t('nav.home')}</a>
            <a href="/pricing" onClick={() => setOpen(false)} className={`py-2 ${linkClass('/pricing')}`}>{t('nav.pricing')}</a>
            <a href="/blog" onClick={() => setOpen(false)} className={`py-2 ${linkClass('/blog')}`}>{t('nav.blog')}</a>
            <a href="/about" onClick={() => setOpen(false)} className={`py-2 ${linkClass('/about')}`}>{t('nav.about')}</a>
            <a href="/careers" onClick={() => setOpen(false)} className={`py-2 ${linkClass('/careers')}`}>{t('nav.careers')}</a>

            {/* Language selector in mobile menu */}
            <div className="mt-2 pt-2 border-t">
              <label className="text-sm text-gray-600 mb-1 block">Language</label>
              <select aria-label="Language" value={locale} onChange={(e) => { setLocale(e.target.value as any); setOpen(false); }} className="w-full border rounded px-2 py-1 text-sm">
                {availableLocales.map((l) => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
