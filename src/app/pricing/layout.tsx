import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Luvaa subscription plans and credit packs. Free tier available with premium options starting at €11.99/month. Get smart outfit suggestions, style ratings, and more.',
    openGraph: {
        title: 'Luvaa Pricing – Plans & Credits',
        description: 'Choose the perfect Luvaa plan for you. Free tier with premium and pro options available.',
        url: 'https://www.luvaa.app/pricing',
    },
    alternates: {
        canonical: 'https://www.luvaa.app/pricing',
    },
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
