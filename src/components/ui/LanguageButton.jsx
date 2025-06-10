'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export const LanguageButton = ({ locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (targetLocale) => {
    if (targetLocale === locale) return;

    const pathWithoutLocale = pathname.replace(/^\/(en|es)/, '') || '';
    router.push(`/${targetLocale}${pathWithoutLocale}`);
  };

  return (
    <div className='flex gap-2'>
      {['en', 'es'].map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-2 underline-offset-4 rounded cursor-pointer ${
            locale === lang ? 'underline' : 'hover:underline'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
