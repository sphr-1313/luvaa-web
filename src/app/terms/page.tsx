"use client";
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-white font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Terms of Service</h1>
        <p className="text-gray-600 mb-8">
          Terms of Service for Luvaa<br />
          Last Updated: January 5, 2026
        </p>

        <div className="max-w-none text-gray-700 space-y-12">
          <section>
            <p className="leading-relaxed text-lg">By downloading or using the Luvaa mobile application, these terms automatically apply to you. Please read them carefully before using the App.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">1</span>
              Use of the Service
            </h2>
            <div className="pl-11">
              <ul className="list-disc space-y-2 ml-4">
                <li>You must be at least 13 years old to use Luvaa.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree not to use the App for any illegal or unauthorized purpose.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">2</span>
              User Content and License
            </h2>
            <div className="space-y-4 pl-11">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ownership:</h3>
                <p className="leading-relaxed">You retain all ownership rights to the photos you upload to Luvaa.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">License to Luvaa:</h3>
                <p className="leading-relaxed">By uploading content, you grant Luvaa a worldwide, non-exclusive, royalty-free license to use, host, and process your photos solely for the purpose of providing the App's features (such as AI background removal and outfit generation).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">3</span>
              Prohibited Content
            </h2>
            <div className="pl-11">
              <p className="mb-4 leading-relaxed">You may not upload or share content that:</p>
              <ul className="list-disc space-y-2 ml-4">
                <li>Is sexually explicit or pornographic.</li>
                <li>Contains hate speech or promotes violence.</li>
                <li>Infringes on the intellectual property rights (copyrights/trademarks) of others.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">4</span>
              AI Disclaimer
            </h2>
            <div className="pl-11">
              <p className="leading-relaxed text-gray-700 bg-blue-50/50 p-4 rounded-lg border border-blue-100">The "Studio" feature utilizes Artificial Intelligence to generate visualizations. While we strive for realism, Luvaa does not guarantee 100% accuracy of colors, fit, or textures. Generated images are for visualization and inspiration purposes only.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">5</span>
              Subscriptions and Payments
            </h2>
            <div className="pl-11">
              <ul className="list-disc space-y-2 ml-4">
                <li>Certain features may require a paid subscription or "AI Credits."</li>
                <li>Payments are processed via Apple App Store or Google Play Store.</li>
                <li>Refunds are subject to the terms of the respective App Store.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">6</span>
              Limitation of Liability
            </h2>
            <div className="pl-11">
              <p className="leading-relaxed">Luvaa and its creators shall not be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use the App.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">7</span>
              Changes to These Terms
            </h2>
            <div className="pl-11">
              <p className="leading-relaxed">We reserve the right to update these terms at any time. Your continued use of the App after changes constitute acceptance of the new terms.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">8</span>
              Contact Us
            </h2>
            <div className="pl-11">
              <p className="leading-relaxed">
                For any questions regarding these terms, please contact: <br />
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

