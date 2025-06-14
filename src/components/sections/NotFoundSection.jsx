import { notFoundData } from '@/data/translations/es';
import React from 'react';

export const NotFoundSection = () => {
  return (
    <section className='min-h-[80vh]'>
      <div className='w-full max-w-7xl px-4'>
        <h1 className='text-9xl font-black'>{notFoundData.titlePage}</h1>
        <h3>{notFoundData.descriptionPage}</h3>
        <p className='my-8'>{notFoundData.paragraph}</p>
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
