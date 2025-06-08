'use client';

import { navLinks, socialLinks } from '@/constants';
import { useNavigation } from '@/hooks/useNavigation';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  const { pathname, handleProjectClick } = useNavigation(() => false);
  return (
    <div className='w-full flex flex-col justify-center items-center mt-8 border-t-[1px] border-gray-300'>
      <div className='w-full flex flex-col items-center max-w-7xl justify-center pt-16 pb-20 px-4'>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='flex flex-col gap-4 w-full sm:w-1/2 mb-8 sm:mb-0'>
            <Link href='/' className='font-bold text-2xl'>
              carlamelany
            </Link>
            <p className='w-full sm:w-3/5 text-xs lg:text-sm'>
              Diseñando espacios con creatividad y propósito, desde el primer
              boceto hasta la realidad.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row justify-between w-1/2 gap-6'>
            <div>
              <strong className='text-sm lg:text-base'>menú</strong>
              <div className='mt-4 flex flex-col gap-1'>
                {navLinks.map((link) => {
                  const isProjects =
                    link.path === '/projects' || link.path === '/#projects';
                  const isActive =
                    (isProjects && pathname === '/') || link.path === pathname;
                  return (
                    <React.Fragment key={link.name}>
                      {link.path === '/projects' ||
                      link.path === '/#projects' ? (
                        <a href='/#projects' onClick={handleProjectClick}>
                          {link.name}
                        </a>
                      ) : (
                        <Link href={link.path}>{link.name}</Link>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div>
              <strong className='text-sm lg:text-base'>contáctame</strong>
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
              <strong className='text-sm lg:text-base'>sígueme en:</strong>
              <div className='flex flex-col gap-1 mt-4'>
                {socialLinks.map((link) => (
                  <React.Fragment key={link.name}>
                    <Link
                      href={link.url}
                      className='text-primary text-xs lg:text-sm hover:text-secondary'
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
          <span className='text-sm'>© 2025 Carlamelany</span>
          <span className='text-sm'>Created by: eMartinDev</span>
        </div>
      </div>
    </div>
  );
};
