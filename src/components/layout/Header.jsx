import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full h-16 z-50'>
      <nav className='flex items-center justify-center h-full'>
        <div className='flex items-center justify-between w-full h-full max-w-7xl px-4 py-2'>
          <div className='text-lg font-bold'>carlamelany</div>
          <ul className='flex space-x-4'>
            <li>
              <Link href='#projects' className='hover:underline'>
                Project
              </Link>
            </li>
            <li>
              <Link href='#about' className='hover:underline'>
                About
              </Link>
            </li>
            <li>
              <Link href='#contact' className='hover:underline'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
    </header>
  );
};
