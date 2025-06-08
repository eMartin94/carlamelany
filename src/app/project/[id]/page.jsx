import { ProjectIdSection } from '@/components/sections/ProjectIdSection';

export default async function Project({ params }) {
  const { id } = await params;

  return <ProjectIdSection projectId={id} />;
}
