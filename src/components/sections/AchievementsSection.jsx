'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AchievementsSection = () => {
  const titleRef = useRef(null);
  const achievementsRef = useRef([]);

  useEffect(() => {
    const title = titleRef.current;
    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: title,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    const elements = achievementsRef.current;
    elements.forEach((achievement, i) => {
      if (!achievement) return;
      gsap.fromTo(
        achievement,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.15,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: achievement,
            start: 'top 100%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);
  return (
    <section>
      <div className='w-full max-w-7xl flex flex-col gap-4 px-4'>
        <h3 className='text-center' ref={titleRef}>
          Estudios y logros
        </h3>
        <div className='w-full mt-8'>
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className='flex flex-col sm:flex-row w-full pb-2 mb-4 border-b-2 border-gray-100 px-0'
              ref={(el) => (achievementsRef.current[i] = el)}
            >
              <div className='text-left sm:text-right w-full sm:w-1/2 block'>
                <strong className='mr-2 block sm:inline float-left sm:float-none w-[44px] sm:w-auto'>
                  2025
                </strong>
                <span className='block sm:inline float-left sm:float-none w-[calc(100%-52px)] sm:w-auto'>
                  Cursando el último año de la carrera de Arquitectura
                </span>
              </div>
              <div className='w-full sm:w-1/2 pl-[52px]  font-bold pt-2 sm:pt-0'>
                Universidad Ricardo Palma
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
