import { create } from 'zustand'

const useStore = create((set) => ({
  selectedTab: 0,
  changeSelectedTab: (data) => set((state) => ({ selectedTab: data })),
  showPassword : false,
  changeShowPassword: (data) => set((state) => ({showPassword : data}))
}))

export default useStore