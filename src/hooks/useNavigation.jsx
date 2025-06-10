import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useNavigation = (setIsOpen) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === '/projects') {
      router.replace('/');
    }
  }, [pathname, router]);

  const handleProjectClick = async (e) => {
    e.preventDefault();
    setIsOpen(false);

    const scrollToProjects = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (pathname !== '/') {
      await router.push('/');
      setTimeout(scrollToProjects, 100);
    } else {
      scrollToProjects();
    }
  };
  return { pathname, handleProjectClick };
};
