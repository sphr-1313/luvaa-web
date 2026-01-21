import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Fashion tips, style guides, outfit inspiration, and updates from Luvaa. Learn how to dress better with smart insights.',
    openGraph: {
        title: 'Luvaa Blog – Fashion Tips & Style Guides',
        description: 'Expert fashion tips, outfit inspiration, and styling insights.',
        url: 'https://www.luvaa.app/blog',
    },
    alternates: {
        canonical: 'https://www.luvaa.app/blog',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
