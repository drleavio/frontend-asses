// store/dataStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useDataStore = create(
  persist(
    (set) => ({
      data: [],

      // Push new item(s) into the array
      addData: (newItem) =>
        set((state) => ({
          data: [...state.data, newItem],
        })),

      // (Optional) Replace the whole array if needed
      setData: (newDataArray) =>
        set(() => ({
          data: newDataArray,
        })),

      // (Optional) Clear array
      clearData: () => set({ data: [] }),
    }),
    {
      name: 'data-storage', // key in localStorage
    }
  )
);

export default useDataStore;
