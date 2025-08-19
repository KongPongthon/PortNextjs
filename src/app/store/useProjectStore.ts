import { create } from "zustand";

interface ProjectState {
  targetId: number | null;
  setTargetId: (id: number | null) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  targetId: null,
  setTargetId: (id) => set({ targetId: id }),
}));
