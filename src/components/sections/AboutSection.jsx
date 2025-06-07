'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
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
            src='/img-hero.webp'
            alt='about'
            width={800}
            height={500}
            className='w-full max-h-[200px] sm:max-h-[400px] object-cover'
          />
        </div>
        <h3>Más que líneas y planos</h3>
        <p className='mt-4'>
          Desde que comencé mi camino en la arquitectura, he descubierto que
          diseñar no es solo crear estructuras, sino dar forma a experiencias.
          Cada proyecto es una oportunidad para explorar cómo los espacios
          pueden influir en la vida de las personas, combinando funcionalidad,
          estética y contexto. Me interesa especialmente la relación entre el
          diseño y la habitabilidad, buscando siempre soluciones creativas e
          innovadoras que respondan a las necesidades reales. A través de mis
          estudios y proyectos, he aprendido que cada línea en un boceto es el
          inicio de un espacio con propósito. Me apasiona experimentar con
          materiales, formas y conceptos, siempre con el objetivo de mejorar la
          interacción entre el ser humano y su entorno. Este portafolio refleja
          mi evolución como estudiante de arquitectura, mis exploraciones en el
          diseño y mi compromiso con crear espacios que cuenten historias. Cada
          proyecto es un desafío, pero también una oportunidad para aprender,
          crecer y seguir descubriendo lo que la arquitectura puede lograr.
        </p>
      </div>
    </section>
  );
};
