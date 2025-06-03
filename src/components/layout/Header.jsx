'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import MenuButton from '../MenuButton';
import { MenuOverlay } from '../MenuOverlay';
import { useMenuAnimation } from '@/hooks/useMenuAnimation';

gsap.registerPlugin(CSSRulePlugin);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef([]);
  const subNavRef = useRef(null);
  const pathname = usePathname();

  const { play, reverse } = useMenuAnimation(
    menuItemsRef,
    overlayRef,
    subNavRef
  );

  const toggleMenu = () => {
    isMenuOpen ? reverse() : play();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    reverse();
    setIsMenuOpen(false);
  };

  return (
    <header className='flex w-full justify-center items-center'>
      <nav className='fixed top-0 w-full max-w-7xl flex items-center justify-between px-4 py-2 text-alternative mix-blend-difference z-10'>
        <Link href={'/'} className='font-bold text-lg' onClick={closeMenu}>
          carlamelany
        </Link>
        <MenuButton isActive={isMenuOpen} onClick={toggleMenu} />
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
