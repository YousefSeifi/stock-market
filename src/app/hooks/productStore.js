import { create } from "zustand";

export const useProductStore = create((set) => ({
  // Accordion state:  controls which accordion section is open (only one at a time)
  openAccordion: null,
  setOpenAccordion: (id) =>
    set((state) => ({ openAccordion: state.openAccordion === id ? null : id })),

  // Dropdown menus
  menus: { size: false, color: false },
  toggleMenu: (key) =>
    set((state) => ({ menus: { ...state.menus, [key]: !state.menus[key] } })),

  // Gallery
  activeTab: 0,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
