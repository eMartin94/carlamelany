'use client';

import { socialLinks } from '@/constants';
import { useNavigation } from '@/hooks/useNavigation';
import { currentYear } from '@/libs/date';
import Link from 'next/link';
import React from 'react';

export const Footer = ({ footerData, navLinks, currentLocale }) => {
  const { pathname, handleProjectClick } = useNavigation(() => false);
  return (
    <div className='w-full flex flex-col justify-center items-center mt-8 border-t-[1px] border-gray-300'>
      <div className='w-full flex flex-col items-center max-w-7xl justify-center pt-16 pb-20 px-4'>
        <div className='w-full flex flex-col sm:flex-row justify-between'>
          <div className='flex flex-col gap-4 w-full sm:w-1/2 mb-8 sm:mb-0'>
            <Link href={`/${currentLocale}`} className='font-bold text-2xl'>
              carlamelany
            </Link>
            <p className='w-full sm:w-3/5 text-xs lg:text-sm'>
              {footerData.descriptionPage}
            </p>
          </div>
          <div className='flex flex-col sm:flex-row justify-between w-1/2 gap-6'>
            <div>
              <strong className='text-sm lg:text-base'>
                {footerData.menuTitle}
              </strong>
              <div className='mt-4 flex flex-col gap-1'>
                {navLinks.map((link) => {
                  const isProjects =
                    link.path === `/${currentLocale}/projects` ||
                    link.path === `/${currentLocale}/#projects`;
                  const isActive =
                    (isProjects && pathname === '/') || link.path === pathname;
                  return (
                    <React.Fragment key={link.name}>
                      {link.path === `/${currentLocale}/projects` ||
                      link.path === `/${currentLocale}/#projects` ? (
                        <a
                          href={`/${currentLocale}/#projects`}
                          className='text-xs lg:text-sm text-primary hover:text-accent'
                          onClick={handleProjectClick}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.path}
                          className='text-xs lg:text-sm text-primary hover:text-accent'
                        >
                          {link.name}
                        </Link>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div>
              <strong className='text-sm lg:text-base'>
                {footerData.contacTitle}
              </strong>
              <div className='flex flex-col gap-1 mt-4'>
                <p className='text-xs lg:text-sm text-primary'>
                  +51 987 654 321
                </p>
                <p className='text-xs lg:text-sm text-primary'>
                  carlamelany@gmail.com
                </p>
              </div>
            </div>
            <div>
              <strong className='text-sm lg:text-base'>
                {footerData.followTitle}
              </strong>
              <div className='flex flex-col gap-1 mt-4'>
                {socialLinks.map((link) => (
                  <React.Fragment key={link.name}>
                    <Link
                      href={link.url}
                      className='text-primary text-xs lg:text-sm hover:text-accent'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <link.icon className='w-4 h-4 inline-block mr-2' />
                      <span>{link.name}</span>
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center border-t-[1px] border-gray-300 py-4'>
        <div className='w-full flex flex-col sm:flex-row justify-between max-w-7xl px-4 gap-4 text-center'>
          <span className='text-sm'>© {currentYear} Carlamelany</span>
          <span className='text-sm'>Created by: eMartinDev</span>
        </div>
      </div>
    </div>
  );
};
