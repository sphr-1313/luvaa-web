"use client";
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-white font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">
          Privacy Policy for Luvaa<br />
          Last Updated: January 5, 2026
        </p>

        <div className="max-w-none text-gray-700 space-y-12">
          <section>
            <p className="leading-relaxed text-lg">Luvaa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">1</span>
              Information We Collect
            </h2>
            <div className="space-y-4 pl-11">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Account Information:</h3>
                <p className="leading-relaxed">When you sign up via Email, Google, or Apple, we collect your name, email address, and profile picture.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">User Content:</h3>
                <p className="leading-relaxed">We collect the photos of clothing items and outfits you upload to your "Digital Closet" or "Studio."</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Usage Data:</h3>
                <p className="leading-relaxed">We use Firebase Analytics and RevenueCat to collect information on how you interact with the App, including device information, crash reports, and subscription status.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Advertising ID:</h3>
                <p className="leading-relaxed">On Android, we may collect the Google Advertising ID for analytics and internal performance tracking only.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">2</span>
              How We Use Your Information
            </h2>
            <div className="space-y-4 pl-11">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">To provide the Service:</h3>
                <p className="leading-relaxed">Including managing your digital closet and synchronizing your data across devices using Supabase.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">AI Processing:</h3>
                <p className="leading-relaxed">When you use the "Studio" feature, photos of your clothing are processed by third-party AI providers (such as Fashn.ai or Pixelcut) to generate outfit visualizations.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Communication:</h3>
                <p className="leading-relaxed">To send you technical notices, updates, and security alerts.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">3</span>
              Data Sharing and Disclosure
            </h2>
            <div className="pl-11">
              <p className="mb-4 leading-relaxed">We do not sell your personal data. We share information only with:</p>
              <ul className="list-disc space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Supabase (Database/Auth), Firebase (Analytics/Cloud Functions), RevenueCat (Subscriptions), and AI processing partners.</li>
                <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">4</span>
              Data Security
            </h2>
            <div className="pl-11">
              <p className="leading-relaxed">We implement industry-standard security measures to protect your data. Images are stored in secure cloud storage with restricted access through Row Level Security (RLS).</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">5</span>
              Your Rights and Data Deletion
            </h2>
            <div className="space-y-4 pl-11">
              <p className="leading-relaxed">You can access, update, or delete your data at any time:</p>
              <ul className="list-disc space-y-2 ml-4">
                <li><strong>Account Deletion:</strong> You can delete your entire account and all associated data directly within the "Settings" section of the App.</li>
                <li><strong>Content Removal:</strong> You can delete individual photos or outfits at any time.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">6</span>
              Children's Privacy
            </h2>
            <div className="pl-11">
              <p className="leading-relaxed">Luvaa is not intended for children under 13. We do not knowingly collect data from children.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">7</span>
              Contact Us
            </h2>
            <div className="pl-11">
              <p className="leading-relaxed">
                If you have questions about this policy, please contact us at: <br />
                <a href="mailto:support@luvaa.app" className="text-[#ec547c] hover:underline font-semibold mt-2 inline-block">support@luvaa.app</a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

