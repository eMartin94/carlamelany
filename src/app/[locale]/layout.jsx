import { Space_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { getDictionary } from '@/libs/dictionaries';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Carla Melany | Architecture Portfolio',
  description:
    'Carla Melany is an architect with a passion for sustainable design and innovative solutions. Explore her portfolio showcasing her architectural projects and designs.',
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${spaceMono.className} antialiased`}>
        <Header headerData={dict.navLinks} currentLocale={locale} />
        <main className='flex flex-col items-center justify-center w-full bg-white'>
          {children}
        </main>
        <ScrollToTopButton />
        <Footer
          footerData={dict.footerData}
          navLinks={dict.navLinks}
          currentLocale={locale}
        />
      </body>
    </html>
  );
}
