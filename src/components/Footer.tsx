"use client";
import React from 'react';
import { useI18n } from './I18nProvider';
import { ArrowRight, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ec547c]/20 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#ed754f]/15 to-transparent rounded-full blur-3xl opacity-50" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <a href="/" className="inline-block mb-6">
                <img src="/luvaa-icon.svg" alt="Luvaa" className="h-12 brightness-0 invert" />
              </a>
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-8">
                Your personal fashion companion. Rate outfits, discover your style, and dress with confidence.
              </p>

              {/* App Download Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl transition-all duration-200"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-sm font-medium">App Store</span>
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl transition-all duration-200"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span className="text-sm font-medium">Google Play</span>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {/* Company */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Company</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        {t('footer.company.about')}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        {t('footer.company.careers')}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                    <li>
                      <a href="/press" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        {t('footer.company.press')}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Product */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Product</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/pricing" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        {t('footer.product.pricing')}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        {t('footer.product.blog')}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                    <li>
                      <a href="/#features" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        {t('footer.product.features')}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Legal</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/privacy" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        {t('footer.legal.privacy')}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        {t('footer.legal.terms')}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                        {t('footer.legal.contact')}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {year} Luvaa. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/luvaaapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ec547c] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/luvaaapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#ec547c] hover:to-[#ed754f] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@luvaaapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-gray-900 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
