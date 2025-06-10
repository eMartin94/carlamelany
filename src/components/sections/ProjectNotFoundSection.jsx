'use client';
import { notFoundData } from '@/data/translations/es';
import { usePathname } from 'next/navigation';
import React from 'react';

export const ProjectNotFoundSection = () => {
  const pathname = usePathname();
  const projectSlug = pathname.split('/')[3];
  return (
    <section className='min-h-[80vh]'>
      <div className='w-full max-w-7xl px-4'>
        <h1 className='text-9xl font-black'>{notFoundData.titlePage}</h1>
        <h3>{notFoundData.descriptionProjectPage}</h3>
        <p className='my-8'>{notFoundData.message(projectSlug)}</p>
        <p>
          {notFoundData.comment}
          <a href='/' className='underline underline-offset-4'>
            {notFoundData.link}
          </a>
          .
        </p>
      </div>
    </section>
  );
};
