'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from '../ui/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export const ProjectIdSection = ({ projectId }) => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const detailsRef = useRef(null);
  const galleryRef = useRef([]);
  const commentsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imgRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );

    if (detailsRef.current?.children) {
      tl.fromTo(
        detailsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.25,
        },
        '-=0.5'
      );
    }

    galleryRef.current.forEach((element) => {
      if (element) {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (commentsRef.current) {
      gsap.fromTo(
        commentsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: commentsRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section>
      <div className='w-full max-w-7xl flex flex-col justify-center px-4 gap-8'>
        <div className='w-full flex justify-center relative'>
          <Image
            src={'/img-hero.webp'}
            alt={'project.name'}
            width={1280}
            height={600}
            className='w-full max-w-[1280px] max-h-[480px] object-center object-cover block'
            ref={imgRef}
          />
        </div>
        <div
          className='flex flex-col sm:flex-row justify-between gap-8'
          ref={titleRef}
        >
          <h3>Casa Minimalista en Lima {projectId}</h3>
          <div className='w-full' ref={detailsRef}>
            <div className='w-full grid grid-cols-2 lg:grid-cols-[24%_40%_18%_18%] justify-between mb-6 gap-4'>
              <div>
                <p>Lugar</p>
                <strong>Lima, Perú</strong>
              </div>
              <div>
                <p>Fase del proyecto</p>
                <strong>Diseño Conceptual</strong>
              </div>
              <div>
                <p>Año</p>
                <strong>2023</strong>
              </div>
              <div>
                <p>Área</p>
                <strong>100 m²</strong>
              </div>
            </div>
            <p>
              Este proyecto presenta un diseño arquitectónico minimalista que
              busca la armonía entre funcionalidad y estética. La vivienda se
              caracteriza por sus líneas limpias, espacios abiertos y una paleta
              de colores neutros que maximizan la iluminación natural. Se
              priorizó el uso de materiales sostenibles y de bajo mantenimiento,
              logrando un equilibrio perfecto entre modernidad y confort.
            </p>
          </div>
        </div>

        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 justify-between mt-8'>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} ref={(el) => (galleryRef.current[i] = el)}>
                <ProjectCard
                  imageSrc={'/img-hero.webp'}
                  showInfo={false}
                  hoverZoom={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='w-full pt-8' ref={commentsRef}>
          <p className='text-center text-xl'>
            Estaré encantada de ayudarle con su proyecto.
          </p>
          <p className='text-center mt-8'>
            +51 987 654 321
            <span> / </span>
            carlamelany@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};
