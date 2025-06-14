import React from 'react';
import Link from 'next/link';
import { socialLinks } from '@/constants';
import { useNavigation } from '@/hooks/useNavigation';

export const MenuOverlay = ({
  overlayRef,
  menuItemsRef,
  subNavRef,
  onLinkClick,
  setIsOpen,
  navLinks,
  locale,
}) => {
  const { pathname, handleProjectClick } = useNavigation(setIsOpen);

  return (
    <div
      ref={overlayRef}
      className='fixed top-0 left-0 w-full h-full flex bg-primary overlay will-change-transform z-20'
    >
      <div className='fixed top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center'>
        {navLinks.map((link, index) => {
          const isProjects =
            link.path === `/${locale}/projects` ||
            link.path === `/${locale}/#projects`;
          const isActive =
            (isProjects && pathname === `/${locale}`) || link.path === pathname;
          return (
            <div
              key={link.name}
              className='menu-item flex cursor-pointer text-alternative mix-blend-difference'
            >
              <p
                id={isActive ? 'active' : ''}
                className='relative text-center text-[8vw] leading-[110%] font-bold will-change-transform'
                ref={(el) => (menuItemsRef.current[index] = el)}
              >
                {link.path === `/${locale}/projects` ||
                link.path === `/${locale}/#projects` ? (
                  <a href={`/${locale}/#projects`} onClick={handleProjectClick}>
                    {link.name}
                  </a>
                ) : (
                  <Link href={link.path} onClick={onLinkClick}>
                    {link.name}
                  </Link>
                )}
              </p>
            </div>
          );
        })}
      </div>

      <div
        ref={subNavRef}
        className='absolute bottom-[2%] left-1/2 -translate-x-1/2 flex gap-2 opacity-0'
      >
        {socialLinks.map((link, index) => (
          <React.Fragment key={link.name}>
            {index > 0 && <span className='text-white text-sm'>|</span>}
            <p className='text-white text-sm hover:text-secondary'>
              <Link
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1'
                onClick={onLinkClick}
              >
                <link.icon />
                <span className='hidden md:flex'>{link.name}</span>
              </Link>
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
