'use client';
import React from 'react';
import { useLanguageStore } from '../store/useLanguageStore';

const LanguageSwitcher = () => {
    const { lang } = useLanguageStore();
    // console.log("lang",lang);
    
  const setLang = useLanguageStore((s) => s.setLang);

  return (
    <div className="flex gap-2">
      <button
        className={lang === 'th' ? 'font-bold' : ''}
        onClick={() => setLang('th')}
      >
        ไทย
      </button>
      <button
        className={lang === 'en' ? 'font-bold' : ''}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
