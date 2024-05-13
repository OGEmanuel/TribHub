import { create } from "zustand";

interface TabState {
  currTab: string;
  nextTab: (by: string) => void;
}

export const useTabStore = create<TabState>()((set) => ({
  currTab: "all",
  nextTab: (by) => set((state) => ({ currTab: (state.currTab = by) })),
}));
