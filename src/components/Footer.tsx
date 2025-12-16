import React from 'react';
import { useI18n } from './I18nProvider';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-100 bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex-1">
          <a href="/" className="flex items-center gap-3 mb-4 inline-block">
            <img src="/luvaa-icon.svg" alt="Luvaa" className="h-10" />
          </a>
          <p className="text-sm text-gray-600 max-w-sm">Luvaa helps you organize your wardrobe, find outfit inspiration, and sell your pieces — all from your phone.</p>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Company</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="/about" className="hover:underline">{t('footer.company.about')}</a></li>
              <li><a href="/careers" className="hover:underline">{t('footer.company.careers')}</a></li>
              <li><a href="/press" className="hover:underline">{t('footer.company.press')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Product</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="/pricing" className="hover:underline">{t('footer.product.pricing')}</a></li>
              <li><a href="/blog" className="hover:underline">{t('footer.product.blog')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Legal</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="/privacy" className="hover:underline">{t('footer.legal.privacy')}</a></li>
              <li><a href="/terms" className="hover:underline">{t('footer.legal.terms')}</a></li>
              <li><a href="/contact" className="hover:underline">{t('footer.legal.contact')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>{t('footer.copyright', { year })}</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="https://twitter.com" aria-label="twitter" className="hover:underline">Twitter</a>
            <a href="https://instagram.com" aria-label="instagram" className="hover:underline">Instagram</a>
            <a href="https://facebook.com" aria-label="facebook" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
