import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ContactForm = () => {
  const titleFormRef = useRef(null);
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const animateElements = (
      elements,
      direction = 'y',
      offset = 50,
      delay = 0.5
    ) => {
      const tl = gsap.timeline();
      Array.from(elements).forEach((el, index) => {
        tl.fromTo(
          el,
          { opacity: 0, [direction]: direction === 'x' ? offset : offset },
          {
            opacity: 1,
            [direction]: 0,
            duration: 1,
            delay: index === 0 ? delay : 0,
          },
          index === 0 ? 0 : '-=0.5'
        );
      });
    };

    if (titleFormRef.current) {
      animateElements(titleFormRef.current.children, 'y');
    }
    if (inputRef.current) {
      animateElements(inputRef.current.children, 'x', -50);
    }
    if (textAreaRef.current) {
      const elements = textAreaRef.current.children;
      if (elements[1]) {
        gsap.fromTo(
          elements[1],
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );
      }
    }
    if (buttonRef.current) {
      const elements = buttonRef.current.children;
      if (elements[0]) {
        gsap.fromTo(
          elements[0],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: 0.5 }
        );
      }
    }
  }, []);

  return (
    <>
      <div className='w-full' ref={titleFormRef}>
        <h5 className='text-4xl text-center mb-4'>
          ¿Tienes un proyecto en mente?
        </h5>
        <p className='text-center'>No dudes en escribirme</p>
      </div>
      <form className='flex flex-col gap-4 mt-8'>
        <div
          className='flex flex-col sm:flex-row w-full gap-4'
          ref={textAreaRef}
        >
          <div className='flex flex-col gap-4' ref={inputRef}>
            <div className='w-full sm:w-80 h-14 border-[1px] border-gray-300 flex items-center p-2'>
              <input
                type='text'
                placeholder='Nombre'
                className='w-full h-full outline-none'
              />
            </div>
            <div className='w-full sm:w-80 h-14 border-[1px] border-gray-300 flex items-center p-2'>
              <input
                type='email'
                placeholder='Correo electrónico'
                className='w-full h-full outline-none'
              />
            </div>
            <div className='w-full sm:w-80 h-14 border-[1px] border-gray-300 flex items-center p-2'>
              <input
                type='text'
                placeholder='Teléfono'
                className='w-full h-full outline-none'
              />
            </div>
          </div>
          <div className='w-full min-h-[200px] border-[1px] border-gray-300 flex items-start p-2'>
            <textarea
              placeholder='Escribe tu mensaje aquí...'
              className='w-full h-full resize-none outline-none'
            />
          </div>
        </div>
        <div className='w-full flex justify-end' ref={buttonRef}>
          <button
            type='submit'
            className='w-full sm:w-80 h-14 bg-primary text-white uppercase hover:bg-secondary font-bold cursor-pointer'
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
