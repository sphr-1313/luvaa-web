"use client";
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import { useI18n } from '../../components/I18nProvider';
import { Check, Sparkles, Crown, Zap, Info } from 'lucide-react';

export default function PricingPage() {
  const { t } = useI18n();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'credits'>('monthly');

  type Feature = {
    text: string;
    included: boolean;
    highlight?: string;
  };

  const subscriptionPlans = [
    {
      name: 'Free',
      price: '€0',
      period: '/month',
      description: 'Perfect for casual users exploring the app',
      features: [
        { text: t('pricing.free.items'), included: true },
        { text: t('pricing.free.credits'), included: true },
        { text: t('pricing.free.genie'), included: true },
        { text: t('pricing.free.ratings'), included: true },
      ] as Feature[],
      cta: 'Get Started',
      ctaLink: 'https://apps.apple.com/',
      popular: false,
      icon: Sparkles,
      color: 'gray',
      trial: false,
    },
    {
      name: 'Premium',
      price: '€11.99',
      period: '/month',
      description: 'For fashion enthusiasts who want more',
      features: [
        { text: t('pricing.premium.items'), included: true },
        { text: t('pricing.premium.credits'), included: true, highlight: t('pricing.premium.creditsNote') },
        { text: t('pricing.premium.genie'), included: true },
        { text: t('pricing.premium.ratings'), included: true },
      ] as Feature[],
      cta: 'Start Free Trial',
      ctaLink: 'https://apps.apple.com/',
      popular: true,
      icon: Crown,
      color: 'pink',
      trial: '3-day free trial',
    },
    {
      name: 'Pro',
      price: '€34.99',
      period: '/month',
      description: 'For power users and content creators',
      features: [
        { text: t('pricing.pro.items'), included: true },
        { text: t('pricing.pro.credits'), included: true, highlight: t('pricing.pro.creditsNote') },
        { text: t('pricing.pro.genie'), included: true },
        { text: t('pricing.pro.ratings'), included: true },
      ] as Feature[],
      cta: 'Start Free Trial',
      ctaLink: 'https://apps.apple.com/',
      popular: false,
      icon: Zap,
      color: 'orange',
      trial: '3-day free trial',
    },
  ];

  const creditPacks = [
    {
      name: '10 Credits',
      price: '€3.99',
      credits: 10,
      description: 'Perfect for trying it out',
      popular: false,
    },
    {
      name: '25 Credits',
      price: '€7.99',
      credits: 25,
      description: 'Best for seasonal styling',
      popular: true,
      savings: 'Save ~30%',
    },
    {
      name: '60 Credits',
      price: '€14.99',
      credits: 60,
      description: 'Maximum value for power users',
      popular: false,
      savings: 'Best Value (Save ~45%)',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#faf8f7] font-sans overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#ec547c]/10 to-[#ed754f]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-[#ed754f]/10 to-[#ec547c]/5 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#ec547c]/10 text-[#ec547c] rounded-full text-sm font-semibold mb-4">
            Simple Pricing
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start free, upgrade when you're ready. All plans include our core features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 p-1 bg-white rounded-full shadow-sm border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${billingCycle === 'monthly'
                ? 'bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Monthly Plans
            </button>
            <button
              onClick={() => setBillingCycle('credits')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${billingCycle === 'credits'
                ? 'bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Credit Packs
            </button>
          </div>
        </div>

        {/* Subscription Plans */}
        {billingCycle === 'monthly' && (
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {subscriptionPlans.map((plan, idx) => {
              const Icon = plan.icon;
              return (
                <div
                  key={idx}
                  className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${plan.popular
                    ? 'shadow-2xl scale-105 border-2 border-[#ec547c]'
                    : 'shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-gray-200'
                    }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.color === 'pink' ? 'bg-[#ec547c]/10' :
                    plan.color === 'orange' ? 'bg-[#ed754f]/10' :
                      'bg-gray-100'
                    }`}>
                    <Icon className={`w-7 h-7 ${plan.color === 'pink' ? 'text-[#ec547c]' :
                      plan.color === 'orange' ? 'text-[#ed754f]' :
                        'text-gray-600'
                      }`} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 text-lg">{plan.period}</span>
                  </div>

                  {/* Trial Badge */}
                  {plan.trial && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4">
                      <Check className="w-4 h-4" />
                      {plan.trial}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${feature.included ? 'bg-green-100' : 'bg-gray-100'
                          }`}>
                          <Check className={`w-3 h-3 ${feature.included ? 'text-green-600' : 'text-gray-400'
                            }`} />
                        </div>
                        <div>
                          <span className="text-gray-700">{feature.text}</span>
                          {feature.highlight && (
                            <span className="ml-2 text-xs text-[#ec547c] font-medium">
                              {feature.highlight}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all ${plan.popular
                      ? 'bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white shadow-lg shadow-[#ec547c]/25 hover:shadow-xl hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Credit Packs */}
        {billingCycle === 'credits' && (
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                <Info className="w-4 h-4" />
                Credits never expire • Use them anytime
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Buy credits once and use them whenever you want. Perfect for users who don't need a subscription.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {creditPacks.map((pack, idx) => (
                <div
                  key={idx}
                  className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${pack.popular
                    ? 'shadow-2xl scale-105 border-2 border-[#ec547c]'
                    : 'shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-gray-200'
                    }`}
                >
                  {/* Popular Badge */}
                  {pack.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                        BEST VALUE
                      </div>
                    </div>
                  )}

                  {/* Pack Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.name}</h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-5xl font-black text-gray-900">{pack.price}</span>
                  </div>

                  {/* Credits Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${pack.popular
                    ? 'bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white'
                    : 'bg-gray-100 text-gray-900'
                    }`}>
                    <Sparkles className="w-4 h-4" />
                    <span className="font-bold">{pack.credits} Credits</span>
                  </div>

                  {/* Savings */}
                  {pack.savings && (
                    <div className="text-sm font-semibold text-[#ec547c] mb-4">
                      {pack.savings}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{pack.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Never expires
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      One-time purchase
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Use anytime
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="https://apps.apple.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all ${pack.popular
                      ? 'bg-gradient-to-r from-[#ec547c] to-[#ed754f] text-white shadow-lg shadow-[#ec547c]/25 hover:shadow-xl hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                  >
                    Buy Credits
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-gray-600">See what's included in each subscription tier</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Free</th>
                    <th className="text-center py-4 px-6 font-semibold text-[#ec547c]">Premium</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 px-6 text-gray-700">{t('pricing.table.items')}</td>
                    <td className="py-4 px-6 text-center text-gray-600">20</td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-900">50</td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-900">150</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">{t('pricing.table.credits')}</td>
                    <td className="py-4 px-6 text-center text-gray-600">3</td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-900">30</td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-900">150</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">{t('pricing.table.genie')}</td>
                    <td className="py-4 px-6 text-center text-gray-600">5/{t('pricing.table.month')}</td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-900">50/{t('pricing.table.month')}</td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-900">100/{t('pricing.table.month')}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">{t('pricing.table.ratings')}</td>
                    <td className="py-4 px-6 text-center text-gray-600">5/{t('pricing.table.month')}</td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-900">50/{t('pricing.table.month')}</td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-900">150/{t('pricing.table.month')}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">Free Trial</td>
                    <td className="py-4 px-6 text-center text-gray-400">—</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                        <Check className="w-3 h-3" />
                        3 days
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                        <Check className="w-3 h-3" />
                        3 days
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700 font-semibold">Price</td>
                    <td className="py-4 px-6 text-center font-bold text-gray-900">Free</td>
                    <td className="py-4 px-6 text-center font-bold text-[#ec547c]">€11.99/mo</td>
                    <td className="py-4 px-6 text-center font-bold text-gray-900">€34.99/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes! You can cancel your subscription at any time from your account settings. You\'ll continue to have access until the end of your billing period.',
              },
              {
                q: 'Do credit packs really never expire?',
                a: 'Absolutely! Once you purchase a credit pack, those credits are yours forever. Use them whenever you want, at your own pace.',
              },
              {
                q: 'What happens after my free trial ends?',
                a: 'After your 3-day free trial, you\'ll be automatically charged for your chosen plan. You can cancel anytime during the trial without being charged.',
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Yes! You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {faq.q}
                  <span className="ml-4 text-[#ec547c] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-[#ec547c] to-[#ed754f] rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Style?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start with our free plan and upgrade when you're ready. No credit card required.
            </p>
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#ec547c] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
            >
              Download Free
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
