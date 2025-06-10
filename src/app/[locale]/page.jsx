import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { getDictionary } from '@/libs/dictionaries';

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <HeroSection heroData={dict.heroData} />
      <ProjectsSection projectData={dict.projectData} locale={locale} />
    </>
  );
}
