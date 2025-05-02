import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useDataStore = create(
  persist(
    (set) => ({
      data: [],
      addData: (newItem) =>
        set((state) => ({
          data: [...state.data, newItem],
        })),
      setData: (newDataArray) =>
        set(() => ({
          data: newDataArray,
        })),
      clearData: () => set({ data: [] }),
    }),
    {
      name: 'data-storage', 
    }
  )
);

export default useDataStore;
