import { create } from "zustand";

interface PageState {
  currPage: number;
  nextPage: (by: number) => void;
}

export const usePageStore = create<PageState>()((set) => ({
  currPage: 0,
  nextPage: (by) => set((state) => ({ currPage: state.currPage + by })),
}));
