import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ProjectCard = () => {
  return (
    <Link href={''} className='block overflow-hidden mb-4 group'>
      <div className='relative w-full h-[300px] overflow-hidden'>
        <Image
          src={'/img-hero.webp'}
          alt='Imagen de un proyecto'
          width={400}
          height={300}
          className='w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-500'
        />
      </div>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-2 items-start sm:items-center my-2'>
        <h4 className='text-sm font-bold'>
          nombre del proyecto más larguísimo
        </h4>
        <p className='text-xs align-baseline'>
          {Array.from({ length: 3 }, (_, i) => (
            <span className='' key={i}>
              {i > 0 && <span>/</span>}
              <span className=''>tag {i + 1}</span>
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
};
