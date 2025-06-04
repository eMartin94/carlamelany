'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import MenuButton from '../ui/MenuButton';
import { MenuOverlay } from '../ui/MenuOverlay';
import { useMenuAnimation } from '@/hooks/useMenuAnimation';
import { useScroll } from '@/hooks/useScroll';

gsap.registerPlugin(CSSRulePlugin);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef([]);
  const subNavRef = useRef(null);
  const pathname = usePathname();
  const isScrolled = useScroll();

  const { play, reverse } = useMenuAnimation(
    menuItemsRef,
    overlayRef,
    subNavRef
  );

  const toggleMenu = () => {
    if (isMenuOpen) {
      document.body.classList.remove('overflow-hidden');
      reverse();
    } else {
      play();
      document.body.classList.add('overflow-hidden');
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    reverse();
    setIsMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <header className='flex w-full justify-center items-center'>
      <nav
        className={`w-full max-w-7xl flex items-center justify-between px-4 py-2 text-alternative mix-blend-difference z-10 ${
          isScrolled ? 'absulute opacity-0' : 'fixed top-0 left-0 opacity-100'
        } transition-all duration-300 ease-linear`}
      >
        <Link href={'/'} className='font-bold text-lg' onClick={closeMenu}>
          carlamelany
        </Link>

        <div className='flex gap-2'>
          <button className='cursor-pointer'>ES</button>
          <button className='cursor-pointer'>EN</button>
          <MenuButton isActive={isMenuOpen} onClick={toggleMenu} />
        </div>
      </nav>

      <MenuOverlay
        isMenuOpen={isMenuOpen}
        overlayRef={overlayRef}
        menuItemsRef={menuItemsRef}
        subNavRef={subNavRef}
        pathname={pathname}
        onLinkClick={closeMenu}
      />
    </header>
  );
};
