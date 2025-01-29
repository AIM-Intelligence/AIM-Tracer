//! AIM Intelligence
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ActiveNodesState {
  activeNodeLogs: Record<string, Record<string, any>>; // traceId를 key로 사용
  setActiveNodeLog: (traceId: string, log: Record<string, any>) => void;
  getActiveNodeLog: (traceId: string) => Record<string, any>;
  clearActiveNodeLog: (traceId: string) => void;
}

export const useActiveNodesStore = create<ActiveNodesState>()(
  persist(
    (set, get) => ({
      activeNodeLogs: {},
      setActiveNodeLog: (traceId: string, log: Record<string, any>) =>
        set((state) => ({
          activeNodeLogs: {
            ...state.activeNodeLogs,
            [traceId]: log,
          },
        })),
      getActiveNodeLog: (traceId: string) => {
        const state = get();
        return state.activeNodeLogs[traceId] || {};
      },
      clearActiveNodeLog: (traceId: string) =>
        set((state) => ({
          activeNodeLogs: {
            ...state.activeNodeLogs,
            [traceId]: {},
          },
        })),
    }),
    {
      name: 'active-nodes-storage', // unique name for localStorage key
      partialize: (state) => ({ activeNodeLogs: state.activeNodeLogs }),
    }
  )
);
