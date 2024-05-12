import { create } from "zustand";

interface PageState {
  currSignupPage: number;
  currLoginPage: number;
  nextSignupPage: (by: number) => void;
  nextLoginPage: (by: number) => void;

}

export const usePageStore = create<PageState>()((set) => ({
  currSignupPage: 0,
  currLoginPage: 0,
  nextSignupPage: (by) => set((state) => ({ currSignupPage: state.currSignupPage + by })),
  nextLoginPage: (by) => set((state) => ({ currLoginPage: state.currLoginPage + by })),

}));
