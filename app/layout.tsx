import type {Metadata} from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { TransitionProvider } from '@/components/TransitionProvider';
import { LoadingScreen } from '@/components/LoadingScreen';
import { cookies } from 'next/headers';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: {
    default: 'Gemayel Abdad Rakadiansyah | Creative Developer',
    template: '%s | Gemayel Abdad Rakadiansyah'
  },
  description: 'Portfolio of Gemayel Abdad Rakadiansyah - Creative Developer & Product Designer blending design, code, and problem-solving to create purposeful digital experiences.',
  keywords: ['Creative Developer', 'Front-End Developer', 'Fullstack Developer', 'Product Designer', 'Gemayel Abdad Rakadiansyah', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Gemayel Abdad Rakadiansyah' }],
  creator: 'Gemayel Abdad Rakadiansyah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Gemayel Abdad Rakadiansyah | Creative Developer',
    description: 'Portfolio of Gemayel Abdad Rakadiansyah - Creative Developer & Product Designer blending design, code, and problem-solving to create purposeful digital experiences.',
    siteName: 'Gemayel Abdad Rakadiansyah',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemayel Abdad Rakadiansyah | Creative Developer',
    description: 'Portfolio of Gemayel Abdad Rakadiansyah - Creative Developer & Product Designer.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const cookieStore = await cookies();
  const hasVisited = cookieStore.has('hasVisited');

  return (
    <html lang="en">
      <body className="antialiased selection:bg-brand-orange/20 selection:text-brand-orange" suppressHydrationWarning>
        <LoadingScreen initialHasVisited={hasVisited} />
        <TransitionProvider>
          <SmoothScroll />
          {children}
        </TransitionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
