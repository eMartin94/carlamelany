'use client';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const GalleryCarousel = ({
  project,
  selectedImage,
  setSelectedImage,
}) => {
  const imageRef = useRef(null);

  const closeModal = () => {
    setSelectedImage(null);
    document.body.classList.remove('overflow-hidden');
  };

  const showPrev = () => {
    setSelectedImage((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : project.images.length - 1
    );
  };

  const showNext = () => {
    setSelectedImage((prevIndex) =>
      prevIndex < project.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { autoAlpha: 0, y: 20, scale: 0.8 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
  }, [selectedImage]);

  return (
    <div className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center'>
      <button
        onClick={closeModal}
        className='absolute top-4 right-4 text-white text-4xl font-bold cursor-pointer hover:text-accent'
      >
        &times;
      </button>
      <div className='relative w-full max-w-7xl h-[90vh] flex items-center justify-center'>
        <button
          onClick={showPrev}
          className='absolute left-4 text-white text-4xl px-2 cursor-pointer z-10 scale-100 hover:scale-150 transition-all duration-300 ease-out'
        >
          <IconChevronLeft size={30} />
        </button>
        <Image
          key={selectedImage}
          ref={imageRef}
          src={project.images[selectedImage]}
          alt={`Imagen ${selectedImage + 1}`}
          width={1000}
          height={800}
          className='w-[90vw] h-full object-contain'
          style={{ visibility: 'hidden' }}
        />
        <button
          onClick={showNext}
          className='absolute right-4 text-white text-4xl px-2 cursor-pointer z-10 scale-100 hover:scale-150 transition-all duration-300 ease-out'
        >
          <IconChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};
