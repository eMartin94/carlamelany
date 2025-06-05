'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current.children;
    const tl = gsap.timeline();
    tl.fromTo(
      elements[0],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }
    );
    tl.fromTo(
      elements[1],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' },
      '-=0.5'
    );
  }, []);

  return (
    <div className='w-full h-screen bg-hero hero flex flex-col items-center justify-center bg-no-repeat bg-contain bg-position-[right_90%] pb-60 lg:pb-0'>
      <div
        className='w-full max-w-7xl px-4 flex flex-col justify-center'
        ref={heroRef}
      >
        <h2 className='text-3xl sm:text-5xl lg:text-6xl font-black w-full lg:w-1/2 lg:max-w-md opacity-0'>
          Transformando bocetos en espacios habitables.
        </h2>
        <p className='w-full lg:w-1/2 mt-8 lg:max-w-md opacity-0'>
          Desde la idea inicial hasta el último detalle, cada diseño busca
          funcionalidad, estética y armonía con su entorno.
        </p>
      </div>
    </div>
  );
};
