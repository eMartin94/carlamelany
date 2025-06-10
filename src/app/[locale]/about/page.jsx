import { AboutSection } from '@/components/sections/AboutSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { getDictionary } from '@/libs/dictionaries';

export default async function About({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <>
      <AboutSection aboutData={dict.aboutData} />
      <AchievementsSection achievementsData={dict.achievementsData} />
    </>
  );
}
