import { Space_Mono } from 'next/font/google';
import '../styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

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

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${spaceMono.className} antialiased`}>
        <Header />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
