'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from '../ui/ProjectCard';
import ProjectNotFound from '@/app/[locale]/project/[id]/not-found';

gsap.registerPlugin(ScrollTrigger);

export const ProjectIdSection = ({ projectData, projectId }) => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const detailsRef = useRef(null);
  const galleryRef = useRef([]);
  const commentsRef = useRef(null);

  const projectFound = projectData.projectsList.find(
    (project) => project.slug === projectId
  );

  if (!projectFound) {
    return <ProjectNotFound />;
  }

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
              start: 'top 95%',
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
            src={projectFound.cover}
            alt={projectFound.name}
            width={1280}
            height={600}
            className='w-full max-w-[1280px] max-h-[480px] object-center object-cover block'
            ref={imgRef}
          />
        </div>
        <div
          className='flex flex-col sm:flex-row justify-between gap-8 mt-6'
          ref={titleRef}
        >
          <h3>{projectFound.name}</h3>
          <div className='w-full' ref={detailsRef}>
            <div className='w-full grid grid-cols-2 lg:grid-cols-[28%_38%_14%_14%] justify-between mb-6 gap-4 lg:gap-2'>
              <div>
                <h5>{projectData.labelLocation}</h5>
                <strong>{projectFound.location}sadsd</strong>
              </div>
              <div>
                <h5>{projectData.labelProjectPhase}</h5>
                <strong>{projectFound.projectPhase}</strong>
              </div>
              <div>
                <h5>{projectData.labelYear}</h5>
                <strong>{projectFound.year}</strong>
              </div>
              <div>
                <h5>{projectData.labelArea}</h5>
                <strong>{projectFound.area}</strong>
              </div>
            </div>
            <p>{projectFound.description}</p>
          </div>
        </div>

        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 justify-between mt-8'>
            {projectFound.images.map((image, i) => (
              <div key={i} ref={(el) => (galleryRef.current[i] = el)}>
                <ProjectCard
                  imageSrc={image}
                  showInfo={false}
                  hoverZoom={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='w-full pt-8' ref={commentsRef}>
          <p className='text-center text-xl'>{projectData.comment}</p>
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
