'use client';

import React, { useEffect, useRef } from 'react';
import { ContactForm } from '../ui/ContactForm';
import gsap from 'gsap';

export const ContacSection = ({ contactData }) => {
  const contacRef = useRef(null);

  useEffect(() => {
    const elements = contacRef.current.children;
    const tl = gsap.timeline();

    tl.fromTo(
      elements[0],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      elements[1],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );
    tl.fromTo(
      elements[2],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );
  }, []);
  return (
    <section>
      <div className='flex flex-col gap-4 px-4 w-full max-w-7xl'>
        <div className='mb-10' ref={contacRef}>
          <h3>{contactData.titlePage}</h3>
          <p className='mt-4'>{contactData.descriptionPage}</p>
          <div className='mt-4'>
            <p className='text-sm text-primary'>+51 987 654 321</p>
            <p className='text-sm text-primary'>carlamelany@gmail.com</p>
          </div>
        </div>

        <ContactForm contactData={contactData} />
      </div>
    </section>
  );
};
