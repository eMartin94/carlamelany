// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// export const ProjectCard = () => {
//   return (
//     <Link href={'/project/1'} className='block overflow-hidden mb-4 group'>
//       <div className='relative w-full h-[300px] overflow-hidden'>
//         <Image
//           src={'/img-hero.webp'}
//           alt='Imagen de un proyecto'
//           width={400}
//           height={300}
//           className='w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-500'
//         />
//       </div>
//       <div className='flex flex-col sm:flex-row gap-1 sm:gap-2 items-start sm:items-center my-2'>
//         <h4 className='text-sm font-bold'>
//           nombre del proyecto más larguísimo
//         </h4>
//         <p className='text-xs align-baseline'>
//           {Array.from({ length: 3 }, (_, i) => (
//             <span className='' key={i}>
//               {i > 0 && <span>/</span>}
//               <span className=''>tag {i + 1}</span>
//             </span>
//           ))}
//         </p>
//       </div>
//     </Link>
//   );
// };

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
    <div className='relative w-full h-[300px] overflow-hidden'>
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
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-2 items-start sm:items-center my-2'>
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
      <Link href={href} className={baseClass}>
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div onClick={onClick} className={`${baseClass} cursor-pointer`}>
        {content}
      </div>
    );
  }

  return <div className={baseClass}>{content}</div>;
};
