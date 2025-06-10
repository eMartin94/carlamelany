'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = ({ aboutData }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const elements = aboutRef.current.children;
    const tl = gsap.timeline();
    tl.fromTo(
      elements[1],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }
    );
    tl.fromTo(
      elements[2],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' },
      '-=0.5'
    );
  }, []);

  return (
    <section>
      <div className='w-full max-w-7xl flex flex-col gap-4 px-4' ref={aboutRef}>
        <div className='w-full flex justify-center items-center mb-8'>
          <Image
            src={aboutData.imagePage}
            alt={aboutData.titlePage}
            width={800}
            height={500}
            className='w-full max-h-[200px] sm:max-h-[400px] object-cover'
          />
        </div>
        <h3>{aboutData.titlePage}</h3>
        <p className='mt-4'>{aboutData.descriptionPage}</p>
      </div>
    </section>
  );
};
