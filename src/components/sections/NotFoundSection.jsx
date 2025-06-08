import React from 'react';

export const NotFoundSection = () => {
  return (
    <section className='min-h-[80vh]'>
      <div className='w-full max-w-7xl px-4'>
        <h1 className='text-9xl font-black'>404</h1>
        <h3>Página no encontrada</h3>
        <p className='my-8'>
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <p>
          Por favor, verifica la URL o{' '}
          <a href='/' className='underline underline-offset-4'>
            regresa a la página principal
          </a>
          .
        </p>
      </div>
    </section>
  );
};
