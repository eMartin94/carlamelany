'use client';

import { useScroll } from '@/hooks/useScroll';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { IconArrowUp } from '@tabler/icons-react';
import React from 'react';

export const ScrollToTopButton = () => {
  const scrollToTop = useScrollToTop();
  const isScrolled = useScroll();
  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 sm:bottom-16 right-4 sm:right-8 hover:bg-accent p-2 rounded-full bg-primary cursor-pointer ${
          isScrolled
            ? 'opacity-100 translate-y-0'
            : ' opacity-0 translate-y-full'
        } transition-all duration-300 ease-linear`}
      >
        <IconArrowUp className='text-white' />
      </button>
    </div>
  );
};
