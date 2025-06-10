'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectCard = ({
  imageSrc,
  imageAlt = 'Imagen del proyecto',
  href = null,
  onClick = null,
  title = '',
  tags = [],
  showInfo = true,
  hoverZoom = true,
  className = '',
  imageClassName = '',
}) => {
  const image = (
    <div className='relative w-full max-h-[400px] overflow-hidden'>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={600}
        height={400}
        className={`w-full h-full object-cover transition-all duration-500 ${
          hoverZoom ? 'group-hover:scale-110 scale-100' : ''
        } ${imageClassName}`}
      />
    </div>
  );

  const content = (
    <>
      {image}
      {showInfo && (
        <div className='flex flex-col lg:flex-row gap-1 sm:gap-2 items-start lg:items-center my-2'>
          <h4 className='text-sm font-bold truncate'>{title}</h4>
          <p className='text-xs'>
            {tags.map((tag, i) => (
              <span key={i}>
                {i > 0 && <span className='mx-1'>/</span>}
                <span>{tag}</span>
              </span>
            ))}
          </p>
        </div>
      )}
    </>
  );

  const baseClass = `block overflow-hidden cursor-pointer group ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`mb-4 saturate-50 hue-rotate-15 ${baseClass}`}
      >
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div onClick={onClick} className={`${baseClass}`}>
        {content}
      </div>
    );
  }

  return <div className={baseClass}>{content}</div>;
};
