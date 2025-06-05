import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full bg-white'>
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
