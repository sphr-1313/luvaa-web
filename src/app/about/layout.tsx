import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Luvaa – the fashion app born from a closet crisis. Meet our passionate team building the future of personal styling for 10K+ users worldwide.',
    openGraph: {
        title: 'About Luvaa – Our Story & Mission',
        description: 'Discover how Luvaa is redefining personal fashion. Join 10K+ users in 50+ countries.',
        url: 'https://www.luvaa.app/about',
    },
    alternates: {
        canonical: 'https://www.luvaa.app/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
