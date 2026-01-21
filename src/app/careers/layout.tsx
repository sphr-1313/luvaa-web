import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers',
    description: 'Join the Luvaa team! We\'re hiring passionate designers, engineers, and fashion enthusiasts. Remote-first company building the future of fashion.',
    openGraph: {
        title: 'Careers at Luvaa – Join Our Team',
        description: 'Work remotely with a passionate team building the future of fashion.',
        url: 'https://www.luvaa.app/careers',
    },
    alternates: {
        canonical: 'https://www.luvaa.app/careers',
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
