'use client';
import React, { useEffect, useRef } from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const projectsRef = useRef(null);
  const projectCardRef = useRef([]);
  useEffect(() => {
    const elements = projectsRef.current.children;
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: elements,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  useEffect(() => {
    const elements = projectCardRef.current;
    elements.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.15,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);
  return (
    <div
      className='w-full flex flex-col justify-center items-center pt-16'
      id='projects'
    >
      <div className='w-full max-w-7xl px-4 project-card' ref={projectsRef}>
        <h3 className='text-3xl sm:text-5xl lg:text-6xl font-black'>
          ¿Cómo diseño?
        </h3>
        <p className='mt-4'>
          Cada proyecto es una oportunidad para explorar la relación entre el
          espacio, la funcionalidad y la estética. Desde el primer boceto hasta
          los detalles finales, mi proceso de diseño busca crear ambientes que
          sean habitables, eficientes y visualmente impactantes. Con una visión
          en constante evolución y un compromiso con el aprendizaje, cada
          propuesta arquitectónica refleja creatividad, técnica y una profunda
          atención al contexto y las necesidades del usuario.
        </p>

        <div className='columns-1 sm:columns-2 gap-4 w-full mt-8'>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} ref={(el) => (projectCardRef.current[i] = el)}>
              <ProjectCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
