import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useNavigation = (setIsOpen) => {
  const pathname = usePathname();
  const router = useRouter();

  const locale = pathname?.split('/')[1] || 'en';

  useEffect(() => {
    if (pathname === `/${locale}/projects`) {
      router.replace(`/${locale}`);
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

    if (pathname !== `/${locale}`) {
      await router.push(`/${locale}`);
      setTimeout(scrollToProjects, 100);
    } else {
      scrollToProjects();
    }
  };
  return { pathname, handleProjectClick };
};
