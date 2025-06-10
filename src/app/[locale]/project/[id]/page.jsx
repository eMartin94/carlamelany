import { ProjectIdSection } from '@/components/sections/ProjectIdSection';
import { getDictionary } from '@/libs/dictionaries';

export default async function Project({ params }) {
  const { id, locale } = await params;
  const dict = await getDictionary(locale);

  return <ProjectIdSection projectData={dict.projectData} projectId={id} />;
}
