import { create } from 'zustand';

type Language = 'th' | 'en';

interface LanguageStore {
  lang: Language;
  setLang: (l: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  lang: 'th', // default ภาษาไทย
  setLang: (l) => set({ lang: l }),
}));