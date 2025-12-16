"use client";
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ApplyForm from '../../../components/ApplyForm';

type RoleInfo = {
  title: string;
  summary: string;
  seniority?: string;
  location?: string;
  responsibilities: string[];
  expectations?: string[];
  qualifications?: string[];
  benefits?: string[];
};

const roleDetails: Record<string, RoleInfo> = {
  'frontend-engineer': {
    title: 'Frontend Engineer (React/Next.js)',
    seniority: 'Mid — Senior',
    location: 'Remote',
    summary: 'You will build beautiful, high-performance web experiences. Own components, interactions, performance, and accessibility for Luvaa’s web app.',
    responsibilities: [
      'Design and implement responsive, accessible UI components in React/Next.js',
      'Collaborate with product and design to ship polished features',
      'Optimize rendering performance and bundle size',
      'Write tests and maintain a strong component library'
    ],
    expectations: [
      'Ship high-quality UI regularly and iterate based on user feedback',
      'Mentor junior engineers and improve front-end processes',
    ],
    qualifications: [
      '3+ years building React apps',
      'Familiarity with Next.js and SSR/SSG concepts',
      'Strong CSS and accessibility knowledge',
    ],
    benefits: ['Competitive salary, remote-first, flexible hours', 'Health stipend', 'Learning budget and conferences']
  },
  'mobile-engineer': {
    title: 'Mobile Engineer (React Native / iOS / Android)',
    seniority: 'Mid — Senior',
    location: 'Remote',
    summary: 'Build delightful native-feeling mobile experiences. You will work on the primary Luvaa mobile app, camera/upload flows, and performance.',
    responsibilities: [
      'Develop and maintain React Native codebase (or native modules as needed)',
      'Implement camera/photo upload flows and optimize image handling',
      'Improve offline-first behavior and sync logic',
      'Collaborate on CI/CD for mobile releases'
    ],
    expectations: [
      'Deliver performant, battery-friendly mobile features',
      'Prototype and validate UX hypotheses with the product team'
    ],
    qualifications: [
      '2+ years building mobile apps (React Native preferred)',
      'Experience with camera APIs and binary uploads',
    ],
    benefits: ['Device stipend, flexible schedule', 'Health stipend', 'Remote-friendly team']
  },
  'ml-engineer': {
    title: 'Machine Learning Engineer (Recommendation Systems)',
    seniority: 'Mid — Senior',
    location: 'Remote',
    summary: 'Design and build recommendation models that personalize outfit suggestions and improve search relevance using embeddings and retrieval techniques.',
    responsibilities: [
      'Research and implement recommendation algorithms',
      'Build scalable offline and online evaluation pipelines',
      'Collaborate with product to define success metrics and A/B tests'
    ],
    expectations: [
      'Move quickly from prototype to production-ready models',
      'Communicate trade-offs and help prioritize experiments'
    ],
    qualifications: [
      'Experience with recommendation systems, embeddings, or retrieval',
      'Familiarity with Python ML stack (PyTorch, TensorFlow, scikit-learn)'
    ],
    benefits: ['Research budget, access to compute resources', 'Flexible remote work']
  },
  'product-designer': {
    title: 'Product Designer (Mobile-first Experiences)',
    seniority: 'Mid',
    location: 'Remote',
    summary: 'Craft mobile-first experiences and design systems that scale. You will work closely with engineering to prototype and ship polished interfaces.',
    responsibilities: [
      'Design mobile UI patterns and interaction flows',
      'Create prototypes and iterate with user testing',
      'Develop and maintain a design system and component library'
    ],
    expectations: [
      'Deliver pixel-perfect designs that are implementable',
      'Facilitate user research and synthesize findings'
    ],
    qualifications: [
      'Portfolio of mobile-first product work',
      'Proficiency in Figma or similar tools'
    ],
    benefits: ['Design tools stipend, conference budget', 'Remote-first culture']
  }
};

export default function RolePage() {
  const params = useParams();
  const slug = String(params?.slug || '');
  const info = roleDetails[slug] || { title: 'Role', summary: 'Role details coming soon.', responsibilities: [] };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold mb-4">{info.title}</h1>
        {/* role meta */}
        <p className="text-lg text-gray-700 mb-6">{info.summary}</p>
        <div className="flex flex-col gap-8">
          <section>
            <h3 className="text-xl font-bold mb-2">Responsibilities</h3>
            <p className="text-gray-700 mb-3">These are the core day-to-day responsibilities for this role. You will work closely with product and engineering teams to deliver high-quality features.</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {info.responsibilities.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </section>

          {info.expectations && (
            <section>
              <h3 className="text-xl font-bold mb-2">What we expect</h3>
              <p className="text-gray-700 mb-3">We look for candidates who can move from idea to production quickly and collaborate effectively across disciplines.</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                {info.expectations.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </section>
          )}

          {info.qualifications && (
            <section>
              <h3 className="text-xl font-bold mb-2">Qualifications</h3>
              <p className="text-gray-700 mb-3">Ideal candidates will have the following background and skills.</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                {info.qualifications.map((q) => <li key={q}>{q}</li>)}
              </ul>
            </section>
          )}

          {info.benefits && (
            <section>
              <h3 className="text-xl font-bold mb-2">Benefits</h3>
              <p className="text-gray-700 mb-3">We offer thoughtful benefits to support your work and growth.</p>
              <ul className="list-disc pl-6 text-gray-700">
                {info.benefits.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </section>
          )}
        </div>

        <ApplyForm roleTitle={info.title} />
      </main>
      <Footer />
    </div>
  );
}
