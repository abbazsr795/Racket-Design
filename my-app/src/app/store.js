import { create } from 'zustand'

const useStore = create((set) => ({
  selectedTab: 0,
  changeSelectedTab: (data) => set((state) => ({ selectedTab: data })),
}))

export default useStore