import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

export const useMenuAnimation = (menuItemsRef, overlayRef, subNavRef) => {
  const timeline = useRef(null);
  const activeItemRule = useRef(null);

  useEffect(() => {
    activeItemRule.current = CSSRulePlugin.getRule(
      '.menu-item p#active::after'
    );

    gsap.set(menuItemsRef.current, { y: 255 });

    const tl = gsap.timeline({ paused: true });

    tl.to(overlayRef.current, {
      duration: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      ease: 'power4.inOut',
    })
      .to(
        menuItemsRef.current,
        {
          duration: 1.2,
          y: 0,
          stagger: 0.2,
          ease: 'power4.out',
        },
        '-=1'
      )
      .to(
        activeItemRule.current,
        {
          width: '100%',
          duration: 1,
          ease: 'power4.out',
          delay: 0.3,
        },
        '<'
      )
      .to(
        subNavRef.current,
        {
          bottom: '5%',
          opacity: 1,
          duration: 0.5,
          delay: 0.3,
        },
        '<'
      );

    timeline.current = tl;
  }, []);

  const play = () => timeline.current?.play();
  const reverse = () => timeline.current?.reverse();

  return { play, reverse };
};
