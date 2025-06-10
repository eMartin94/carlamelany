'use client';
import React, { useEffect, useRef } from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = ({ locale, projectData }) => {
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
    <section id='projects'>
      <div className='w-full max-w-7xl px-4 project-card' ref={projectsRef}>
        <h3>{projectData.titlePage}</h3>
        <p className='mt-4'>{projectData.descriptionPage}</p>

        <div className='columns-1 sm:columns-2 gap-4 w-full mt-8'>
          {projectData.projectsList.map((project, i) => (
            <div key={i} ref={(el) => (projectCardRef.current[i] = el)}>
              <ProjectCard
                imageSrc={project.cover}
                href={`/${locale}/project/${project.slug}`}
                title={project.name}
                tags={project.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
